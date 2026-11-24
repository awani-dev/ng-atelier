package com.restaurants.manager.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "cuisine_types")
public class CuisineType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCuisine;

    @NotBlank
    private String nomCuisine;

    public CuisineType() {
    }

    public CuisineType(String nomCuisine) {
        this.nomCuisine = nomCuisine;
    }

    public Long getIdCuisine() {
        return idCuisine;
    }

    public void setIdCuisine(Long idCuisine) {
        this.idCuisine = idCuisine;
    }

    public String getNomCuisine() {
        return nomCuisine;
    }

    public void setNomCuisine(String nomCuisine) {
        this.nomCuisine = nomCuisine;
    }
}
