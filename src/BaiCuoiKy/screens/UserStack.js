

import { createStackNavigator } from "@react-navigation/stack"

import { View,Image, FlatList, StyleSheet,Text } from "react-native-web"
import UserProfileSections from "../component/UserProfileSections";
import UserOrder from "./UserOrder";
import UserDetails from "./UserDetails";
import UserSC from "./UserSc";
import UserCart from "./UserCart";
import { useEffect ,useState } from "react";
import UserLogin from "./LoginScreen";
import Register from "./Register";
import AsyncStorage from '@react-native-async-storage/async-storage';
import PayMentMethods from "./PayMent";
import OrderSuccess from "./OrderSuccess";
function UserStack() {
    const Stack = createStackNavigator();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkLogin = async ()=>{
        try {
            const token = await AsyncStorage.getItem('jwt');
            console.log(token)
            return !!token; 
          } catch (error) {
            console.error('Lỗi khi kiểm tra JWT:', error);
            return false;
          }
    }

    useEffect(()=>{
        const checkLoginStatus = async () => {
            const loggedIn = await checkLogin();
            setIsLoggedIn(loggedIn);
          };
          
          checkLoginStatus();
    },[])

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

            {
                isLoggedIn? <>
               
                    <Stack.Screen name="UserSC">
                        {props => <UserSC {...props} setIsLoggedIn={setIsLoggedIn} />}
                    </Stack.Screen>
                    <Stack.Screen name='UserDetails' component={UserDetails}  />
                    <Stack.Screen name='UserOrder' component={UserOrder} options={{ headerShown: false }} />
                    <Stack.Screen name='UserCart' component={UserCart}  />
                    <Stack.Screen name='PayMentMethods' component={PayMentMethods}  />
                    <Stack.Screen name='OrderSuccess' component={OrderSuccess}  />
                </>:
                <>
                    <Stack.Screen name="UserLogin">
                        {props => <UserLogin {...props} setIsLoggedIn={setIsLoggedIn} />}
                    </Stack.Screen>
                    <Stack.Screen name="Register">
                        {props => <Register {...props} setIsLoggedIn={setIsLoggedIn} />}
                    </Stack.Screen>
                   

                </>
            }
            
        </Stack.Navigator>
       
    )
}

export default UserStack;

const styles = StyleSheet.create({
    
})