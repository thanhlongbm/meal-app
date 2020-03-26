import {combineReducers} from 'redux'
import { MEALS } from '../data/data';

const mealState = {
    meals : MEALS,
    filteredMeals : MEALS,
    favorites : []
}

const mealReducer = (mealState , action) => {
    return mealState;
}

export const rootReducer = combineReducers({
    meals : mealReducer
})