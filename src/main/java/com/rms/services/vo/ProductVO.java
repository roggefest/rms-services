package com.rms.services.vo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductVO {
	
	private String id;
	private String title;
	private String description;
	private Double price;
	private Double quantity;
	private Integer partidaId;
	private Integer turnId;
	private String turnDescription;
	private String partidaDescription;
	private String categoryDescription;
	private Integer categoryId;
	
	private String userId;
	private Date creationDate;
	private Date updatedDate;
	private String destinationId;
	private String areaDescription;
	private boolean generateIva;
}
