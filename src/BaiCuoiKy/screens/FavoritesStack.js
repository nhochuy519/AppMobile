

import { createStackNavigator } from "@react-navigation/stack"
import { View,Image, FlatList,ScrollView, StyleSheet ,Text,TouchableOpacity,TextInput} from "react-native-web"
import { useState } from "react";
import products from "../products";
import { mainColor,inputColor } from "../colorGlobal";

import ProductDetail from "./ProductsSc";
import FavoritesDetail from "./FavoriresDetail";
const data=[
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '4'},
    { key: '5' },
    { key: '6' },
    { key: '7' },
    { key: '8' },
]
function FavoritesStack(props) {
    const Stack = createStackNavigator();
        


    return(

        <Stack.Navigator
      
         >
            
                <Stack.Screen name='FavoriteDetail' component={FavoritesDetail} options={{headerShown:false}}/>
                <Stack.Screen name='ProductDetail' component={ProductDetail}/>
                
        </Stack.Navigator> 
        
       
    )
}

export default FavoritesStack;

const styles = StyleSheet.create({
   

})
