import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { MEALS } from "../data/data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { ScrollView } from "react-native-gesture-handler";
const MealDetailScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  const meal = MEALS.find(meal => meal.id === id);
  return (
    <ScrollView>
      <Image source = {{uri : meal.imageUrl}} style = {styles.image} />
      <View style = {styles.details}>
          <Text style = {styles.text}>{meal.duration}m</Text>
          <Text style = {styles.text}>{meal.complexity.toUpperCase()}</Text>
          <Text style = {styles.text}>{meal.affordability.toUpperCase()}</Text>
      </View>
      <Text style = {styles.title}>Ingredients</Text>
      {meal.ingredients.map(ingredient => (
        <Text key = {ingredient} style = {styles.item}>{ingredient}</Text>
      ))}
      <Text style = {styles.title}>Steps</Text>
      {meal.steps.map(step => (
        <Text key = {step} style = {styles.item}>{step}</Text>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = ({navigation}) => {
  const id = navigation.getParam('id');
  const meal = MEALS.find(meal => meal.id === id);
  return {
    headerTitle : meal.title,
    headerRight : <HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
      <Item 
        title = "Favorite"
        iconName = "ios-star"
        onPress = {() => {

        }}
      />
    </HeaderButtons>
  }
}

const styles = StyleSheet.create({  
  image : {
    width : "100%",
    height : 200
  },
  title : {
    fontFamily : "raleway-bold",
    textAlign : "center",
    marginVertical : 15,
    fontSize : 20
  },
  details : {
    flexDirection : "row",
    justifyContent : "space-around",
    padding : 15,
    borderBottomWidth : 1,
    borderColor : "#ccc"
  },
  text : {
    fontFamily : "raleway-regular"
  },
  item : {
    fontFamily : "raleway-regular",
    marginVertical : 10,
    marginHorizontal : 15,
    borderWidth : 1,
    borderColor : "#aaa",
    padding : 10,
    borderStyle : "dashed"
  }
});

export default MealDetailScreen;
