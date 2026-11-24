package com.restaurants.manager.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.restaurants.manager.model.CuisineType;
import com.restaurants.manager.model.Restaurant;
import com.restaurants.manager.repository.CuisineTypeRepository;
import com.restaurants.manager.repository.RestaurantRepository;

@Service
public class RestaurantService {
    private final RestaurantRepository restaurantRepository;
    private final CuisineTypeRepository cuisineTypeRepository;

    public RestaurantService(RestaurantRepository restaurantRepository, CuisineTypeRepository cuisineTypeRepository) {
        this.restaurantRepository = restaurantRepository;
        this.cuisineTypeRepository = cuisineTypeRepository;
    }

    public List<Restaurant> findAll() {
        return restaurantRepository.findAll();
    }

    public Restaurant findById(Long id) {
        return restaurantRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Restaurant not found"));
    }

    public Restaurant create(Restaurant restaurant) {
        restaurant.setId(null);
        return restaurantRepository.save(attachCuisine(restaurant));
    }

    public Restaurant update(Long id, Restaurant restaurant) {
        findById(id);
        restaurant.setId(id);
        return restaurantRepository.save(attachCuisine(restaurant));
    }

    public void delete(Long id) {
        if (!restaurantRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Restaurant not found");
        }
        restaurantRepository.deleteById(id);
    }

    public List<Restaurant> findByCuisine(Long idCuisine) {
        return restaurantRepository.findByCuisineTypeIdCuisine(idCuisine);
    }

    public List<Restaurant> searchByName(String name) {
        return restaurantRepository.searchByName(name == null ? "" : name.trim());
    }

    private Restaurant attachCuisine(Restaurant restaurant) {
        if (restaurant.getCuisineType() == null || restaurant.getCuisineType().getIdCuisine() == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "A cuisine type is required");
        }
        CuisineType cuisine = cuisineTypeRepository.findById(restaurant.getCuisineType().getIdCuisine())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cuisine type not found"));
        restaurant.setCuisineType(cuisine);
        return restaurant;
    }
}
