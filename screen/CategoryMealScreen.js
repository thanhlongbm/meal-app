import React from "react";
import MealList from "../components/MealList";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const CategoryMealScreen = ({ navigation }) => {
  const categoryId = navigation.getParam("id");
  const meals = useSelector(state => state.meals.filteredMeals);
  const mealList = meals.filter(meal => meal.categoryIds.includes(categoryId));
  return mealList.length == 0 ? (
    <View style={styles.container}>
      <Text style={{ fontFamily: "raleway-regular" }}>
        There's no meals. Check your filter
      </Text>
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={mealList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return <MealList item={item} navigation={navigation} />;
        }}
        style={{ width: "100%", paddingHorizontal: 20 }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: navigation.getParam("title")
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;
