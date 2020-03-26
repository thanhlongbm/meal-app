import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MealItem = ({title,
    affordability,
    complexity,
    imageUrl,
    duration,onPress}) => {
    return ( 
    <View style = {styles.container}>
        <TouchableOpacity onPress = {onPress}>
        <View style = {styles.header}>
            <ImageBackground source = {{uri : imageUrl}} style = {styles.image} >
                <Text style = {styles.title}>{title}</Text>
            </ImageBackground>
        </View>
        <View style = {styles.details}>
            <Text style = {styles.text}>{duration}m</Text>
            <Text style = {styles.text}>{complexity.toUpperCase()}</Text>
            <Text style = {styles.text}>{affordability.toUpperCase()}</Text>
        </View>
        </TouchableOpacity>
    </View> );
}

const styles = StyleSheet.create({  
    container : {
        height : 200,
        width : "100%",
        backgroundColor : "#f5f5f5",
        marginVertical : 20,
        borderRadius : 10,
        overflow : "hidden"
    },
    header : {
        height : "85%"
    },
    details : {
        height : "15%",
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center"
    },
    text : {
        textAlign : "center",
        padding : 5,
        fontFamily : "raleway-regular"
    },
    title : {
        textAlign : "center",
        backgroundColor : "rgba(0 , 0 , 0 , 0.5)",
        color : "white",
        fontFamily : "raleway-regular",
        paddingVertical : 5,
        fontSize : 20
    },
    image : {
        width : "100%",
        height : "100%",
        justifyContent :"flex-end"
    }
})
 
export default MealItem;