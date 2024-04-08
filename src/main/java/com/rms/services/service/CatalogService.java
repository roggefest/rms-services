package com.rms.services.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rms.services.model.Area;
import com.rms.services.model.Category;
import com.rms.services.model.Partida;
import com.rms.services.repository.AreaRepository;
import com.rms.services.repository.CategoryRepository;
import com.rms.services.repository.PartidaRepository;
import com.rms.services.vo.AreaVO;
import com.rms.services.vo.PartidaVO;
import com.rms.services.vo.UnidadesVO;

@Service
public class CatalogService {

	@Autowired
	AreaRepository areaRepository;

	@Autowired
	PartidaRepository partidaRepository;

	@Autowired
	CategoryRepository categoryRepository;

	public List<Area> createAreaCatalog(List<Area> areas) {

		areas.forEach(area -> areaRepository.save(area)

		);

		return areaRepository.findAll();
	}

	public List<AreaVO> getAreaCatalog() {
		
		List<AreaVO> partidas = new ArrayList<AreaVO>();

		areaRepository.findAll().forEach(c -> {

			AreaVO unidad = new AreaVO();
			
			BeanUtils.copyProperties(c,unidad);

			partidas.add(unidad);
		}

		);
		
		return partidas;
	}

	public List<Partida> createPartidaCatalog(List<Partida> areas) {

		areas.forEach(area -> partidaRepository.save(area)

		);

		return partidaRepository.findAll();
	}

	public List<PartidaVO> getPartidaCatalog() {
		
		List<PartidaVO> partidas = new ArrayList<PartidaVO>();

		partidaRepository.findAll().forEach(c -> {

			PartidaVO unidad = new PartidaVO();
			
			BeanUtils.copyProperties(c,unidad);

			partidas.add(unidad);
		}

		);

		return partidas;
	}

	public List<Category> createCategoryCatalog(List<Category> areas) {

		areas.forEach(area -> categoryRepository.save(area)

		);

		return categoryRepository.findAll();
	}

	public List<UnidadesVO> getCategoryCatalog() {

		List<UnidadesVO> unidades = new ArrayList<UnidadesVO>();

		categoryRepository.findAll().forEach(c -> {

			UnidadesVO unidad = new UnidadesVO();
			
			BeanUtils.copyProperties(c,unidad);

			unidades.add(unidad);
		}

		);

		return unidades;
	}

}
