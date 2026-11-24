package com.restaurants.manager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restaurants.manager.model.CuisineType;

public interface CuisineTypeRepository extends JpaRepository<CuisineType, Long> {
    boolean existsByNomCuisineIgnoreCase(String nomCuisine);
}
