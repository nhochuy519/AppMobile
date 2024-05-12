

import { createStackNavigator } from "@react-navigation/stack"
import { View,Image, FlatList,ScrollView, StyleSheet ,Text,TouchableOpacity,TextInput} from "react-native-web"
import { useCallback, useState,useEffect } from "react";
import products from "../products";
import { mainColor,inputColor } from "../colorGlobal";
import ProductShow from "../component/productShow";

import { useFocusEffect } from '@react-navigation/native';

import instance from "../API";
const data=[
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '4'},
    { key: '5' },
    { key: '6' },
    { key: '7' },
    { key: '8' },
]
function FavoritesDetail(props) {
 
    const [favorite,setFavorite]=useState(null);
    const [reRender,setReRender] =useState(false)
    useFocusEffect(
        useCallback(()=>{
            instance.get('/user/favorite')
            .then((result)=>{
                console.log(result.data.data.favorite)
                setFavorite(result.data.data.favorite)
            })
        },[])
       
    )
    const reRenderFavorite =()=>{
        setReRender(!reRender)
        
    }
    // useEffect(()=>{
    //     instance.get('/user/favorite')
    //     .then((result)=>{
    //         console.log(result.data.data.favorite)
    //         setFavorite(result.data.data.favorite)
    //     })
    // },[reRender])
    
    return(
        <ScrollView>
            
            <View >
               
                <View
                
                style={{
                    backgroundColor:'white',
        
                    width:'100%',
                    
                    
                    padding:20,
                }}>
                     <Text
                         style={
                            {
                                marginTop:10,
                                fontSize:18,
                                fontWeight:'500'
                            }
                        }
                     >
                        My Wishlist
                    </Text>
                    <Text
                        style={
                            {
                                marginTop:10,
                                marginBottom:20
                            }
                        }
                    >
                        {favorite?favorite.length:0} products found
                    </Text>
                        <View style={styles.mostPopularContainer}>
                            <FlatList
                            
                            numColumns={2}   
                            data={favorite}
                            renderItem={({item,index})=>{
                                return(
                                    <ProductShow  data={item.products} props={props} medium last={ (index+1)%2===0 ? true:false}/>
                                )
                            }}/>
                        </View>
                </View> 
               
                
                                       
            </View>
        </ScrollView>
        
       
    )
}

export default FavoritesDetail;

const styles = StyleSheet.create({
   

})
