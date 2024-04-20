package com.rms.services.vo;

import java.util.Date;
import java.util.List;

import org.springframework.hateoas.RepresentationModel;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RemissionVO extends RepresentationModel<RemissionVO>{
	private String id;
	private Double total;
	private Double greatTotal;
	private String folio;
	private String category;
	private Date expeditionDate;
	private Integer formatId;
	private List<ProductVO> products;
	private String destinationId;
	private String areaDescription;
	private String client;
	private String remissionPartidas;
	
	private String status;
	private String substitutedByFolio;
	private String originFolio;
	private String observations;
	
	private String userId;
	private Date creationDate;
	private Date upatedDate;
	private Date deliveredDate;
}
