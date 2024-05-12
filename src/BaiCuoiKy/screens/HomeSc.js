import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { View,Text,StyleSheet,Button,TouchableOpacity , ScrollView,FlatList ,Image ,TextInput ,Dimensions} from "react-native-web";

import categories from "../categories";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import User from '../component/User'

import Carousel from 'react-native-reanimated-carousel';
import FeaturedContainer from "../component/Featured";

import ProductShow from "../component/productShow";
import Brand from "../component/Brand";
import Slogan from "../component/Slogan";
import ProductDetail from "./ProductsSc";
import FilterProduct from "./FilterProduct";
import MainScreen from "./MainScreen";
import UserCart from "./UserCart";
import Result from "./Result";
const data=[
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '4'},
    { key: '5' },
    { key: '6' },
]
const screenWidth = Dimensions.get('window').width;
function HomeSc(){
const Stack = createStackNavigator();
    return( 
      <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: 'white' },
        gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      
         >
                
                <Stack.Screen name='MainScreen' component={MainScreen} options={{headerShown:false}}/>
                <Stack.Screen name='ProductDetail' component={ProductDetail}/>
                <Stack.Screen name='FilterProduct' component={FilterProduct}  options={{headerShown:false}} />
                <Stack.Screen name='Result' component={Result }  options={{headerShown:false}} />
                <Stack.Screen name='UserCart' component={UserCart }  options={{headerShown:false}} />
                
        </Stack.Navigator> 

    

       
    )
}

export default HomeSc;


const styles = StyleSheet.create({
    container:{
        
        flexDirection:'column',    
        width:'100%',
        height:'100%',

        justifyContent: 'center',
        gap:10,
        padding:20

       
    },

    filterContainer:{
        height:40,
        position:'relative',
        borderRadius:'5px',
        backgroundColor:'rgb(235, 232, 232)',
        flexDirection:'row',  
        alignItems: 'center',
        paddingLeft:10,
        paddingRight:10,
        marginBottom:20
        
        
        
    },  
    featuredContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:15
    },
    buttonStyles:{
        paddingLeft:17,
        paddingRight:17,
        paddingTop:10,
        paddingBottom:10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius:40,
        marginRight:10 
      
    },


    mostPopularContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    sloganContainer :{
        marginTop:40,
        borderTopWidth: 0.5,
        borderTopColor: 'gray', 
        borderTopStyle: 'solid', 
        paddingTop:40
    }
})