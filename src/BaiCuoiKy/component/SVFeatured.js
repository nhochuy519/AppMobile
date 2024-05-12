import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { View,Text,StyleSheet,Button,TouchableOpacity , ScrollView,FlatList ,Image ,TextInput ,Dimensions} from "react-native-web";

import categories from "../categories";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


import ProductShow from "./productShow";
import ProductDetail from "../screens/ProductsSc";




const screenWidth = Dimensions.get('window').width;
function SVFeatured(props){
    const Stack = createStackNavigator();
    return( 
        
        <ScrollView
                
        horizontal={true}// hiện ngang
        showsHorizontalScrollIndicator={false} // ẩn thanh scroll ngang
    >
        {/* callback={()=>props.navigation.navigate('ProductDetail')} */}
            <ProductShow />
            <ProductShow/>
            <ProductShow/>
            <ProductShow/>
            <ProductShow/>
            <ProductShow/>
            <ProductShow/>
            <ProductShow/>
            <ProductShow last/>

    </ScrollView>

    

       
    )
}

export default SVFeatured;


const styles = StyleSheet.create({
   
})