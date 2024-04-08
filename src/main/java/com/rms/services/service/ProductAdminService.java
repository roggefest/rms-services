package com.rms.services.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.rms.services.exception.AccessPointException;
import com.rms.services.model.ProductCatalog;
import com.rms.services.repository.ProductCatalogRepository;
import com.rms.services.vo.FiltersVO;
import com.rms.services.vo.ProductVO;

import jakarta.validation.Valid;

@Service
public class ProductAdminService {

	@Autowired
	ProductCatalogRepository productRepository;

	public ProductVO getProductInfo(String productId) {
		Optional<ProductCatalog> result = productRepository.findById(productId);

		if (result.isPresent()) {
			ProductCatalog productEntity = result.get();

			ProductVO productVO = new ProductVO();
			BeanUtils.copyProperties(productEntity, productVO);

			return productVO;

		} else {
			return null;
		}

	}

	public @Valid ProductVO createProduct(@Valid ProductVO productRequest) {

		ProductCatalog product;
		// Check if the complexRequest ID is null or blank, indicating a new Complex
		// needs to be created.
		if (productRequest.getId() == null || productRequest.getId().isBlank()) {
			product = ProductCatalog.builder().description(productRequest.getDescription())
					.price(productRequest.getPrice()).title(productRequest.getTitle())
					.partidaId(productRequest.getPartidaId()).description(productRequest.getAreaDescription())
					.categoryDescription(productRequest.getCategoryDescription())
					.categoryId(productRequest.getCategoryId()).destinationId(productRequest.getDestinationId())
					.partidaDescription(productRequest.getPartidaDescription())
					.generateIva(productRequest.isGenerateIva())
					.areaDescription(productRequest.getAreaDescription()).build();

			// Save the new Complex entity to the database.
			product = productRepository.save(product);
		} else {
			// If the ID is not null or blank, attempt to find the existing Complex.
			ProductCatalog existingProduct = productRepository.findById(productRequest.getId())
					.orElseThrow(() -> new AccessPointException("Complex with given ID does not exist"));

			// Update the existing Complex entity with new values.
			existingProduct.setTitle(productRequest.getTitle());
			existingProduct.setPrice(productRequest.getPrice());
			existingProduct.setDescription(productRequest.getDescription());
			existingProduct.setPartidaId(productRequest.getPartidaId());
			existingProduct.setPartidaDescription(productRequest.getPartidaDescription());
			existingProduct.setCategoryId(productRequest.getCategoryId());
			existingProduct.setCategoryDescription(productRequest.getCategoryDescription());
			existingProduct.setDestinationId(productRequest.getDestinationId());
			existingProduct.setGenerateIva(productRequest.isGenerateIva());
			existingProduct.setAreaDescription(productRequest.getAreaDescription());

			// existingComplex.setComplexTopic(ServicesUtils.createTopic(complexRequest.getComplexTitle()));

			// Save the updated Complex entity to the database.
			product = productRepository.save(existingProduct);
		}

		// Copy properties from the Complex entity back to the ComplexVO.
		BeanUtils.copyProperties(product, productRequest);

		return productRequest;
	}

	public ProductCatalog deleteProduct(String productId) throws AccessPointException {

		productRepository.findById(productId)
				.orElseThrow(() -> new AccessPointException("The Product catalog doesn't exist"));
		Optional<ProductCatalog> productEntity = productRepository.findById(productId);
		if (productEntity.isPresent()) {
			productRepository.deleteById(productId);

			return productEntity.get();
		} else {
			throw new AccessPointException("Product catalogo doesn't exist, can't be deleted");
		}

	}

	public List<ProductVO> getAllProducts(FiltersVO filters) {
		// Initialize the list of ProductVO objects to be returned
		List<ProductVO> products = new ArrayList<>();

		if (filters.getPartidaId() == null)
			filters.setPartidaId(0);

		// Retrieve the list of ProductCatalog entities based on the provided filters
		List<ProductCatalog> productEntities = getProductEntitiesBasedOnFilters(filters);

		// Convert each ProductCatalog entity to a ProductVO object and add it to the
		// products list
		productEntities.forEach(productEntity -> {
			ProductVO productVO = new ProductVO();
			BeanUtils.copyProperties(productEntity, productVO);
			// The following lines are commented out as they seem to be related to adding
			// HATEOAS links.
			// If needed, they can be uncommented and adjusted according to the actual
			// requirements.
			/*
			 * productVO.add(
			 * linkTo(methodOn(ComplexAdminController.class).getOneComplex(productEntity.
			 * getId())).withSelfRel().withName("info")); productVO.add(
			 * linkTo(methodOn(AccessPointAdminController.class).getAllAccessPoints(
			 * productEntity.getId())).withSelfRel().withName("get access points"));
			 */
			products.add(productVO);
		});

		return products;
	}

	private List<ProductCatalog> getProductEntitiesBasedOnFilters(FiltersVO filters) {
	    // Use Optional to handle null checks more elegantly
	    String destinationId = Optional.ofNullable(filters.getDestinationId()).orElse("0");
	    int partidaId = Optional.ofNullable(filters.getPartidaId()).orElse(0);
	    
	    // Simplify condition checks by directly returning the result of the repository method
	    if (!"0".equalsIgnoreCase(destinationId) && partidaId != 0) {
	        return productRepository.findByDestinationIdAndPartidaId(destinationId, partidaId);
	    } else if (!"0".equalsIgnoreCase(destinationId)) {
	        return productRepository.findByDestinationId(destinationId);
	    } else {
	        return productRepository.findByPartidaId(partidaId);
	    }
	}

}
