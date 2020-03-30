import { combineReducers } from "redux";
import { MEALS } from "../data/data";
import { TOGGLE_FAVORITE, TOGGLE_FILTER } from "./action";

const mealState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favorites: []
};

const mealReducer = (state = mealState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      let newFavorite = [...state.favorites];
      let existingId = newFavorite.findIndex(
        meal => meal.id === action.payload
      );
      if (existingId >= 0) {
        newFavorite.splice(existingId, 1);
      } else {
        let addMeals = state.meals.filter(meal => meal.id === action.payload);
        newFavorite = newFavorite.concat(addMeals);
      }
      return { ...state, favorites: newFavorite };
    case TOGGLE_FILTER:
      const {
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree
      } = action.payload;
      const newFilter = state.meals.filter(meal => {
        if (isGlutenFree && !meal.isGlutenFree) return false;
        if (isVegan && !meal.isVegan) return false;
        if (isVegetarian && !meal.isVegetarian) return false;
        if (isLactoseFree && !meal.isLactoseFree) return false;
        return true;
      });
      return { ...state, filteredMeals: newFilter };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  meals: mealReducer
});
