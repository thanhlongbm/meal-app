import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/data";

const FavoriteScreen = ({navigation}) => {
  const getMealList = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
  
  return (
    <MealList navigation = {navigation} mealList = {getMealList}/>
  );
};

export default FavoriteScreen;
