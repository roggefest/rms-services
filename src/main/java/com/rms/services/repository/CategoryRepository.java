package com.rms.services.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.rms.services.model.Category;

public interface CategoryRepository extends MongoRepository<Category, String> {
	

}
