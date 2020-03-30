import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Switch } from "react-native-paper";
import { Color } from "../const/color";
import { useDispatch } from "react-redux";
import { toggleFilter } from "../redux/action";

const FilterSwitch = ({ title, value, onChange }) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.label}>{title}</Text>
      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{ true: Color.primary }}
        thumbColor={Color.primary}
      />
    </View>
  );
};

const FilterScreen = ({ navigation }) => {
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);
  const [isLactoseFree, setLactoseFree] = useState(false);
  const dispath = useDispatch();

  const saveFilter = useCallback(() => {
    const filter = {
      isGlutenFree: isGlutenFree,
      isVegan: isVegan,
      isVegetarian: isVegetarian,
      isLactoseFree: isLactoseFree
    };

    dispath(toggleFilter(filter));
  }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree]);

  useEffect(() => {
    navigation.setParams({ save: saveFilter });
  }, [saveFilter]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        title="Gluten-free"
        value={isGlutenFree}
        onChange={newValue => setGlutenFree(newValue)}
      />
      <FilterSwitch
        title="Lactose-free"
        value={isLactoseFree}
        onChange={newValue => setLactoseFree(newValue)}
      />
      <FilterSwitch
        title="Vegan"
        value={isVegan}
        onChange={newValue => setVegan(newValue)}
      />
      <FilterSwitch
        title="Vegetarian"
        value={isVegetarian}
        onChange={newValue => setVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    marginVertical: 10
  },
  title: {
    fontFamily: "raleway-bold",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20
  },
  label: {
    fontFamily: "raleway-regular"
  }
});

export default FilterScreen;
