









import { View,Text,StyleSheet,Button ,Image, TextInput,TouchableOpacity} from "react-native-web";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
function ProductDetails({name}) {
    const [count,setCount]=useState(0)
    return(
        <View style={styles.container}>
            <View >
                <Image
                    style={{width: '100%', height: 400}}
                source={{
                        uri: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/lo-dien-loat-trang-phuc-tien-hiep-moi-voi-tao-hinh-cuc-chat.jpg'}
                        }
                
                    />
            </View>

            <Text
                    style={{
                        fontSize:'30px',
                        textAlign:'center'
                        
                    }}>
                    Product
            </Text>
           
            <View style={
                        {
                            flexDirection:'row',
                            alighItems:'center',
                            justifyContent:'center',
                            gap:50
                        }
                    }>
                        <TouchableOpacity 
                        style={
                            {
                                borderWidth:'2px',
                                borderRadius:'999px'
                            }
                       
                        }
                        onPress={()=>setCount(count+1)}
                        >
                            <Text>
                                <AntDesign name="plus" size={24} color="black" />
                            </Text>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize:20
                        }}>
                            {count}
                        </Text>
                        <TouchableOpacity
                            style={
                                {
                                    borderWidth:'2px',
                                    borderRadius:'999px'
                                }
                            }
                            onPress={()=>setCount(count-1)}

                        >
                            <Text>
                                <AntDesign name="minus" size={24} color="black" />
                            </Text>
                        </TouchableOpacity>
            </View>
            <Text
                     style={{
                        fontSize:'20px',
                        textAlign:'center'
                     }}
                    >
                        200 $
            </Text>
            <View
                style={{
                    flexDirection:'row',
                    gap:'5px',
                    padding:20

                }}
            >
                <TouchableOpacity
                            style={
                                {
                                    
                                    width:'50%',
                                    padding:5,
                                    backgroundColor:'gray',
                                    borderRadius:4
                                    
                                }
                            }
                            

                        >
                            <Text
                                style={{
                                    textAlign:'center',
                                    fontSize:20,
                                    color:'white'

                                }}
                            >
                                Add to cart
                            </Text>
                 </TouchableOpacity>
                 <TouchableOpacity
                            style={
                                {
                                    width:'50%',
                                    backgroundColor:'blue',
                                    padding:5,
                                    borderRadius:4
                                    
                                }
                            }
                            

                        >
                            <Text
                            
                             style={{
                                    textAlign:'center',
                                    fontSize:20,
                                    color:'white'
                                    
                                }}
                            >
                               Buy now
                            </Text>
                 </TouchableOpacity>
            </View>
        </View>
    )
}


export default ProductDetails

const styles = StyleSheet.create({
    container:{        
        borderWidth:'4px',
        marginBottom:'5px',
        alighItems:'center',
        marginTop:30,
        gap:'20px'
        
    },
})