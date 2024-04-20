package com.rms.services.service;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rms.services.controller.RemissionAdminController;
import com.rms.services.exception.AccessPointException;
import com.rms.services.model.Area;
import com.rms.services.model.Product;
import com.rms.services.model.Remission;
import com.rms.services.repository.AreaRepository;
import com.rms.services.repository.ProductRepository;
import com.rms.services.repository.RemissionRepository;
import com.rms.services.vo.FiltersVO;
import com.rms.services.vo.ProductDetailedVO;
import com.rms.services.vo.ProductVO;
import com.rms.services.vo.RemissionVO;

import jakarta.validation.Valid;

@Service
public class RemissionAdminService {

	@Autowired
	RemissionRepository remissionRepository;

	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	AreaRepository areaRepository;

	public RemissionVO getRemissionInfo(String remissionId) {

		RemissionVO remissionVO = new RemissionVO();
		Optional<Remission> result = remissionRepository.findById(remissionId);
		
		

		if (result.isPresent()) {
				
			Remission remission = result.get();
			
			Optional<Area> area = areaRepository.findById(remission.getDestinationId());

			BeanUtils.copyProperties(remission, remissionVO);

			if(area.isPresent()) {
				remissionVO.setClient(area.get().getClientName());	
			}
			

			remissionVO.setProducts(getRemissionProducts(remission));

			/*
			 * remissionVO.add(
			 * linkTo(methodOn(AccessPointAdminController.class).getAllAccessPoints(
			 * complexId)).withSelfRel());
			 */

			return remissionVO;

		} else {
			return null;
		}

	}

	public void deleteRemission(String remissionId) throws Exception {

		remissionRepository.deleteById(remissionId);

	}

	public RemissionVO createRemission(@Valid RemissionVO remisionRequest) {

		Remission remission;

		final List<Product> productList = new ArrayList<>();

		remisionRequest.getProducts().forEach(

				product -> {
					Product productEntity = new Product();
					BeanUtils.copyProperties(product, productEntity);
					productList.add(productEntity);
				}

		);

		// Check if the complexRequest ID is null or blank, indicating a new Complex
		// needs to be created.
		if (remisionRequest.getId() == null || remisionRequest.getId().isBlank()
				|| remisionRequest.getId().equalsIgnoreCase("0")) {
			remission = Remission.builder().folio(remisionRequest.getFolio())
					.destinationId(remisionRequest.getDestinationId())
					.areaDescription(remisionRequest.getAreaDescription())
					.userId("rogelio")
					.greatTotal(remisionRequest.getGreatTotal())
					.total(remisionRequest.getTotal())
					.formatId(remisionRequest.getFormatId())
					.products(productList)
					.expeditionDate(remisionRequest.getExpeditionDate())
					.status("Activa")
					.creationDate(new Date())
					.observations(remisionRequest.getObservations())
					.userId("1").build();

			remission.setProducts(productList);
			// Save the new Complex entity to the database.
			remission = remissionRepository.save(remission);
		} else {
			// If the ID is not null or blank, attempt to find the existing Complex.
			Remission existingRemission = remissionRepository.findById(remisionRequest.getId())
					.orElseThrow(() -> new AccessPointException("Remission with given ID does not exist"));

			// Update the existing Complex entity with new values.
			existingRemission.setTotal(remisionRequest.getTotal());
			existingRemission.setGreatTotal(remisionRequest.getGreatTotal());
			existingRemission.setDestinationId(remisionRequest.getDestinationId());
			existingRemission.setFolio(remisionRequest.getFolio());
			existingRemission.setExpeditionDate(remisionRequest.getExpeditionDate());
			existingRemission.setFormatId(remisionRequest.getFormatId());
			existingRemission.setProducts(productList);
			existingRemission.setUpatedDate(new Date());
			existingRemission.setObservations(remisionRequest.getObservations());
			existingRemission.setAreaDescription(remisionRequest.getAreaDescription());

			// Save the updated Complex entity to the database.
			remission = remissionRepository.save(existingRemission);
		}

		// Copy properties from the Complex entity back to the ComplexVO.
		BeanUtils.copyProperties(remission, remisionRequest);
		return remisionRequest;
	}


