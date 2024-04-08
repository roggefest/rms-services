package com.rms.services.exception;

public class AccessPointException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3205127681792296606L;

	public AccessPointException(String message) {
		super(message);
	}

	public AccessPointException(String message, Throwable cause) {
		super(message, cause);
	}
}
