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
@Document(collection = "partida_catalog")
public class Partida {
	
	@Id
	private String id;
	private Integer partidaId;
	private String partidaDescription;
	

}
