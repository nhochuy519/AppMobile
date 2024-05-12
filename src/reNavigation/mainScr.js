


import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { View,Text,StyleSheet,Button } from "react-native-web";

import HomeMobile from "./ortherScreen/Home";
import ScreenOne from "./ortherScreen/ScOne";
import ScreenTwo from "./ortherScreen/ScTwo";
function TestNa() {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer>
            {/* <Stack.Navigator>
                <Stack.Screen name="HomeMobile" component={HomeMobile}/>
                <Stack.Screen name="ScreenOne" component={ScreenOne}/>
                <Stack.Screen name="ScreenTwo" component={ScreenTwo}/>
            </Stack.Navigator> */}
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: 'blue',
                  }}
            >
                <Tab.Screen 
                    name="HomeMobile"
                    component={HomeMobile}
                    options={{
                        tabBarLabel: 'Home1',
                        tabBarIcon: ({ color, size }) => (
                          <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                      }}
                />
                <Tab.Screen 
                name="ScreenOne" 
                component={ScreenOne}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                    tabBarBadge: 3,
                  }}
                />
                <Tab.Screen 
                    name="ScreenTwo" 
                    component={ScreenTwo}
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

export default TestNa;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    }   

})