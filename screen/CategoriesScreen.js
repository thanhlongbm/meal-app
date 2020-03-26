import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/data";
import CategoryItem from "../components/CategoryGridItem";

const CategoriesScreen = ({navigation}) => {
  return (
    <FlatList 
      data = {CATEGORIES}
      keyExtractor = {item => item.id}
      renderItem = {({item}) => <CategoryItem item = {item} onPress = {()=>{navigation.navigate('CategoryMeal' , item)}} />}
      numColumns  = {2}
    />
  );
};

export default CategoriesScreen;
