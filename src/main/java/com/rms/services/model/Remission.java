package com.rms.services.model;

import java.util.Date;
import java.util.List;

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
@Document(collection = "Remission")
public class Remission {

	@Id
	private String id;
	private Double total;
	private Double greatTotal;
	private String folio;
	private Date expeditionDate;
	private Integer formatId;
	private String destinationId;
	private String areaDescription;
	private List<Product> products;
	private String status;
	private String observations;
	
	private String substitutedByFolio;
	private String originFolio;
	private String userId;
	private Date creationDate;
	private Date upatedDate;
	private Date deliveredDate;
}
