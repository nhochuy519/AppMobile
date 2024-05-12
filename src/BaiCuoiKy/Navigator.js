import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View,Text,StyleSheet,Button,TouchableOpacity, FlatList } from "react-native-web";


//icons
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// page
import HomeSc from "./screens/HomeSc";
import Products from "./screens/ProductsSc";
import Detail from "./screens/DetailScreen";
import  FavoritesStack from "./screens/FavoritesStack";
import Categories from "./screens/Categories";

import FilterProduct from "./screens/FilterProduct";
// color global 
import { mainColor } from "./colorGlobal";
import UserStack from "./screens/UserStack";
import { Entypo } from '@expo/vector-icons';

function Navigator(){
  
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    return(
       
        <NavigationContainer>
            <Tab.Navigator
                 screenOptions={{
                    tabBarActiveTintColor:  mainColor,
                    tabBarShowLabel: false, // ẩn dòng chữ dưới label,
                    headerShown:false,
                    
                  }}
            >
                <Tab.Screen
                    name="Home "
                    component={HomeSc}
                    options={
                        {
                        
                            tabBarIcon: ({ color, size }) => (
                                <MaterialIcons name="home-filled" color={color} size={size}  />
                              ),
                        }
                    }
                    
                />
                <Tab.Screen
                    name="Categories"
                    component={Categories}
                    options={
                        {
                            headerShown:false,
                            tabBarIcon: ({ color, size }) => (
                                <FontAwesome name="th-list" size={size} color={color} />
                              ),
                            
                        }
                    }
                    
                />
                <Tab.Screen
                    name='Favorite' 
                    component={ FavoritesStack}
                    options={
                        {
                            tabBarIcon: ({ color, size }) => (
                                <MaterialIcons name="favorite-outline"  color={color} size={size}  />
                              ),
                        }
                    }
                    
                />
                 <Tab.Screen
                    name='UserStack' 
                    component={UserStack}
                    options={
                        {
                            tabBarIcon: ({ color, size }) => (
                                <FontAwesome name="user-o"  color={color} size={size} />
                              ),
                        }
                    }
                    
                />
         </Tab.Navigator>
       
        </NavigationContainer>

        
    )
}

export default Navigator;