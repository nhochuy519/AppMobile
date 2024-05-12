

import { View,Image, FlatList,ScrollView, StyleSheet ,Text,TouchableOpacity,TextInput,Dimensions} from "react-native-web"
import { useState,useEffect,useCallback } from "react";
import products from "../products";
import { mainColor,inputColor } from "../colorGlobal";
import ProductShow from "../component/productShow";
import instance from "../API";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
const data=[
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '4'},
    { key: '5' },
    { key: '6' },
]

const sizeObj =[
    'S',
    'M',
    'L',
    'XL',
    'XXL'
]
const screenWidth = Dimensions.get('window').width;
function ProductDetail(props) {
    const [quantity,setQuantity] = useState(1);
    const [favorite,setFavorite]=useState(false);
    const [size,setSize]=useState('S');
    const { productData } = props.route.params;
  
    console.log(favorite)
    const handleQuantityChange = (text) => {
        // Kiểm tra xem giá trị mới có phải là số không
        if (/^\d+$/.test(text) || text === '') {
          setQuantity(text);
        }
      };
    const handleAddToCart = ()=>{
        console.log(productData._id)
        instance.patch('/user/cart',{
            productId:productData._id,
            quantity,
            price:productData.price,
            size:productData.size
        })
        .then(()=>{
            console.log('thêm vào cart thành công')
        })
    }

    const getJwt = async () => {
        try {
            const token = await AsyncStorage.getItem('jwt');
            return token;
        } catch (error) {
            return null;
        }
    }
    const removeFavorite = async () => {
        try {
            const token = await AsyncStorage.getItem('jwt');
            const response = await fetch('https://qhn-api.onrender.com/user/favorite', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${await getJwt()}`
                },
                body: JSON.stringify({ productId: productData._id })
            });
    
            if (response.ok) {
                console.log('Xoá khỏi yêu thích thành công');
                setFavorite(!favorite);
            } else {
                console.log('Đã xảy ra lỗi khi xoá yêu thích');
            }
        } catch (error) {
            console.error('Đã xảy ra lỗi:', error);
        }
    };

    useFocusEffect(
       useCallback(() => {
            console.log('thực hiện useEffect')
            instance.get('user/profile')
            .then((result)=>{
                const favoritesArr = result.data.data[0].favorite;
                const checkFavorites = favoritesArr.some((item)=>item.products === productData._id);
                if(checkFavorites) {
                    setFavorite(!favorite)
                }
                // console.log(result.data.data[0].favorite)
            })
        }, [])
      );
    // useEffect(()=>{
    //     console.log('thực hiện useEffect')
    //     instance.get('user/profile')
    //     .then((result)=>{
    //         const favoritesArr = result.data.data[0].favorite;
    //         const checkFavorites = favoritesArr.some((item)=>item.products === productData._id);
    //         if(checkFavorites) {
    //             setFavorite(!favorite)
    //         }
    //         // console.log(result.data.data[0].favorite)
    //     })
        
    // },[])   

    const addFavorite = ()=>{
        if(!favorite) {
            console.log('thực hiện thêm')
            console.log(productData)
            instance.patch('user/favorite',{
                productId:productData._id
            })
            .then(()=>{
                console.log('thành công');
                setFavorite(!favorite)
            })
        }
        else{
            // console.log('thực hiện xoá')
            // console.log(productData._id)
            // instance.delete('user/favorite',{  
            //     productId:productData._id
            // })
            // .then(()=>{
            //     console.log('xoá khỏi yêu thích thành công');
            //     setFavorite(!favorite)
            // })
            // .catch(()=>{
            //     console.log('thất bại')
            // })
            removeFavorite()
        }
     
    }
      console.log('xuất hiện')
    return(
        <ScrollView>
            <View >
            <ScrollView horizontal={true}>

            <FlatList
                
                horizontal={true}
                 data={productData.images}
                 renderItem={({item,index})=>{
                     return(
                        <Image
                        resizeMode="cover"
                        style={{ width: 300, height: 300 }}
                        source={{ uri: item }}
                    />
                     )
                 }}
             />  
                
            {/* <Image
                resizeMode="cover"
                style={{ width: 300, height: 300 }}
                source={{ uri: productData.imageCover }}
            />
            <Image
                resizeMode="cover"
                style={{ width: 300, height: 300 }}
                source={{ uri: productData.imageCover }}
            /> */}
        </ScrollView>
                

                <View style={styles.infoProduct}>
                    <Text
                    style={{fontSize:20,fontWeight:'bold'}}
                    >{productData.name}</Text>
                    <Text
                        style={{
                            marginTop:20,
                            fontSize:40,
                            fontWeight:'500'
                        }}
                    >{productData.price} VND</Text>
                    <Text style={{
                        marginTop:20,
                       

                    }}>
                        {
                            productData.description
                        }
                    </Text>
                    <View 
                        style={{
                            flexDirection:'row',
                            alignItems:'center',
                            gap:10,
                            marginTop:20
                           
                        }}
                    >
                        <Text>Size:</Text>
                        <View
                            
                        >

                            <FlatList
                            horizontal={true}
                            data={sizeObj}
                            renderItem={({item,index})=>{
                                return (
                                    <TouchableOpacity
                                    onPress ={()=>setSize(item)}
                                    style={[styles.button,size===item?{backgroundColor:mainColor,color:'white'}:{     backgroundColor:inputColor,}]}
                                >
                                    <Text
                                         style={size===item?{color:'white'}:{color:'black'}}
                                    >
                                        {item}
                                    </Text>
                                    
                                </TouchableOpacity>
                                )

                            }}
                            />
                          
                            {/* <TouchableOpacity
                                style={styles.button}
                            >
                            
                                <Text
                                     
                                >
                                    M
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                            >
                            
                                <Text
                                     
                                >
                                    XL
                                </Text>
                            </TouchableOpacity> */}
                        </View>
                        
                        
                    </View>
                    <View
                         style={{
                            flexDirection:'row',
                            alignItems:'center',
                            marginTop:10
                            
                        }}
                    >
                            <Text>Quantity</Text>
                            <View
                                style={{
                                    flexDirection:'row',
                                    alignItems:'center',
                                    marginLeft:10,
                                  
                                    
                                }}
                            >
                                <TouchableOpacity
                                    style={styles.buttonQuantity}
                                    onPress={()=>{
                                        setQuantity(prev=>prev+1)
                                    }}
                                >
                                    <Text
                                        style={{
                                            color:'white'
                                        }}
                                    >
                                        +
                                    </Text>
                                </TouchableOpacity>
                                <TextInput
                                    onChangeText ={handleQuantityChange}
                                    style={{
                                        width: 30,
                                        backgroundColor: inputColor,
                                        height: 30,
                                        paddingLeft:10
                                    }}
                                    value={quantity}
                                    textAlignVertical="center" // Để canh giữa theo chiều dọc
                                    />
                                <TouchableOpacity
                                    style={styles.buttonQuantity}
                                    onPress={()=>{
                                        if(quantity <= 0) {
                                            return setQuantity(0)
                                        }
                                        setQuantity(prev=>prev-1)
                                    }}
                                >
                                    <Text
                                        style={{
                                            color:'white'
                                        }}
                                    >
                                        -
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                                marginTop:20,
                                gap:15
                                
                            }}
                        >
                            <TouchableOpacity
                                style={styles.buttonBuyFavo}
                                onPress={handleAddToCart}
                            >
                                    <Text
                                    style={{
                                        fontWeight:'bold',
                                        color:'white'
                                    }}>
                                        Mua ngay
                                    </Text>
                                </TouchableOpacity>
                        
                                <TouchableOpacity
                                     style={[styles.buttonBuyFavo,{
                                    
                                        backgroundColor:inputColor
                                     }]}
                                     onPress={()=>{
                                        addFavorite()
                                        
                                     }}
                                >
                                    <Text
                                        style={{
                                            fontWeight:'bold'
                                        }}
                                    >
                                        {
                                            favorite? 'Xoá khỏi yêu thích' :'Yêu Thích'
                                        }
                                    </Text>
                                </TouchableOpacity>
                        </View>
                        {/* <View style={styles.mostPopularContainer}>
                            <FlatList
                            
                            numColumns={2}   
                            data={data}
                            renderItem={({item,index})=>{
                                return(
                                    <ProductShow props={props} medium last={ (index+1)%2===0 ? true:false}/>
                                )
                            }}/>
                        </View> */}
                </View> 
               
                
                                       
            </View>
        </ScrollView>
        
       
    )
}

export default ProductDetail;

const styles = StyleSheet.create({
    infoProduct:{
        backgroundColor:'white',
        
        width:'100%',
        marginTop:'-15px',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        padding:20,

    },
    colorContainer:{
        flexDirection:'row',
        gap:10,
       
        

    },
    button:{
        width:50,
        height:30,
        padding:4,
        
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
   
        borderRadius:999
    },
    buttonBuyFavo:{
        width:150,
        height:50,
        
        backgroundColor:mainColor,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:40,
        

    },
    mostPopularContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alighItemsL:'center',
        marginTop:20
        
    },
    buttonQuantity:{
        backgroundColor:'black',
        width:20,
        height:20,
        borderRadius:999,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        

    }

})
