package com.rms.services.service;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Date;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class QRCodeGeneratorService {

	@Value("${qrcode.message}")
	private String qrCodeMessage;

	@Value("${access.point.base.path}")
	private String basePath;
	
	@Value("${access.point.check.path}")
	private String checkPath;

	@Value("${qrcode.output.directory}")
	private String outputLocation;

	private static final String charset = "UTF-8";

	private static final String strDateFormat = "yyyyMMddhhmmss";

	public byte[] generateQRCodePng(String accessPointId, int width, int height) {
		
		String host = ServletUriComponentsBuilder.fromCurrentRequestUri().toUriString();
		
		System.out.println(host);

		StringBuilder qrCodeContent = new StringBuilder();
		qrCodeContent.append(basePath);
		qrCodeContent.append(accessPointId);

		return generateCodeByteArray(qrCodeContent.toString(), width, height).toByteArray();
		

	}
	
	public String generateQRCodePngBase64(String accessPointId, int width, int height) {
		
	    //String host = ServletUriComponentsBuilder.fromCurrentRequestUri().toUriString();
	    
	    String host =  ServletUriComponentsBuilder.fromCurrentContextPath().toUriString();
		
		
		StringBuilder qrCodeContent = new StringBuilder();
		qrCodeContent.append(String.format("%s%s", host,checkPath));
		qrCodeContent.append(accessPointId);
    
		System.out.println(qrCodeContent.toString());
		return Base64.getEncoder().encodeToString(generateCodeByteArray(qrCodeContent.toString(), width, height).toByteArray());
		

	}

	private ByteArrayOutputStream generateCodeByteArray(String qrCodeContent, int width, int height) {
		try {
			QRCodeWriter qrCodeWriter = new QRCodeWriter();
			BitMatrix bitMatrix = qrCodeWriter.encode(qrCodeContent, BarcodeFormat.QR_CODE, width, height);
			ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
			MatrixToImageWriter.writeToStream(bitMatrix, "PNG", byteArrayOutputStream);
			return byteArrayOutputStream;
		} catch (WriterException ex) {
			log.error("Error during generate QR Code", ex);
		} catch (IOException ex) {
			log.error("Error during generate QR Code", ex);
		}
		return null;
	}

	public void generateQRCodeToStore(String message, int width, int heihgt) {
		log.info("Output directory - {}", outputLocation);
		try {
			String finalMessage = (StringUtils.isBlank(message)) ? qrCodeMessage : message;
			log.info("Final Input Message - {}", finalMessage);
			processQRcode(finalMessage, prepareOutputFileName(), charset, width, heihgt);

		} catch (WriterException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	private String prepareOutputFileName() {
		Date date = new Date();

		DateFormat dateFormat = new SimpleDateFormat(strDateFormat);
		String formattedDate = dateFormat.format(date);

		StringBuilder sb = new StringBuilder();
		sb.append(outputLocation).append("\\").append("QRCode-").append(formattedDate).append(".png");
		log.info("Final output file - " + sb.toString());
		return sb.toString();
	}

	private void processQRcode(String data, String path, String charset, int height, int width)
			throws WriterException, IOException {
		/* the BitMatrix class represents the 2D matrix of bits */
		/*
		 * MultiFormatWriter is a factory class that finds the appropriate Writer
		 * subclass for the BarcodeFormat requested and encodes the barcode with the
		 * supplied contents.
		 */
		BitMatrix matrix = new MultiFormatWriter().encode(new String(data.getBytes(charset), charset),
				BarcodeFormat.QR_CODE, width, height);
		MatrixToImageWriter.writeToFile(matrix, path.substring(path.lastIndexOf('.') + 1), new File(path));
	}

}
