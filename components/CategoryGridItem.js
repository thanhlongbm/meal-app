import React from 'react';
import { StyleSheet , Text, View} from 'react-native';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';

const CategoryItem = ({item , onPress}) => {
    return ( 
    <View style = {styles.container}>
        <TouchableNativeFeedback style = {{height : "100%"}} onPress = {onPress}>
            <View style = {{...styles.grid , backgroundColor : item.color}}>
                <Text style = {styles.title}>{item.title}</Text>
            </View>
        </TouchableNativeFeedback>
     </View>
      );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        margin : 15,
        height : 150,
        borderRadius : 10,
        elevation : 5,
        overflow : "hidden"
      },
    grid : {
        flex : 1,
        borderRadius : 10,
        shadowRadius : 10,
        shadowColor : "black",
        shadowOffset : {width : 0, height : 20},
        shadowOpacity : 0.8,
        padding : 10,
        justifyContent : 'flex-end',
        alignItems : 'flex-end'
    },
    title : {
        textAlign:"right",
        fontFamily : "raleway-bold",
        fontSize : 20
    }
})
 
export default CategoryItem;