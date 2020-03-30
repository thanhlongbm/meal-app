import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const FavoriteScreen = ({ navigation }) => {
  const meals = useSelector(state => state.meals.favorites);

  return !meals || meals.length == 0 ? (
    <View style={styles.container}>
      <Text style={{ fontFamily: "raleway-regular" }}>
        There is no favorite meal. Add more!!!
      </Text>
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return <MealList item={item} navigation={navigation} />;
        }}
        style={{ width: "100%", paddingHorizontal: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FavoriteScreen;
