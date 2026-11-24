package com.restaurants.manager.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.restaurants.manager.model.Restaurant;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    List<Restaurant> findByCuisineTypeIdCuisine(Long idCuisine);

    boolean existsByCuisineTypeIdCuisine(Long idCuisine);

    @Query("select r from Restaurant r where lower(r.name) like lower(concat('%', :name, '%'))")
    List<Restaurant> searchByName(@Param("name") String name);
}
