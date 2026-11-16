import { RestaurantService } from './restaurants';

describe('RestaurantService cuisine type CRUD', () => {
  let service: RestaurantService;

  beforeEach(() => {
    service = new RestaurantService();
  });

  it('adds a cuisine type with a new identifier', () => {
    const highestId = Math.max(...service.listeCuisineTypes().map((type) => type.idCuisine));

    const added = service.ajouterCuisineType({ idCuisine: 0, nomCuisine: 'Nordic' });

    expect(added.idCuisine).toBe(highestId + 1);
    expect(service.consulterCuisineType(added.idCuisine)).toBe(added);
  });

  it('renames the cuisine type in restaurant references', () => {
    const restaurant = service.restaurantsList()[0];
    const idCuisine = restaurant.cuisineType!.idCuisine;

    expect(
      service.modifierCuisineType({ idCuisine, nomCuisine: 'Updated cuisine' }),
    ).toBe(true);
    expect(service.consulterCuisineType(idCuisine).nomCuisine).toBe('Updated cuisine');
    expect(restaurant.cuisineType!.nomCuisine).toBe('Updated cuisine');
  });

  it('refuses to delete a cuisine type used by a restaurant', () => {
    const usedCuisineId = service.restaurantsList()[0].cuisineType!.idCuisine;
    const initialCount = service.listeCuisineTypes().length;

    expect(service.supprimerCuisineType(usedCuisineId)).toBe(false);
    expect(service.listeCuisineTypes()).toHaveLength(initialCount);
  });

  it('deletes an unused cuisine type', () => {
    const added = service.ajouterCuisineType({ idCuisine: 0, nomCuisine: 'Nordic' });

    expect(service.supprimerCuisineType(added.idCuisine)).toBe(true);
    expect(service.listeCuisineTypes()).not.toContain(added);
  });
});