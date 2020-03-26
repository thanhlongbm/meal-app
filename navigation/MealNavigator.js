import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import CategoriesScreen from '../screen/CategoriesScreen';
import CategoryMealScreen from '../screen/CategoryMealScreen';
import MealDetailScreen from '../screen/MealDeatailScreen';
import FavoriteScreen from '../screen/FavoriteScreen'
import {Ionicons} from '@expo/vector-icons'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { Color } from '../const/color';
import FilterScreen from '../screen/FilterScreen';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { Text } from 'react-native';

const defaultNavigationOptions = {
    headerStyle : {
        backgroundColor : Color.primary,
    },
    headerTitleStyle : {
        fontFamily : "raleway-bold"
    },
    headerTintColor : Color.primaryText
}

const MenuButton = ({navigation}) => {
    return (
        <HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
            <Item 
                title = "Menu"
                iconName = "ios-menu"
                onPress = {() => {
                    navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>
    );
}

const MealNavigator = createStackNavigator({
    Categories : {
        screen : CategoriesScreen,
        navigationOptions : ({navigation}) => {
            return {
                headerTitle : "Categories",
                headerLeft : <MenuButton navigation = {navigation} />
            }
        }
    },
    CategoryMeal : {
        screen : CategoryMealScreen,
    },
    MealDetails : {
        screen : MealDetailScreen,
    }
} , {
    defaultNavigationOptions
});

const FavNavigator = createStackNavigator({
    Favorite : {
        screen : FavoriteScreen,
        navigationOptions : ({navigation}) => {
            return {
                headerTitle : "Your Favorites",
                headerLeft : <MenuButton navigation = {navigation} />
            }
        }
    },
    MealDetails : {
        screen : MealDetailScreen
    }
} , {
    defaultNavigationOptions
})

const MealTabNavigator = createMaterialBottomTabNavigator({
    Meals : {screen : MealNavigator , navigationOptions : {
        tabBarIcon : ({tintColor}) => {
            return <Ionicons name = "ios-restaurant" size = {25} color = {tintColor} />
        },
        tabBarColor : Color.primary,
        tabBarLabel : <Text style = {{fontFamily : 'raleway-regular'}}>Meals</Text> 
    }},
    Favorite : { screen : FavNavigator , navigationOptions : {
        tabBarIcon : ({tintColor}) => {
            return <Ionicons name = "ios-star" size = {25} color = {tintColor} />
        },
        tabBarColor : Color.favorite,
        tabBarLabel : <Text style = {{fontFamily : 'raleway-regular'}}>Favorites</Text> 
    }}
} , {
    activeColor : Color.primaryText,
    shifting: true,
    barStyle : {
        backgroundColor : "white"
    }
})

const FilterNavigator = createStackNavigator({
    FilterScreen : {
        screen : FilterScreen,
        navigationOptions : ({navigation}) => {
            return {
                headerTitle : "Filter Meals",
                headerLeft : <MenuButton navigation = {navigation} />,
                headerRight : 
                (<HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
                    <Item 
                        title = "Menu"
                        iconName = "ios-save"
                        onPress = {navigation.getParam('save')}
                    />
                </HeaderButtons>)
            }
        }
    }
}, {
    defaultNavigationOptions
})

const MainNavigator = createDrawerNavigator({
    Meal : {
        screen : MealTabNavigator,
        navigationOptions : {
            drawerLabel : "Meals"
        }
    },
    Filter : {
        screen : FilterNavigator
    }
},{
    contentOptions : {
        labelStyle : {
            fontFamily : 'raleway-regular'
        },
        activeTintColor : Color.primary,
        activeBackgroundColor : "#ddd"
    }
});
 
export default createAppContainer(MainNavigator);