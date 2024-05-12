







import { createStackNavigator } from "@react-navigation/stack"
import { Picker,View,Image, FlatList, StyleSheet,Text, TextInput, TouchableOpacity, ScrollView,Dimensions } from "react-native-web"

import { useState,useEffect,useContext,createContext } from "react";
import { gray,mainColor } from "../colorGlobal";
import OrderDetail from "./OrderDetails";
import ProductOrder from "../component/ProductCart";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import instance from "../API";
import { StackActions } from '@react-navigation/native';
import EmptyCart from "./EmptyCart";

const windowHeight = Dimensions.get('window').height;



function UserCart(props) {
    
    const [userCart,setUserCart]=useState({products:[],total:null, details:null});
    const [upDate,setUpdate]=useState(false);
    const [address,setAddress] =useState('Điền vào đây')
    const [paymentMethods,setPaymenthod]=useState('COD')
    console.log(userCart.details)
    useEffect(() => {

        fetchUserCart();
        
    }, []);

    const createOrder = async()=>{
        if(userCart) {
            const data = userCart.details.cart.products.map((item)=>{
                return {
                    productId: item.product._id,
                    name: item.product.name,
                    quantity: item.quantity,
                    price: item.price,
                    size:item.size
                }
            })
            await instance.post('/user/createOrder',{
                status: "Đang xử lý",
                products: data,
                paymentMethod: paymentMethods,
                shippingAddress: address
                
                  
            })
            await instance.delete('/user/cart')
                .then((result) => {
                    console.log('delete thành công')
                    console.log('thêm thành công');
                   
            });
            
        }
       
        
    }
    // const deleteAllCart = ()=>{
    //     instance.delete('/user/cart')
    //     .then((result) => {
    //         console.log('delete thành công')
           
    //     });
    // }

    const fetchUserCart = () => {
        instance.get('/user/cart')
            .then((result) => {
                const { cart } = result.data.data;
                setUserCart({
                    products: cart.products,
                    total: cart.totalCart,
                    details:result.data.data
                });
               
            });
    };

    const handleUpdate = () => {
        fetchUserCart(); 
        fetchUserCart();// Cập nhật giỏ hàng sau khi thay đổi
    };
    if(userCart.products.length === 0) {
        return (
            <EmptyCart props={props}/>
        )
    }
    return(
        
        <View>

       
        <ScrollView
           
        >
             <View
            style={styles.container}
        >
            <View>
            
            {
              
                <FlatList
                data={userCart.products}
                renderItem={({item,index})=>{
                    
           
                    return <ProductOrder data={item} index={index} cartUpdate ={handleUpdate}/>
                }}
                />
            }
               
                
                
            </View>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('PayMentMethods',{paymentMethods,setPaymenthod})}
                style={
                    {
                        flexDirection:'row',
                        alignItems:'center',
                        gap:20,
                        borderTopWidth:1,
                        borderBottomWidth:1,
                        borderColor:'gray',
                        height:50
                    }
                }
            >

                    <MaterialIcons name="attach-money" size={24} color={mainColor} />
                    <Text
                        style={{
                            flex:1,
                            fontSize:18
                            
                        }}
                    >Phương thức thanh toán </Text>
                    <Text
                        style={{
                            color:mainColor
                        }}
                    >{paymentMethods}{' >'}</Text>

            </TouchableOpacity>

            <View
                onPress={()=>props.navigation.navigate('PayMentMethods',{paymentMethods,setPaymenthod})}
                style={
                    {
                        // flexDirection:'row',
                        // alignItems:'center',
                        // gap:20,
                        // borderTopWidth:1,
                        // borderBottomWidth:1,
                        // borderColor:'gray',
                        // height:50
                    }
                }
            >
                <View
                
                    style={{
                        flexDirection:'row',
                        marginTop:5,
                        gap:20,
                    }}
                >
                    <Entypo name="location-pin" size={24} color="black" />
                    <View>
                        <Text
                            style={{
                                fontSize:18
                            }}
                        >
                            Địa chỉ nhận hàng
                        </Text>
                        <View
                        
                        style={
                            {
                                border:'none'
                            }
                        }>
                            <TextInput
                            value={address}
                            onChangeText={(value)=>{
                                setAddress(value);
                                
                            }}
                            multiline={true}
                                style={{
                                    width: 300,
                                    height: 60,
                                    textAlignVertical: 'top',
                                }}
                            />
                        </View>
                       
                    </View>
                    
                    
                    
                </View>
                    

            </View>
            
           
        </View>
        
        </ScrollView>
        <View
            style={styles.checkOutContainer}
        >
            <View
                style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alighItems:'center',
                    
                }}
            >
                <Text
                    style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}
                >
                    Total
                </Text>
                <Text
                    style={{
                        fontSize:20,
                        fontWeight:'bold'
                    }}
                >
                    {userCart.total}
                </Text>
            </View>
            <TouchableOpacity

                onPress={()=>{
                    createOrder()
                    .then(()=>{
                        console.log('thêm đơn hàng thành công')
                    })
                    .catch(()=>{
                        console.log('Thêm đơn hàng thất bại')
                    })

                    setUserCart({products:[],total:null, details:null})
                    props.navigation.navigate('OrderSuccess')
                    
                }}
                style={
                    {
                        backgroundColor:mainColor,
                       
                        width:'100%',
                        height:50,
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center',
                        borderRadius:20,
                        fontWeight:'bold',
                        marginTop:10
                    }
                }
            >
                <Text
                    style={
                        {
                            fontSize:20,
                            fontWeight:'bold',
                            color:'white'
                        }
                    }
                >
                    Checkout
                </Text>
              
            </TouchableOpacity>
        </View>
        </View>
       
       
    )
}

export default UserCart;

const styles = StyleSheet.create({
   container:{
    padding:15,

    height:windowHeight,
    width:'100%'
    
   },
   checkOutContainer:{
    position: 'absolute',
    borderTopWidth:1,
    borderColor:gray,
    bottom:110,
   
    width:'100%',
    padding:20,
    height:150
   }
}) 