import { getCarb, getProtein, getSalad, getRootVeg } from './state/state';
import { Meal } from './meal-object';

let carb;
let protein;
let rootVeg;
let salad;

export function generateRandomMeal() {
  carb = getCarb()[Math.floor(Math.random() * getCarb().length)];
  protein = getProtein()[Math.floor(Math.random() * getProtein().length)];
  rootVeg = getRootVeg()[Math.floor(Math.random() * getRootVeg().length)];
  salad = getSalad()[Math.floor(Math.random() * getSalad().length)];
}

export function regenerateComponent(component) {
  switch (component) {
    case 'carb':
      carb = getCarb()[Math.floor(Math.random() * getCarb().length)];
      break;
    case 'protein':
      protein = getProtein()[Math.floor(Math.random() * getProtein().length)];
      break;
    case 'rootVeg':
      rootVeg = getRootVeg()[Math.floor(Math.random() * getRootVeg().length)];
      break;
    case 'salad':
      salad = getSalad()[Math.floor(Math.random() * getSalad().length)];
      break;
    default:
      break;
  }
}

export function getCurrentMeal() {
  const meal = new Meal(
    `${carb} with ${protein}`,
    `${protein}`,
    `${carb}`,
    `${rootVeg}`,
    `${salad}`,
  );
  return meal;
}
