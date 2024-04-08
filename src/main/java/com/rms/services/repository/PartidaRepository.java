package com.rms.services.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.rms.services.model.Partida;

public interface PartidaRepository extends MongoRepository<Partida, String> {
	

}
