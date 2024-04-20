package com.rms.services.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rms.services.exception.AccessPointException;
import com.rms.services.service.JReportSheetService;
import com.rms.services.service.RemissionAdminService;
import com.rms.services.vo.FiltersVO;
import com.rms.services.vo.ProductDetailedVO;
import com.rms.services.vo.RemissionVO;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import net.sf.jasperreports.engine.JRException;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("api/v1/rms")
public class RemissionAdminController {

	@Autowired
	RemissionAdminService remissionAdminService;
	@Autowired
	JReportSheetService jReportSheetService;

	@PostMapping("/remission")
	public ResponseEntity<?> createRemission(@RequestBody @Valid RemissionVO complexRequest) {
		System.out.println("Creating remission");

		complexRequest = remissionAdminService.createRemission(complexRequest);

		if (complexRequest == null)
			return ResponseEntity.internalServerError().build();

		return ResponseEntity.ok().body(complexRequest);
	}

	@PostMapping("/remission/subtitution")
	public ResponseEntity<?> createRemissionDuplicate(@RequestBody @Valid RemissionVO complexRequest) {
		System.out.println("Creating remission");

		complexRequest = remissionAdminService.createRemissionDuplication(complexRequest);

		if (complexRequest == null)
			return ResponseEntity.internalServerError().build();

		return ResponseEntity.ok().body(complexRequest);
	}

	/*
	 * @DeleteMapping("/remission/{remissionId}") public ResponseEntity<String>
	 * deleteComplex(@PathVariable String remissionId) {
	 * System.out.println("Deleting complex");
	 * 
	 * String response = remissionAdminService.deleteComplex(remissionId);
	 * 
	 * return ResponseEntity.ok().body(response); }
	 * 
	 */

	@GetMapping("/remission/{id}")
	public ResponseEntity<RemissionVO> getOneRemission(@PathVariable String id) {

		RemissionVO result = remissionAdminService.getRemissionInfo(id);
		if (result != null) {

			return ResponseEntity.ok().body(result);

		} else {
			return ResponseEntity.noContent().build();
		}

	}

	@DeleteMapping("/remission/{remissionId}")
	public ResponseEntity<String> deleteOneRemission(@PathVariable String remissionId) {

		try {
			remissionAdminService.deleteRemission(remissionId);
			return ResponseEntity.ok().body("Remission deleted");
		} catch (Exception e) {
			return ResponseEntity.internalServerError().body(e.getMessage());
		}
	}

	@PostMapping("/remission/all")
	public ResponseEntity<CollectionModel<RemissionVO>> getAllRemissions(@RequestBody FiltersVO filters) {

		List<RemissionVO> results = remissionAdminService.getFilteredRemission(filters);

		if (results.isEmpty()) {

			return ResponseEntity.noContent().build();
		} else {
			CollectionModel<RemissionVO> model = CollectionModel.of(results);

			return new ResponseEntity<>(model, HttpStatus.OK);
		}

	}

	@PostMapping("/remission/all/detail")
	public ResponseEntity<List<ProductDetailedVO>> getAllRemissionsDetail(@RequestBody FiltersVO filters) {

		List<ProductDetailedVO> results = remissionAdminService.getFilteredRemissionDetailed(filters);

		if (results.isEmpty()) {
			return ResponseEntity.noContent().build();
		} else {
			return new ResponseEntity<>(results, HttpStatus.OK);
		}

	}

	@GetMapping("/remission/print/{finalFolio}/{print}/{remissionId}")
	public void getAccessPointSheet(HttpServletResponse response, @PathVariable String remissionId,
			@PathVariable String finalFolio, @PathVariable String print) throws IOException, JRException {

		response.setContentType("application/pdf");

		String headerKey = "Content-DispoaccessPointIdsition";

		String headerValue = "attachment; filename=pdf_remision_" + remissionId + ".pdf";

		response.setHeader(headerKey, headerValue);

		boolean printPrices = Boolean.parseBoolean(print);

		jReportSheetService.exportJasperReport(response, remissionId, finalFolio, printPrices);
	}

	@GetMapping("/remission/admin/check/{remissionId}")
	public ResponseEntity<RemissionVO> getAllRemissionsDetail(@PathVariable String remissionId) {

		try {
			RemissionVO changedRemission = remissionAdminService.checkRemissionDuplication(remissionId);
			return new ResponseEntity<>(changedRemission, HttpStatus.OK);
		} catch (AccessPointException e) {
			return ResponseEntity.noContent().build();
		}

	}

	@PostMapping("/remission/cancelation")
	public ResponseEntity<?> remissionCancelation(@RequestBody RemissionVO remissionRequest) {
		System.out.println("Canceling remission");

		try {
			RemissionVO remisionResult = remissionAdminService.remissionCancelation(remissionRequest);
			
			if (remisionResult == null) {
				return ResponseEntity.internalServerError().build();
			}
			
			return ResponseEntity.ok().body(remisionResult);
		} catch (Exception e) {
			return ResponseEntity.ok().body(e.getMessage());
		}

		
	}

}
