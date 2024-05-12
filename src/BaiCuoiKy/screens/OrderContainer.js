



import { View,Image, FlatList ,TextInput,StyleSheet,Text,Dimensions} from "react-native-web"
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native"
import OrderDetail from "./OrderDetails";
import { gray, mainColor } from "../colorGlobal";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";

const windowHeight = Dimensions.get('window').height;
function OrderContainer ({data}) {
    const[product,setProduct]=useState(data);

    return(

             <View 
                style={
                    styles.container
                }
            >
                 <View
                     style={
                        {
                            flexDirection:'row',
                            alignItems: 'center',
                            justifyContent:'space-between'
                        }
                     }
                    >
                        <View
                            style={{
                                flexDirection:'column',

                            }}
                        >
                            <Text>
                                Mã đơn hàng
                            </Text> 
                            <Text
                                style={{
                                fontSize:17,
                                color:mainColor
                                }}
                                >
                                {product._id}
                            </Text>
                            
                        </View>
                   
                    <Text
                           style={{
                            color:mainColor
                        }}
                    >
                         {product.status}
                    </Text>
                  
                </View>
                <FlatList
                    data={product.products}
                    renderItem={({item,index})=>{
                        return (
                            <OrderDetail data={item}/>
                        )
                    }}
                />
                  <View
                     style={
                        {
                            flexDirection:'row',
                            alignItems: 'center',
                            justifyContent:'space-between',
                            marginTop:5
                        }
                     }
                    >
                    <Text
                        style={{
                            fontSize:20,
                            fontWeight:'bold'
                        }}
                         >
                            Thành tiền
                    </Text>
                    <Text
                        style={{
                            color:mainColor,
                            fontSize:20
                        }}
                    >
                            {product.Total}
                    </Text>
                  
                </View>
                
                
            </View>

           
        
       
    )
}

export default OrderContainer;

const styles = StyleSheet.create({
    container :{

        backgroundColor:gray,
        
        backgroundColor:'white',
        padding:10,
        marginBottom:15

    }
})

