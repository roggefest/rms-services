package com.rms.services.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RemissionResponseVO {
	
	private String remissionId;
	private String b64Pdf;

}
