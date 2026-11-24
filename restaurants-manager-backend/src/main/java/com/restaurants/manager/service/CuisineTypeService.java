package com.restaurants.manager.service;

import java.util.List;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.restaurants.manager.model.CuisineType;
import com.restaurants.manager.repository.CuisineTypeRepository;
import com.restaurants.manager.repository.RestaurantRepository;

@Service
public class CuisineTypeService {
    private final CuisineTypeRepository cuisineTypeRepository;
    private final RestaurantRepository restaurantRepository;

    public CuisineTypeService(CuisineTypeRepository cuisineTypeRepository, RestaurantRepository restaurantRepository) {
        this.cuisineTypeRepository = cuisineTypeRepository;
        this.restaurantRepository = restaurantRepository;
    }

    public List<CuisineType> findAll() {
        return cuisineTypeRepository.findAll();
    }

    public CuisineType create(CuisineType cuisineType) {
        cuisineType.setIdCuisine(null);
        return cuisineTypeRepository.save(cuisineType);
    }

    public CuisineType update(Long id, CuisineType cuisineType) {
        if (!cuisineTypeRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cuisine type not found");
        }
        cuisineType.setIdCuisine(id);
        return cuisineTypeRepository.save(cuisineType);
    }

    public void delete(Long id) {
        if (!cuisineTypeRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cuisine type not found");
        }
        if (restaurantRepository.existsByCuisineTypeIdCuisine(id)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Cuisine type is used by a restaurant");
        }
        try {
            cuisineTypeRepository.deleteById(id);
        } catch (DataIntegrityViolationException exception) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Cuisine type is used by a restaurant");
        }
    }
}
