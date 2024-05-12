
import { View,Text,StyleSheet,Button,TouchableOpacity ,FlatList  ,Image } from "react-native-web";
import { Entypo } from '@expo/vector-icons';
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import instance from "../API";
function User({props}){
    const [user,setUser]=useState();




    useFocusEffect(
        useCallback(() => {
            instance.get('/user/profile')
            .then((result)=>{
               console.log(result.data.data[0])
               setUser(result.data.data[0])
            })
         }, [])
       );

       if(!user){
        return(
            <View>
                Vui lòng đăng nhập
            </View>
        )
       }
    return(
            <View style={styles.wrapperUser} >
             <Image
                    style={{width: 50, height: 50,marginRight:15,borderRadius:999,objectFit:'cover'}}
                source={{
                        uri: user.photo?user.photo: 'https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg'}
                        }
                
                    />
            <View style={{flexGrow:1}}>
                <Text>
                    Good Morning 
                </Text>
                <Text style={{fontWeight :'bold',fontSize:'16px'}}>
                {
                   user.userName
                }
                </Text>
            </View>
            <View>

            </View>
            <TouchableOpacity
                onPress={()=>{
                   props.navigation.navigate('UserCart')
                }}
            >
                <Entypo name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>
               
            </View>
    )
}
export default User;

const styles = StyleSheet.create({
    wrapperUser:{
        flexDirection:'row',
        alignItems:'center',
    
    }
})