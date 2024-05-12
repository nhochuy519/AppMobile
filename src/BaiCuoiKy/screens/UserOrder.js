

import { View,Image, FlatList ,TextInput,StyleSheet,Text,Dimensions,TouchableOpacity} from "react-native-web"
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native"
import OrderDetail from "./OrderDetails";
import { gray, mainColor } from "../colorGlobal";
import { ScrollView } from "react-native-gesture-handler";
import OrderContainer from "./OrderContainer";
import { useEffect, useState } from "react";
import instance from "../API";
import EmptyCart from "./EmptyCart";
import { MaterialIcons } from '@expo/vector-icons';
const data =[
    1,2,3,4,
]
const windowHeight = Dimensions.get('window').height;
function UserOrder (props) {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        instance.get('/user/orderPlaced')
        .then((result)=>{
            console.log(result.data.data)
            setProducts(result.data.data)
        })
    },[])
    if(products.length === 0) {
        return(    <EmptyCart props={props}/>)
       
    }
    return(


                <View 
                    style={styles.container}
                >   
                <View
                   style={{
                        flexDirection:'row',
                        postion:'relative',
                        alignItems: 'center',
                        justifyContent:'center',
                        marginBottom:20,
                        marginTop:20
                   }}
                >
                    <View
                        style={{
                            position:'absolute',
                            left:0
                        }}
                    >
                        <TouchableOpacity
                            onPress={()=>{
                                props.navigation.navigate('UserSC')
                            }}
                        >
                            <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
                        </TouchableOpacity>
                       
                    </View>
                   
                   
                    <Text
                        onPress={()=>{
                            props.navigation.navigate(('UserSC'))
                        }}
                        style={{
                            fontSize:20,
                            fontWeight:'bold',
                            color:mainColor
                        }}
                    >
                            Đơn  hàng
                    </Text>
                    
                </View>
                
                <ScrollView
                     style={{ flex: 1 ,height:'80%'}}
                     contentContainerStyle={{ flexGrow: 1 }}
                     
                >
                    <FlatList
                        data={products}
                        renderItem={({item,index})=>{
                            return  <OrderContainer data={item}/>
                        }}
                    />
                </ScrollView>
               
                
                    
                </View>


       
           
        
       
    )
}

export default UserOrder;

const styles = StyleSheet.create({
    container :{
        padding:5,
        backgroundColor:gray,
        height:'100%'
       
    }
})

