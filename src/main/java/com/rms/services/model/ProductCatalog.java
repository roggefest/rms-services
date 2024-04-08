package com.rms.services.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "product_catalog")
public class ProductCatalog {

	@Id
	private String id;
	private String title;
	private String description;
	private Double price;
	private Integer quantity;
	private Integer partidaId;
	private String partidaDescription;
	private Integer turnId;
	private String turnDescription;
	private String categoryDescription;
	private Integer categoryId;
	private String destinationId;
	private String areaDescription;
	private boolean generateIva;
	
}
