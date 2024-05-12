

import { Picker,View,Image, FlatList, StyleSheet,Text, TextInput, TouchableOpacity, ScrollView,Alert,ActivityIndicator } from "react-native-web"

import { useState } from "react";
import { gray,mainColor } from "../colorGlobal";
import OrderDetail from "./OrderDetails";

import instance from "../API";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
function UserLogin(props) {
    
    const [userName,setUserName]=useState('');
    const [password,setPassWord]=useState('');
    const [message,setMessage]=useState('')
    const [isLoading,setIsLoading] =useState(false)
    
    const handleLogin = async()=>{
        try {
            if (userName === '' || password === '') {
                Alert.alert('Error', 'Please fill in both username and password');
                console.log('Không được để trống 1 trong hai')
                return ;
            }
                setIsLoading(true)
                const res= await instance.post('/user/login',{
                    userName,
                    password,
                })
                setIsLoading(false)
                console.log(res.data.token)
                await AsyncStorage.setItem(
                    'jwt',
                    res.data.token,
                  );
                  props.navigation.navigate('MainScreen')
                // đặng nhập thành công chuyển sang main screen
                props.setIsLoggedIn(true)
            } catch (error) {
            console.log(error)
            console.log('Đăng nhập không thành công')
            setIsLoading(false);
            setMessage('Username or password is incorrect')
        }
        
       
    }

    if(isLoading) {
        return (
            <View
                style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'white'
                }}
            
            >
                <ActivityIndicator size="large" color="#E2E0E0" />
                <Text>Please wait</Text>
            </View>
           
            
        )
    }
    return(
        <ScrollView>
             <View
                style={styles.container}
        >
                <View>
                    <View
                        style={{
                            flexDirection:'column',
                            justifyContent:'center',
                            alignItems: 'center',
                            marginTop:20,
                            marginBottom:30

                        }}
                    >
                        <Text
                            style={{
                                fontSize:30,
                                color:mainColor,
                                fontWeight:'bold'
                            }}
                        >
                            Login
                        </Text>
                        <Text
                            style={
                                {
                                    fontSize:17
                                }
                            }
                        >
                            Sign in to continue shopping
                        </Text>
                    </View>
                    <View>
                        <Text>
                            userName
                        </Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(value)=>{
                                setUserName(value)
                            }}
                            value={userName}
                        />
                    </View>
                    <View>
                        <Text>
                            Password
                        </Text>
                        <TextInput
                        secureTextEntry={true}
                             style={styles.textInput}
                             onChangeText={(value)=>{
                                setPassWord(value)
                            }}
                            value={password}
                        />
                    </View>
                    <TouchableOpacity
                        style={{
                            width:'100%',
                            height:50,  
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems: 'center',
                            backgroundColor:mainColor,
                            borderRadius:10
                           
                       
                        }}
                    >
                        <Text
                            style={{
                                color:'white',
                                fontWeight:'bold',
                                fontSize:17
                            }}
                            onPress={handleLogin}
                        >
                            Login
                        </Text>
                     
                    </TouchableOpacity>
                    <View
                        style={{
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems: 'center',
                            marginTop:20
                        }}
                    >
                        <Text>
                            Don't have an account?
                        </Text>
                        <Text
                            style={
                                {
                                    color:mainColor,
                                    marginLeft:10
                                }
                            }
                            onPress={()=>props.navigation.navigate('Register')}
                        >
                            Sign Up
                        </Text>
                    </View>
                    <View
                         style={{
                            flexDirection:'row',
                            justifyContent:'center',
                            alignItems: 'center',
                            marginTop:20
                        }}
                    >
                        <Text
                            style={{
                                color:'red',
                                fontSize:17
                            }}
                        >
                        {message? message : null}
                        </Text>
                       
                    </View>
                </View>
            </View>
        </ScrollView>
       
       
    )
}

export default UserLogin;

const styles = StyleSheet.create({
   container:{
    width:'100%',
    height:'100%',
    padding: 20,
    
   },
   textInput:{
    height:50,
    borderWidth:1,
    borderColor:'black',
    borderRadius:10,
    marginTop:10,
    marginBottom:20,
    fontSize:17,
    paddingLeft:5
   }
}) 