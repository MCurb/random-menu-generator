import {
  generateRandomMeal,
  getCurrentMeal,
  regenerateComponent,
} from './meals';
import './styles/styles.css';
import './meals-carousel';
console.log('Helow, World');

const generatorBtn = document.querySelector('.generate-btn');
const mealTitle = document.querySelector('.title');
const mainProtein = document.querySelector('.protein');
const mainCarb = document.querySelector('.carb');
const mainRootVeg = document.querySelector('.rootVeg');
const mainSalad = document.querySelector('.salad');

generatorBtn.addEventListener('click', () => {
  generateRandomMeal();
  mealTitle.textContent = `${getCurrentMeal().title}`;
  mainProtein.textContent = `${getCurrentMeal().protein}`;
  mainCarb.textContent = `${getCurrentMeal().carb}`;
  mainRootVeg.textContent = `${getCurrentMeal().rootVeg}`;
  mainSalad.textContent = `${getCurrentMeal().salad}`;
});

const refresh = document.querySelectorAll('.material-symbols-outlined');

refresh.forEach((btn) => {
  if (btn.classList.contains('protein')) {
    btn.addEventListener('click', () => {
      regenerateComponent('protein');
      mealTitle.textContent = `${getCurrentMeal().title}`;

      mainProtein.textContent = `${getCurrentMeal().protein}`;
    });
  }
});
