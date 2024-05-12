


import { View,Image, FlatList, StyleSheet,Text,TouchableOpacity } from "react-native-web"
import { MaterialIcons } from '@expo/vector-icons';
import { gray,mainColor } from "../colorGlobal";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

function PayMentMethods(props) {
    const {paymentMethods,setPaymenthod} = props.route.params
    const [method,setMethod]=useState(paymentMethods)
   
    return (
        <View
            style={{
                padding:20
            }}
        >
            <TouchableOpacity
                onPress={()=>{
                    setPaymenthod('COD');
                    setMethod('COD')
                }}
                style={
                    {
                        flexDirection:'row',
                        alignItems:'center',
                        gap:20,
                        borderTopWidth:1,
                        borderBottomWidth:1,
                        borderColor:'gray',
                        height:50,

                        marginBottom:5
                    }
                }
            >

                    <AntDesign name="creditcard" size={24} color={mainColor} />
                    <Text style={{flex:1}}>Thẻ tín dụng</Text>
                    {
                        method === 'COD'? <AntDesign name="checkcircle" size={24} color={mainColor} />:null
                    }

            </TouchableOpacity>
            <TouchableOpacity
                  onPress={()=>{
                    setPaymenthod('Chuyển khoản')
                    setMethod('Chuyển khoản')
                }}
                style={
                    {
                        flexDirection:'row',
                        alignItems:'center',
                        gap:20,
                        
                        borderBottomWidth:1,
                        borderColor:'gray',
                        height:50
                    }
                }
            >

                    <FontAwesome5 name="money-check-alt" size={24} color={mainColor} />
                    <Text style={{flex:1}}>Thanh toán khi nhận hàng</Text>
                    {
                       method === 'Chuyển khoản'? <AntDesign name="checkcircle" size={24} color={mainColor} />:null
                    }

            </TouchableOpacity>
        </View>
    )
}


export default PayMentMethods;