

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { View,Text,StyleSheet,Button } from "react-native-web";

import HomePage from "./page/Home";
import Favorite from "./page/Favorite";
import Cart from "./page/Cart";
function WrapperNavi() {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: 'blue',
                  }}
            >
                <Tab.Screen 
                    name="HomePage"
                    component={HomePage}
                    options={{
                        tabBarLabel: 'Home1',
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                      }}
                />
                <Tab.Screen 
                name="Favorite" 
                component={Favorite}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="WrapperNavi" color={color} size={size} />
                    ),
                    tabBarBadge: 3,
                  }}
                />
                <Tab.Screen 
                    name="Cart" 
                    component={Cart}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="account" color={color} size={size} />
                        ),
                      }}
                    />
            </Tab.Navigator>
        </NavigationContainer>
       
    )
}

export default WrapperNavi;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    }   

})