import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealIteam";

const MealList = ({mealList , navigation}) => {
    return ( <View style={styles.container}>
        <FlatList 
        data = {mealList}
        keyExtractor = {(item) => item.id}
        renderItem = {({item}) => <MealItem title = {item.title} 
                                            affordability = {item.affordability} 
                                            complexity = {item.complexity}
                                            imageUrl = {item.imageUrl} duration = {item.duration} 
                                            onPress = {() => {navigation.navigate('MealDetails' , {id : item.id})}} 
                                  />}
        style = {{width : "100%" , paddingHorizontal : 20}}
        />
      </View> );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });
 
export default MealList;