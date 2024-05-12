





import { Picker,View,Image, FlatList, StyleSheet,Text, TextInput, TouchableOpacity } from "react-native-web"



import { useState } from "react";
import { gray,mainColor } from "../colorGlobal";

import ProductOrder from "../component/ProductCart";


function OrderDetail({data}) {
    const[product,setProduct]=useState(data);
    console.log(data)
    const limitText = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    };
    return(
        <View
        style={styles.container}
        >
            <Image 
                style={{
                    width:70,
                    height:70,
                    borderRadius:10
                }}
            source={{
                uri: product.productId.imageCover,
              }}
               
            />

               

                <View
                     style={{
                        flex:1,
                        flexDirection:'column',
                        justifyContent:'space-between',
                        height:'100%'
                        
                        
                    }}
                >
                    <Text
                        style={{
                            fontSize:20,
                            fontWeight:'bold'
                        }}
                    > {limitText(product.productId.name, 10)}</Text>
                     <Text
                         style={{
                            fontSize:17,
                            
                        }}
                     > Size</Text>
                    <Text
                         style={{
                            fontSize:17,
                            
                        }}
                    >{product.productId.price}</Text>
                   
                </View>
                
                
                

            <View>
                <Text
                     style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}
                >
                    50.000
                </Text>
                   
                </View>
        </View>
         
       
    )
}

export default OrderDetail;

const styles = StyleSheet.create({
   container:{
       flexDirection:'row',
       padding:10,
       gap:10,
       alignItems: 'center',
       borderBottomWidth:1,
       borderBottomColor:'gray',
        
        backgroundColor:'white'
       
   }
}) 