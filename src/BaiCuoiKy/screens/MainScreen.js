import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { View,Text,StyleSheet,Button,TouchableOpacity , ScrollView,FlatList ,Image ,TextInput ,Dimensions} from "react-native-web";

import { useEffect, useState } from "react";
import categories from "../categories";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import User from '../component/User'

import Carousel from 'react-native-reanimated-carousel';
import FeaturedContainer from "../component/Featured";

import ProductShow from "../component/productShow";
import Brand from "../component/Brand";
import Slogan from "../component/Slogan";
import ProductDetail from "./ProductsSc";
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import instance from "../API";
import Product from "../../Thi/bai4/product";
import { mainColor } from "../colorGlobal";
const images=[
    "https://im.uniqlo.com/global-cms/spa/rese3bd6ee863f265c3bcba5a970b8dcc59fr.jpg",
    "https://im.uniqlo.com/global-cms/spa/resdc7e316b4d5e7c5ab4d9861df160ef9cfr.jpg",
    "https://im.uniqlo.com/global-cms/spa/rese81e1ef5c9ec257061620e967a85f6a1fr.jpg",
    "https://im.uniqlo.com/global-cms/spa/resa5a5fa9543a425b4906c69133c2a7809fr.jpg"
]

const uTCollection =[
    "https://im.uniqlo.com/global-cms/spa/res52ca5ce820d2c170248cba5e11fd2d17fr.jpg",
    "https://im.uniqlo.com/global-cms/spa/res15fda0f02b62de14f831e3131b8f3dbdfr.jpg",
    "https://im.uniqlo.com/global-cms/spa/res8b31ae68a1be140cf69b61611dc01f7efr.jpg",
    "https://im.uniqlo.com/global-cms/spa/res2009177159d3143805db9edd3f9f049bfr.jpg",
    "https://im.uniqlo.com/global-cms/spa/res63626c0e66c5406e4502ed4521dee657fr.jpg",
    "https://im.uniqlo.com/global-cms/spa/res096e2c62de05205de5219fa53071a11ffr.jpg",
    "https://im.uniqlo.com/global-cms/spa/resfad1db2d3069a743761c0ee9da09f9e0fr.jpg"


]

