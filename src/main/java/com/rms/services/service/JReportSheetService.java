package com.rms.services.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Base64;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import com.rms.services.exception.AccessPointException;
import com.rms.services.model.Remission;
import com.rms.services.repository.RemissionRepository;
import com.rms.services.vo.ProductVO;
import com.rms.services.vo.RemissionVO;

import jakarta.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.util.JRLoader;

@Service
public class JReportSheetService {

	@Autowired
	RemissionAdminService remissionAdminService;

	@Autowired
	RemissionRepository remissionRepository;

	public void exportJasperReport(HttpServletResponse response, String remissionId, String folio, boolean printPrices)
			throws JRException, IOException, AccessPointException {

		if (!"0".equalsIgnoreCase(folio)) { // Use equalsIgnoreCase with constants first to avoid potential NPE

			Optional<Remission> remission = remissionRepository.findById(remissionId);

			remission.ifPresent(r -> { // Use ifPresent for cleaner Optional handling
				r.setFolio(folio);
				remissionRepository.save(r);
			});
		}

		RemissionVO remissionVo = remissionAdminService.getRemissionInfo(remissionId);
		
		//Calculate IVA for tagged products
		Double sumWithIva = remissionVo.getProducts().stream().filter(ProductVO::isGenerateIva).mapToDouble(p -> (p.getQuantity()*p.getPrice())).sum();
		Double iva = sumWithIva * (0.16D);

		Map<String, List<ProductVO>> productsGrouped = remissionVo.getProducts().stream()
				.collect(Collectors.groupingBy(ProductVO::getPartidaDescription)); // Method reference for cleaner code

		String categories = productsGrouped.keySet().stream().collect(Collectors.joining(", ")); // Streamline string building																							
		remissionVo.setCategory(categories);
		
		Comparator<ProductVO> jornadaComparator
	      = Comparator.comparing(ProductVO::getTurnDescription);
		
		List<ProductVO> orderedProduct = remissionVo.getProducts().stream().sorted(jornadaComparator).collect(Collectors.toList());

		// Determine report name based on formatId
		String reportName = String.format("/remisionFormato%d.jasper", remissionVo.getFormatId());
		if (remissionVo.getFormatId() == 1) {
			reportName = "/remision.jasper"; // Default to this if formatId is 1
		}

		try (InputStream inputStream = getClass().getResourceAsStream(reportName);
				BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream))) {

			NumberToLetter convertQuantity = new NumberToLetter();

			JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(orderedProduct);
			Map<String, Object> parameters = new HashMap<>();
			parameters.put("folio", remissionVo.getFolio());
			parameters.put("expeditionDate", remissionVo.getExpeditionDate());
			parameters.put("clientName", remissionVo.getClient());
			parameters.put("destination", remissionVo.getAreaDescription());
			parameters.put("categoryDescription", remissionVo.getCategory());
			
			parameters.put("subTotal", remissionVo.getTotal());
			parameters.put("iva", iva);
			parameters.put("total", (remissionVo.getTotal() + iva));
			parameters.put("printPrices", printPrices);
			

			String totalString = String.format("%.2f", remissionVo.getTotal());
			parameters.put("totalLetter", "(" + convertQuantity.Convertir(totalString, true) + ")");

			// Fill Jasper report
			JasperPrint jasperPrint = JasperFillManager.fillReport(inputStream, parameters, dataSource);
			// Export report
			JasperExportManager.exportReportToPdfStream(jasperPrint, response.getOutputStream());
		}
	}

	public String exportJasperReportB64(String remissionId) throws JRException, IOException, AccessPointException {

		RemissionVO remissionVo = remissionAdminService.getRemissionInfo(remissionId);

		remissionVo.setCategory("partida1, partida2");

		// Get file and compile it
		File file = ResourceUtils.getFile("classpath:remision.jasper");
		// JasperReport jasperReport =
		// JasperCompileManager.compileReport(file.getAbsolutePath());

		JasperReport jasperReport = (JasperReport) JRLoader.loadObject(file);

		JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(remissionVo.getProducts());
		Map<String, Object> parameters = new HashMap<>();
		parameters.put("folio", remissionVo.getFolio());
		parameters.put("expeditionDate", remissionVo.getExpeditionDate());
		parameters.put("destination", remissionVo.getDestinationId());
		parameters.put("category", remissionVo.getCategory());
		parameters.put("total", remissionVo.getTotal());
		parameters.put("clientName", remissionVo.getClient());
		// Fill Jasper report
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, dataSource);
		// Export report
		byte[] pdf = JasperExportManager.exportReportToPdf(jasperPrint);

		return Base64.getEncoder().encodeToString(pdf);

	}

}
