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
public class ProductDetailedVO {
	
	private String title;
	private String description;
	private Double price;
	private Double quantity;
	private String turnDescription;
	private String partidaDescription;
	private String categoryDescription;
	private boolean generateIva;
	
	//remission
	private Double total;
	private String folio;
	private String areaDescription;
	private Date expeditionDate;
	private String status;
	private String observations;
	
	
}
