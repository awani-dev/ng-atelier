package com.restaurants.manager.config;

import java.time.LocalDate;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.restaurants.manager.model.CuisineType;
import com.restaurants.manager.model.Restaurant;
import com.restaurants.manager.repository.CuisineTypeRepository;
import com.restaurants.manager.repository.RestaurantRepository;

@Configuration
public class DataInitializer {
    @Bean
    CommandLineRunner seedDatabase(CuisineTypeRepository cuisineRepository, RestaurantRepository restaurantRepository) {
        return args -> {
            List<String> cuisines = List.of(
                    "Italian", "Mexican", "Tunisian", "French", "Japanese", "Chinese", "Indian",
                    "Lebanese", "Turkish", "American", "Spanish", "Thai", "Greek", "Vietnamese",
                    "Korean", "Moroccan", "Brazilian", "Egyptian", "Peruvian", "Ethiopian",
                    "Algerian", "German", "Belgian", "Portuguese", "Caribbean");
            for (String cuisine : cuisines) {
                if (!cuisineRepository.existsByNomCuisineIgnoreCase(cuisine)) {
                    cuisineRepository.save(new CuisineType(cuisine));
                }
            }

            if (restaurantRepository.count() == 0) {
                addRestaurant(restaurantRepository, cuisineRepository, "La Trattoria", "12 Avenue Habib Bourguiba, Tunis", "Italian", "2018-03-10", 80, "+216 71 234 567", 4.5);
                addRestaurant(restaurantRepository, cuisineRepository, "Dar El Jeld", "5 Rue Dar El Jeld, Medina of Tunis", "Tunisian", "1995-11-02", 150, "+216 71 560 916", 4.8);
                addRestaurant(restaurantRepository, cuisineRepository, "Sakura Sushi", "8 Rue du Lac Léman, Tunis", "Japanese", "2020-01-25", 55, "+216 71 862 340", 4.6);
                addRestaurant(restaurantRepository, cuisineRepository, "Le Petit Bistro", "23 Rue de Palestine, Tunis", "French", "2016-04-18", 45, "+216 71 789 012", 4.3);
                addRestaurant(restaurantRepository, cuisineRepository, "El Sombrero", "5 Rue de Marseille, La Marsa", "Mexican", "2019-06-21", 60, "+216 71 345 678", 4.0);
            }
        };
    }

    private void addRestaurant(RestaurantRepository restaurantRepository, CuisineTypeRepository cuisineRepository,
            String name, String address, String cuisineName, String dateOpened, int capacity,
            String phoneNumber, double rating) {
        Restaurant restaurant = new Restaurant();
        restaurant.setName(name);
        restaurant.setAddress(address);
        restaurant.setCuisineType(cuisineRepository.findAll().stream()
                .filter(cuisine -> cuisine.getNomCuisine().equalsIgnoreCase(cuisineName))
                .findFirst().orElseThrow());
        restaurant.setDateOpened(LocalDate.parse(dateOpened));
        restaurant.setCapacity(capacity);
        restaurant.setPhoneNumber(phoneNumber);
        restaurant.setRating(rating);
        restaurantRepository.save(restaurant);
    }
}
