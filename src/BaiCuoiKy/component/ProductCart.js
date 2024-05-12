
import { View,Text,StyleSheet,Button,TouchableOpacity ,FlatList  ,Image } from "react-native-web";
import { Entypo } from '@expo/vector-icons';
import { useEffect, useState,useCallback, useRef } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { gray, mainColor } from "../colorGlobal";
import instance from "../API";
import _ from 'lodash'
function ProductOrder({callback,name,data,index,cartUpdate}){
    
    const [quantity,setQuantity]=useState(data.quantity)
    
    console.log(quantity)
    useEffect(() => {
        // Cập nhật lại quantity mỗi khi data (hoặc danh sách sản phẩm) thay đổi
        setQuantity(data.quantity);
    }, [data]);
    const quantityRef = useRef()
    let callApi = useCallback(_.debounce(async(value)=>{
        console.log('quantity trong debouce',quantityRef.current)
        await instance.patch('user/updateCartQuan',{

                cartIndex:index,
                quantity:quantityRef.current

        })
        .then(()=>{
            console.log('update thành công')
        })

        cartUpdate()
    },1000),[])

    
    const increaseQuantity = (value) => {
        quantityRef.current = quantity+1
        setQuantity(prev=>prev+1)

        callApi(value)
       
      };
    
      const decreaseQuantity = (value) => {
        quantityRef.current = quantity-1
        setQuantity(prev=>prev-1)
        callApi(value)
        
       

      };
      
    return(
        <View style={styles.container}>
            <View style={styles.containerProduct}>
                <Image
                    style={{width:70,height:70}}
                    source={{
                        uri:data.product.imageCover }
                        }
                
                    
                />
                <View
                    style={{
                        flexDirection:'column',
                        justifyContent: 'space-between',
                        height:'100%'
                    }}
                >
                   
                        <Text
                            style={{
                                fontSize:16,
                                fontWeight:'bold'
                            }}
                        >
                           {
                            data.product.name
                           }
                        </Text>
                        <View
                            style={{
                                flexDirection:'row',
                                alignItems: 'center',
                                gap:4
                               
                            }}
                        >
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                onPress={(value)=>{
                                    increaseQuantity(value)
                                }}
                            >
                                +
                            </TouchableOpacity>
                            <Text>
                                 {quantity }
                            </Text>
                            <TouchableOpacity
                                 style={styles.buttonStyle}
                                 onPress={ decreaseQuantity}
                            >
                                -
                            </TouchableOpacity>
                        </View>
                        
                        <Text
                            style={{
                                color:mainColor,
                                fontWeight:'500'
                            }}
                        >
                            {data.price} VND
                        </Text>
                    
                
                </View>
           
           
            </View>
        
        </View>
        
    )
}
export default ProductOrder;

const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },  
    containerProduct:{
        flexDirection:'row',
      
        gap:15,
        borderRadius:10,
        padding:10,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 5}, // Điều chỉnh shadowOffset
        shadowOpacity: 0.2,
        shadowRadius: 5, // Điều chỉnh shadowRadius
    },
    buttonStyle:{
        backgroundColor:mainColor,
        color:'white',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        width:20,
        height:20,
        borderRadius:999

    }
})