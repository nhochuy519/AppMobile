import React from "react";
import { View, Image, StyleSheet, Text } from "react-native-web";
import UserProfileSections from "../component/UserProfileSections";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppRegistry } from 'react-native';
import { useState,useEffect ,useCallback} from "react";
import instance from "../API";
import { useFocusEffect } from '@react-navigation/native';
function UserSC(props) {
    const { setIsLoggedIn} = props

    const [userDetail,setUserDetail]=useState({})
   

        useFocusEffect(
            useCallback(() => {
                instance.get('/user/profile')
                .then((result)=>{
                   console.log(result)
                   setUserDetail(result.data.data[0])
                })
             }, [])
           );


    return (
        <View style={styles.container}>
            <View style={styles.user}>
                <Image
                    style={{ width: 50, height: 50, marginRight: 15, borderRadius: 5, objectFit: 'cover' }}
                    source={{
                        uri: userDetail.photo
                    }}
                />
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{userDetail.userName}</Text>
                    <Text style={{ color: 'gray' }}>{userDetail.email}</Text>
                </View>
            </View>
            <View>
                {/* Các mục UserProfileSections cần được truyền name và callback props */}
                
                <UserProfileSections name={'My Profile'} callback={() => { props.navigation.navigate('UserDetails') }} />
                <UserProfileSections name={'My Order'} callback={() => { props.navigation.navigate('UserOrder') }} />
                <UserProfileSections name={'My Cart'} callback={() => { props.navigation.navigate('UserCart') }} />
            </View>
            <View
                style ={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center'
                }}
            >
                <Text
                    style={
                        {
                            color:'red',
                            fontSize:17,
                            fontWeight:'bold'
                        }
                    }
                    onPress={async()=>{
                        await AsyncStorage.setItem(
                            'jwt',
                            '',
                          );
                        props.navigation.navigate('MainScreen')  
                        props.setIsLoggedIn(false)
                        window.location.reload();
                        
                    }}
                >Sign out</Text>
            </View>
        </View>
    );
}

export default UserSC;

const styles = StyleSheet.create({
    container: {
        padding: 30,
        height: '100%',
        backgroundColor: 'white'
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginTop: 20,
        padding: 15,
        borderRadius: 10,
        marginBottom: 25
    }
});
