



import { View,Text,StyleSheet,Button ,Image, TextInput,TouchableOpacity} from "react-native-web";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
function Product({name}) {
    const [count,setCount]=useState(0)
    return(
        <View style={styles.container}>
            <View >
                <Image
                    style={{width: 100, height: 100}}
                source={{
                        uri: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/lo-dien-loat-trang-phuc-tien-hiep-moi-voi-tao-hinh-cuc-chat.jpg'}
                        }
                
                    />
            </View>
            <View
                style={{
                    flex: 1,
                    justifyContent:'space-between',
                    paddingTop:'10px',
                    paddingBottom:'10px',
                }}
            >
                    <Text
                    style={{
                        fontSize:'30px'
                    }}>
                    Product
                    </Text>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between'
                    
                }}>
                    <Text
                     style={{
                        fontSize:'20px'
                     }}
                    >
                        200 $
                    </Text>
                    <View style={
                        {
                            flexDirection:'row',
                            alighItems:'center',
                            justifyContent:'center',
                            gap:10
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
                </View>
                
            </View>
            
        </View>
    )
}


export default Product

const styles = StyleSheet.create({
    container:{
        borderWidth:'4px',
        marginBottom:'5px',
        flexDirection:'row',
        padding: 20,
        backgroundColor:'',
        gap:'20px'
        
    },
})