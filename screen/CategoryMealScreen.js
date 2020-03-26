import React from 'react';
import { MEALS } from "../data/data";
import MealList from "../components/MealList";

const CategoryMealScreen = ({navigation}) => {
  const categoryId = navigation.getParam('id');
  const mealList = MEALS.filter(meal => meal.categoryIds.includes(categoryId))
  return (
    <MealList mealList = {mealList} navigation = {navigation} />
  );
};

CategoryMealScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle : navigation.getParam('title'),
  }
}

export default CategoryMealScreen;
