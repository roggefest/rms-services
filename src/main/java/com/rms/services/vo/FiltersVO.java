package com.rms.services.vo;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FiltersVO {
	
	private Integer partidaId;
	private String folio;
	private String destinationId;
	@DateTimeFormat(iso = DateTimeFormat.ISO.DATE) 
	private Date dateInit;
	@DateTimeFormat(iso = DateTimeFormat.ISO.DATE) 
	private Date dateEnd;

}
