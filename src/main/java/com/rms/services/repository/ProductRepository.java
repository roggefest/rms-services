package com.rms.services.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.rms.services.model.Product;

public interface ProductRepository extends MongoRepository<Product, String> {
	
	Optional<Product> findById(String productId);

}