	public List<RemissionVO> getFilteredRemission(FiltersVO filters) {
	    List<RemissionVO> remissionVOList = new ArrayList<>();
	    List<Remission> remissions;

	    // Optimize conditional structure for readability and efficiency
	    if (!Optional.ofNullable(filters.getFolio()).orElse("").isEmpty() && !Optional.ofNullable(filters.getDestinationId()).orElse("").isEmpty()) {
	        remissions = remissionRepository.findByDestinationIdAndFolioId(filters.getFolio(), filters.getDestinationId());
	    } else if (!Optional.ofNullable(filters.getFolio()).orElse("").isEmpty()) {
	        remissions = remissionRepository.findByFolio(filters.getFolio());
	    } else if (!Optional.ofNullable(filters.getDestinationId()).orElse("").isEmpty()) {
	        remissions = remissionRepository.findByDestinationIdOrderByExpeditionDate(filters.getDestinationId());
	    } else {
	        remissions = new ArrayList<>();
	    }

	    // Filter by date range only if no other filters have been applied
	    if (remissions.isEmpty() && filters.getDateInit() != null && filters.getDateEnd() != null) {
	        remissions = remissionRepository.findByInitAndEndExpeditionDate(filters.getDateInit(), filters.getDateEnd());
	    }

	    remissions.forEach(remission -> {
	        RemissionVO remissionVO = new RemissionVO();
	        BeanUtils.copyProperties(remission, remissionVO);

	        try {
	            // Streamline the grouping and concatenation of product descriptions
	            String partidaDescriptions = remission.getProducts().stream()
	                    .map(Product::getPartidaDescription)
	                    .distinct()
	                    .collect(Collectors.joining(", "));
	            remissionVO.setRemissionPartidas(partidaDescriptions);
	        } catch (Exception e) {
	            // Log the exception for better error tracking
	            e.printStackTrace();
	        }

	        remissionVO.setDestinationId(remission.getDestinationId());
	        remissionVO.add(linkTo(methodOn(RemissionAdminController.class).getOneRemission(remission.getId()))
	                .withSelfRel().withName("info"));

	        remissionVOList.add(remissionVO);
	    });

	    return remissionVOList;
	}

	List<ProductVO> getRemissionProducts(Remission remission) {
		List<ProductVO> products = new ArrayList<>();

		remission.getProducts().forEach(

				product -> {
					ProductVO prductVO = new ProductVO();
					BeanUtils.copyProperties(product, prductVO);
					products.add(prductVO);

				}

		);

		return products;
	}

	public RemissionVO createRemissionDuplication(@Valid RemissionVO remisionRequest) {

		// If the ID is not null or blank, attempt to find the existing Complex.
		Remission remission = remissionRepository.findById(remisionRequest.getId())
				.orElseThrow(() -> new AccessPointException("Origin Remission with given ID does not exist"));

		// Update the existing Complex entity with new values.
		remission.setStatus("Cancelada");
		remission.setSubstitutedByFolio(remisionRequest.getFolio());
		// Save the updated Complex entity to the database.
		remission = remissionRepository.save(remission);

		final List<Product> productList = new ArrayList<>();

		remission.getProducts().forEach(

				product -> {
					Product productEntity = new Product();
					BeanUtils.copyProperties(product, productEntity);
					productList.add(productEntity);
				}

		);

		// new remission needs to be created.
		Remission newRemission = Remission.builder().folio(remisionRequest.getFolio())
				.destinationId(remission.getDestinationId()).userId("rogelio").total(remission.getTotal())
				.formatId(remission.getFormatId()).products(productList).expeditionDate(remission.getExpeditionDate())
				.areaDescription(remission.getAreaDescription())
				.creationDate(new Date()).status("Activa").originFolio(remission.getFolio()).userId("1").build();

		newRemission.setProducts(productList);
		// Save the new Complex entity to the database.
		newRemission = remissionRepository.save(newRemission);

		// Copy properties from the Complex entity back to the ComplexVO.
		BeanUtils.copyProperties(newRemission, remisionRequest);
		return remisionRequest;
	}
	