const security = [
    {
        icon:<MaterialIcons name="screen-share" size={24} color={mainColor} />,
        title:'Dịch vụ chuyên nghiệp',
        description:'Hỗ trợ khách hàng hiệu quả từ đội ngũ nhiệt huyết',
    
    },
    {
        icon:<Entypo name="shopping-cart" size={24} color={mainColor} />,
        title:'Thanh toán an toàn',
        description:'Các phương thức thanh toán an toàn khác nhau'
    },
    {
        icon:<MaterialIcons name="local-shipping" size={24} color={mainColor} />,
        title:' Giao hàng nhanh',
        description:'Giao hàng tận nơi nhanh chóng và tiện lợi'
    },
    {
        icon:<AntDesign name="heart" size={24} color={mainColor} />,
        title:'Chất lượng & Tiết kiệm',
        description:'Kiểm soát chất lượng toàn diện và giá cả phải chăng'
    }
]
const data=[
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '4'},
    { key: '5' },
    { key: '6' },
]
const screenWidth = Dimensions.get('window').width;
function MainScreen(props){
    const [product,setProduct]=useState();
    const [featured,setFeatured]=useState([]);

    const [men,setMen]=useState([])

    const Stack = createStackNavigator();
    
    
    useEffect(()=>{
        console.log('chạy useeffect')
        instance.get('/product')
        .then((result)=>{
            const apiRs  =Object.values(result.data.data.products);
            
            const Featured = apiRs.filter((item)=>{
                return item.price <= 70000
            })
            const Men = apiRs.filter((item)=>{
                return item.classify=== 'men' && item.ratings>=4.7
            })
            setFeatured(Featured);
            setMen(Men)
           
        })
    },[])


    return( 
        <ScrollView>
    <View style={styles.container}>
            
            <View style={{marginBottom:10}}>
                <User props ={props}/>
            </View>

            

        <View style={styles.filterContainer}>
            <Feather name="search" size={24} color="black" 
               
            />
            <TextInput
                 placeholder="Search"
                 style={[{height:'100%',flexGrow:1, outlineColor: 'transparent', // Thiết lập màu của outline thành transparent
                 outlineWidth: 0,marginLeft:5,}]}
                 onFocus={()=>
                    props.navigation.navigate('FilterProduct',{featured,})
                 }
            />

        </View>
        <View>
            <ScrollView horizontal={true}>
                <FlatList
                    horizontal={true}
                    data={images}
                    renderItem={({item,index})=>{
                        return( <Image
                            resizeMode="cover"
                            style={{ width: screenWidth, height: 200 }}
                            source={{ uri: item }}
                            />)
                    }}
                />
            </ScrollView>
             
            </View>
        <View>
            <View style={styles.featuredContainer}>
                <View
            >
                    <Text
                        style={{
                            fontSize:18,
                            fontWeight: 'bold'
                        }}
                    >Featured</Text>
                </View>
                {/* <View>
                    <Text
                        onPress={()=>props.navigation.navigate('Result',{q:' '})}
                    >See all</Text>
                </View> */}
            </View>

           
            <ScrollView
                
        horizontal={true}// hiện ngang
        showsHorizontalScrollIndicator={false} // ẩn thanh scroll ngang
    >


        {
           
           <FlatList
                
           horizontal={true}
            data={featured}
            renderItem={({item,index})=>{
                return(
                    <ProductShow props={props} key={index} data={item} />
                )
                
            }}
        /> 

          
        }
       
            

        </ScrollView>
          
            
        </View>
        <View
        
        >
            <View style={styles.featuredContainer}>
                    <View
                >
                        <Text
                            style={{
                                fontSize:18,
                                fontWeight: 'bold'
                            }}
                        >Most Popular</Text>
                    </View>
                    
                </View>

                {/* <ScrollView

                contentContainerStyle={
                    {
                        marginBottom: 20,
                    }
                }
                
                horizontal={true}// hiện ngang
                showsHorizontalScrollIndicator={false} // ẩn thanh scroll ngang
            >
                    <TouchableOpacity
                        style={styles.buttonStyles}
                    >
                        <Text
                        styles={{
                            paddingLeft:10,
                            paddingRight:10
                        }}>
                            Shoes
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyles}
                    >
                        <Text
                        styles={{
                            paddingLeft:10,
                            paddingRight:10
                        }}>
                            Shoes
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyles}
                    >
                        <Text
                        styles={{
                            paddingLeft:10,
                            paddingRight:10
                        }}>
                            Shoes
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyles}
                    >
                        <Text
                        styles={{
                            paddingLeft:10,
                            paddingRight:10
                        }}>
                            Shoes
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyles}
                    >
                        <Text
                        styles={{
                            paddingLeft:10,
                            paddingRight:10
                        }}>
                            Shoes
                        </Text>
                    </TouchableOpacity>

            </ScrollView> */}

            <View style={styles.mostPopularContainer} >

                <FlatList
                
                   numColumns={2}   
                    data={men}
                    renderItem={({item,index})=>{
                        return(
                            <ProductShow data={item} props={props} medium last={ (index+1)%2===0 ? true:false}/>
                        )
                    }}
                />

                   
                    
            </View>
        </View>
        <View>
                <View style={styles.featuredContainer}>
                    <View
                >
                        <Text
                            style={{
                                fontSize:18,
                                fontWeight: 'bold'
                            }}
                        >UT collection</Text>
                    </View>
                    
                </View>

                <ScrollView
                showsHorizontalScrollIndicator={false} 
                horizontal={true}
                contentContainerStyle={{
                  
                }}
                >


                    <FlatList
                        data={uTCollection}
                        horizontal={true}
                        renderItem={({item,index})=>{
                            return <Brand data={item}/>
                        }}
                    />

                </ScrollView>

                <View>

                </View>
       </View>
       <View
        style={styles.sloganContainer}
       >
               <FlatList
                
                numColumns={2}   
                 data={security}
                 renderItem={({item,index})=>{
                     return(
                         <Slogan  data={item} medium last={ (index+1)%2===0 ? true:false}/>
                     )
                 }}
             />
  
       </View>

   
       
    </View>
    </ScrollView>

    

       
    )
}

export default MainScreen;


const styles = StyleSheet.create({
    container:{
        
        flexDirection:'column',    
        width:'100%',
        height:'100%',

        justifyContent: 'center',
        gap:10,
        padding:20

       
    },

    filterContainer:{
        height:40,
        position:'relative',
        borderRadius:'5px',
        backgroundColor:'rgb(235, 232, 232)',
        flexDirection:'row',  
        alignItems: 'center',
        paddingLeft:10,
        paddingRight:10,
        marginBottom:20,
        borderRadius:50,
        
        
    },  
    featuredContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:15
    },
    buttonStyles:{
        paddingLeft:17,
        paddingRight:17,
        paddingTop:10,
        paddingBottom:10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius:40,
        marginRight:10 
      
    },


    mostPopularContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    sloganContainer :{
        marginTop:40,
        borderTopWidth: 0.5,
        borderTopColor: 'gray', 
        borderTopStyle: 'solid', 
        paddingTop:40
    }
})