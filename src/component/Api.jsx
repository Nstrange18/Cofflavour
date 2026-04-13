import coffeeData from '../../coffee-data/cof-db.json';

export const coffeeLoader = async() => {
  return coffeeData.coffee;
}