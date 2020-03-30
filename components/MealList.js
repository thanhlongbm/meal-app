import React from "react";
import MealItem from "../components/MealIteam";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/action";

const MealList = ({ item, navigation }) => {
  const favoriteMeals = useSelector(state => state.meals.favorites);
  const dispatch = useDispatch();
  const isFav = favoriteMeals.some(meal => meal.id === item.id);

  return (
    <MealItem
      title={item.title}
      affordability={item.affordability}
      complexity={item.complexity}
      imageUrl={item.imageUrl}
      duration={item.duration}
      onPress={() => {
        navigation.navigate("MealDetails", {
          id: item.id,
          title: item.title,
          onPress: () => {
            dispatch(toggleFavorite(item.id));
          },
          isFav: isFav
        });
      }}
    />
  );
};

export default MealList;
