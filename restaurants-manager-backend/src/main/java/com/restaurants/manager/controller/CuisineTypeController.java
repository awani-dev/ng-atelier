package com.restaurants.manager.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.restaurants.manager.model.CuisineType;
import com.restaurants.manager.service.CuisineTypeService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/cuisine-types")
public class CuisineTypeController {
    private final CuisineTypeService cuisineTypeService;

    public CuisineTypeController(CuisineTypeService cuisineTypeService) {
        this.cuisineTypeService = cuisineTypeService;
    }

    @GetMapping
    public List<CuisineType> findAll() {
        return cuisineTypeService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CuisineType create(@Valid @RequestBody CuisineType cuisineType) {
        return cuisineTypeService.create(cuisineType);
    }

    @PutMapping("/{id}")
    public CuisineType update(@PathVariable Long id, @Valid @RequestBody CuisineType cuisineType) {
        return cuisineTypeService.update(id, cuisineType);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        cuisineTypeService.delete(id);
    }
}
