


import { createStackNavigator } from "@react-navigation/stack"
import { Picker,View,Image, FlatList, StyleSheet,Text, TextInput, TouchableOpacity } from "react-native-web"
import UserProfileSections from "../component/UserProfileSections";

import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { launchImageLibrary } from "react-native-image-picker";
import { useEffect, useState } from "react";
import { gray,mainColor } from "../colorGlobal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from "../API";
function UserDetails(props) {
    const [image,setImage]= useState(null);
    const [userDetail,setUserDetail]=useState(null)

    const check = (key)=>userDetail? userDetail[key]:'undefined'


    console.log(name)
    useEffect(()=>{
        
         instance.get('/user/profile')
         .then((result)=>{
            console.log(result)
            setUserDetail(result.data.data[0])
         })

  

    },[])
    
    
    return(
        <View
            style={styles.container}
            >
                <View
                    style={{
                        width:'100%',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center'
                    }}

                >
                    <View style={styles.imageContainer}>
                        <Image
                            style={{width: 100, height: 100 ,marginRight:15,borderRadius:5,objectFit:'cover',borderRadius:10}}
                        source={{
                                uri: check('photo')}
                                }
                        
                            />   
                            
                            <View
                                style={
                                    {
                                        position:'absolute',
                                        bottom:-5,
                                        right:-5,
                                        width:30,
                                        height:30,
                                        backgroundColor:'white',
                                        fleDirection:'row',
                                        jutifyContent:'center',
                                        alignItems:'center',
                                        borderRadius:10
                                        
                                        
                                    }
                                }
                            >
                                <MaterialCommunityIcons name="pencil" size={24} color="black" />
                            </View>
                            
                    </View>
                    
                    <View>
                        Upload image
                    </View>
                </View>
                <View
                    style={{
                        marginTop:20
                    }}

                >
                    <View
                        style={styles.TextInputContainer}
                    >
                        <Text
                            style={styles.Text}
                        >Name</Text>
                        <TextInput
                            style={styles.inputStyle}
                        value={check('userName')}/>
                    </View>
                    <View
                        style={[styles.TextInputContainer,{
                            justifyContent:'start'
                        }]}
                    >
                        <Text
                            style={[styles.Text,{
                                marginRight:45
                            }]}
                        >Gender</Text>
                        <View>
                        <Picker
                                // selectedValue={selectedValue}
                                // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Chọn giới tính" value="Chọn giới tính" />
                                <Picker.Item label="Nam" value="Nam" />
                                <Picker.Item label="Nữ" value="Nữ" />
                            </Picker>
                        </View>
                    </View>
                    <View
                        style={styles.TextInputContainer}
                    >
                        <Text
                            style={styles.Text}
                        >Email</Text>
                        <TextInput
                            style={styles.inputStyle}
                        value={check('email')}/>
                    </View>
                    <View
                        style={styles.TextInputContainer}
                    >
                        <Text
                            style={styles.Text}
                        >Address</Text>
                        <TextInput
                            style={styles.inputStyle}
                        value={check('Address')}/>
                    </View>

                    <View
                        style={{
                            flexDirection:'row',
                            justifyContent:'flex-end',
                            width:'100%'
                        }}
                    >
                        <TouchableOpacity
                                style={
                                    {
                                        backgroundColor:mainColor,
                                        height:40,
                                        borderRadius:10,
                                        padding:10
                                    }
                                  
                                }
                            >
                                <Text
                                    style={{
                                        color:'white'
                                    }}

                                >
                                    Lưu thay đổi
                                </Text>
                            </TouchableOpacity>
                    </View>
                    
                </View>
                
                

        </View>
       
    )
}

export default UserDetails;

const styles = StyleSheet.create({
    container:{
        padding:20,
        width:'100%',
        height:'100%',
        backgroundColor:'white'
    },
    imageContainer:{
        position: 'relative',
        width:'100px',
        height: '100px',
       
     
    },

    TextInputContainer:{
        flexDirection:'row',
        marginBottom:20,
        width:'100%',
        justifyContent:'space-between'
    },
    Text:{
        color:'gray',
        fontSize:18,
        fontWeight:'bold',
        
    } ,
    inputStyle:{
        borderBottomWidth:1,
        borderColor:'gray',
        flexBasis:'70%',
        paddingLeft:10,
        fontSize:17
    }
}) 