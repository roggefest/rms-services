package com.rms.services.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.rms.services.model.ProductCatalog;

public interface ProductCatalogRepository extends MongoRepository<ProductCatalog, String> {
	
	Optional<ProductCatalog> findById(String productId);
	
	@Query("{'destinationId': ?0,'partidaId': ?1}")
	List<ProductCatalog> findByDestinationIdAndPartidaId(String destinationId,Integer partidaId);
	
	@Query("{ 'partidaId': ?0, $or: [ { 'destinationId': 0 },{ 'destinationId': '0' } { 'destinationId': { $exists: false } }] }")
	List<ProductCatalog> findByPartidaId(Integer partidaId);
	
	@Query("{'destinationId': ?0}")
	List<ProductCatalog> findByDestinationId(String destinationId);

}
