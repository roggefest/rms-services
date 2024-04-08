package com.rms.services.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.rms.services.model.Remission;

public interface RemissionRepository extends MongoRepository<Remission, String> {
	
	
	List<Remission> findByFolio(String folio);
	
	List<Remission> findByDestinationIdOrderByExpeditionDate(String deetinationId);
	
	//@Query("{ 'partidaId': ?0, $or: [ { 'destinationId': 0 }, { 'destinationId': { $exists: false } }] }")
	@Query("{ 'folio': ?0, 'destinationId': ?1 }")
	List<Remission> findByDestinationIdAndFolioId(String folio,String destinationId);
	
	
	@Query("{'expeditionDate':{$gte: ?0 , $lte: ?1 }}")
	List<Remission> findByInitAndEndExpeditionDate(Date initDate,Date endDate);
}
