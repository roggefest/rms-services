package com.rms.services.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.rms.services.model.Area;


public interface AreaRepository extends MongoRepository<Area, String> {
	

}