	public List<ProductDetailedVO> getFilteredRemissionDetailed(FiltersVO filters) {
	    List<ProductDetailedVO> productList = new ArrayList<>();
	    List<Remission> remissions;

	    // Optimize conditional structure for readability and efficiency
	    if (!Optional.ofNullable(filters.getFolio()).orElse("").isEmpty() && !Optional.ofNullable(filters.getDestinationId()).orElse("").isEmpty()) {
	        remissions = remissionRepository.findByDestinationIdAndFolioId(filters.getFolio(), filters.getDestinationId());
	    } else if (!Optional.ofNullable(filters.getFolio()).orElse("").isEmpty()) {
	        remissions = remissionRepository.findByFolio(filters.getFolio());
	    } else if (!Optional.ofNullable(filters.getDestinationId()).orElse("").isEmpty()) {
	        remissions = remissionRepository.findByDestinationIdOrderByExpeditionDate(filters.getDestinationId());
	    } else {
	        remissions = new ArrayList<>();
	    }

	    // Filter by date range only if no other filters have been applied
	    if (remissions.isEmpty() && filters.getDateInit() != null && filters.getDateEnd() != null) {
	        remissions = remissionRepository.findByInitAndEndExpeditionDate(filters.getDateInit(), filters.getDateEnd());
	    }

	    remissions.forEach(remission -> {
	        RemissionVO remissionVO = new RemissionVO();
	        BeanUtils.copyProperties(remission, remissionVO);

	        try {
	            // Streamline the grouping and concatenation of product descriptions
	            String partidaDescriptions = remission.getProducts().stream()
	                    .map(Product::getPartidaDescription)
	                    .distinct()
	                    .collect(Collectors.joining(", "));
	            remissionVO.setRemissionPartidas(partidaDescriptions);
	        } catch (Exception e) {
	            // Log the exception for better error tracking
	            e.printStackTrace();
	        }

	        remission.getProducts().stream().forEach(
	        		
	        		p ->{
	        			ProductDetailedVO detail = new ProductDetailedVO();
	        			
	        			BeanUtils.copyProperties(p,detail);
	        			BeanUtils.copyProperties(remissionVO,detail);
	        			productList.add(detail);
	        			
	        		}
	        		);

	    
	    });

	    return productList;
	}
	
    public RemissionVO checkRemissionDuplication(final String remissionId) {
        // Ensure the ID is not null or blank before proceeding.
        if (remissionId == null || remissionId.isBlank()) {
            throw new IllegalArgumentException("Remission ID cannot be null or blank");
        }

        RemissionVO remissionVO = new RemissionVO();
        // Attempt to find the existing Remission.
        Remission remission = remissionRepository.findById(remissionId)
                .orElseThrow(() -> new AccessPointException("Origin Remission with given ID does not exist"));

        // Check if the status of the Remission is "Activa".
        if ("Activa".equalsIgnoreCase(remission.getStatus())) {
            // Update the status and delivered date of the Remission.
            remission.setStatus("Entregada");
            remission.setDeliveredDate(new Date());
            // Save the updated Remission entity to the database.
            remission = remissionRepository.save(remission);
            // Copy properties from the Remission entity to the RemissionVO.
            BeanUtils.copyProperties(remission, remissionVO);
        } else {
            throw new AccessPointException("Origin Remission with given ID is not active");
        }

        return remissionVO;
    }
    
	public RemissionVO remissionCancelation(@Valid RemissionVO remisionRequest) throws ParseException {

		// If the ID is not null or blank, attempt to find the existing Complex.
		Remission remission = remissionRepository.findById(remisionRequest.getId())
				.orElseThrow(() -> new AccessPointException("Origin Remission with given ID does not exist"));

		if("Activa".equalsIgnoreCase(remission.getStatus())) {
			// Update the existing remision entity with new values.
			remission.setStatus("Cancelada");
			
			SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy HH:mm");
			
			if(remisionRequest.getObservations().isEmpty()) {	
				remission.setObservations(String.format("Remisión cancelada el día %s",sdf.format(new Date())));	
			}else {
				remission.setObservations(remisionRequest.getObservations());	
			}
			// Save the updated Complex entity to the database.
			remission = remissionRepository.save(remission);
		}else {
			throw new AccessPointException("No se puede cancelar la remisión");
		}
		
		// Copy properties from the Complex entity back to the ComplexVO.
		BeanUtils.copyProperties(remission, remisionRequest);
		return remisionRequest;
	}
}

