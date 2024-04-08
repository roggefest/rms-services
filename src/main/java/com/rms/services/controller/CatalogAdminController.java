package com.rms.services.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.rms.services.model.Area;
import com.rms.services.model.Category;
import com.rms.services.model.Partida;
import com.rms.services.service.CatalogService;
import com.rms.services.service.ProductAdminService;
import com.rms.services.vo.AreaVO;
import com.rms.services.vo.FiltersVO;
import com.rms.services.vo.PartidaVO;
import com.rms.services.vo.ProductVO;
import com.rms.services.vo.UnidadesVO;

import jakarta.validation.Valid;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("api/v1/rms/catalog")
public class CatalogAdminController {

	@Autowired
	ProductAdminService productAdminService;

	@Autowired
	CatalogService catalogService;

	@PostMapping("/product")
	public ResponseEntity<?> createProduct(@RequestBody @Valid ProductVO productRequest) {
		System.out.println("Creating product");

		productRequest = productAdminService.createProduct(productRequest);

		if (productRequest == null)
			return ResponseEntity.internalServerError().build();

		return ResponseEntity.ok().body(productRequest);
	}

	@GetMapping("/product/{productId}")
	public ResponseEntity<ProductVO> getOneProduct(@PathVariable String productId) {

		ProductVO result = productAdminService.getProductInfo(productId);
		if (result != null) {

			return ResponseEntity.ok().body(result);

		} else {
			return ResponseEntity.noContent().build();
		}

	}

	@DeleteMapping("/product/{productId}")
	public ResponseEntity<?> deleteOneProduct(@PathVariable String productId) {

		try {

			return ResponseEntity.ok().body(productAdminService.deleteProduct(productId));
		} catch (Exception e) {
			return ResponseEntity.internalServerError().body(e.getMessage());
		}
	}

	@PostMapping("/product/all")
	public ResponseEntity<List<ProductVO>> getAllProducts(@RequestBody FiltersVO filters) {

		List<ProductVO> results = productAdminService.getAllProducts(filters);

		if (results.isEmpty()) {

			return ResponseEntity.noContent().build();
		} else {

			return new ResponseEntity<>(results, HttpStatus.OK);
		}

	}

	@PostMapping("/area")
	public ResponseEntity<?> createAreaCatalog(@RequestBody List<Area> areas) {

		try {

			return ResponseEntity.ok().body(catalogService.createAreaCatalog(areas));

		} catch (Exception e) {

			return ResponseEntity.internalServerError().build();
		}

	}

	@GetMapping("/area")
	public ResponseEntity<List<AreaVO>> getAreaCatalog() {

		try {

			return ResponseEntity.ok().body(catalogService.getAreaCatalog());

		} catch (Exception e) {

			return ResponseEntity.internalServerError().build();
		}

	}

	@PostMapping("/partida")
	public ResponseEntity<?> createPartidasCatalog(@RequestBody List<Partida> areas) {

		try {

			return ResponseEntity.ok().body(catalogService.createPartidaCatalog(areas));

		} catch (Exception e) {

			return ResponseEntity.internalServerError().build();
		}

	}

	@GetMapping("/partida")
	public ResponseEntity<List<PartidaVO>> getPartidaCatalog() {

		try {

			return ResponseEntity.ok().body(catalogService.getPartidaCatalog());

		} catch (Exception e) {

			return ResponseEntity.internalServerError().build();
		}

	}
	
	@PostMapping("/category")
	public ResponseEntity<?> createCategoryCatalog(@RequestBody List<Category> areas) {

		try {

			return ResponseEntity.ok().body(catalogService.createCategoryCatalog(areas));

		} catch (Exception e) {

			return ResponseEntity.internalServerError().build();
		}

	}

	@GetMapping("/category")
	public ResponseEntity<List<UnidadesVO>> getCategoryCatalog() {

		try {

			return ResponseEntity.ok().body(catalogService.getCategoryCatalog());

		} catch (Exception e) {

			return ResponseEntity.internalServerError().build();
		}

	}

}
