





import { View,Image, FlatList ,Text,StyleSheet,Dimensions,TouchableOpacity} from "react-native-web";
import { MaterialIcons } from '@expo/vector-icons';


import { mainColor } from "../colorGlobal";

const screenWidth = Dimensions.get('window').width;
function ProductShow({medium,last=false,props,data}) {

    
    const check=(key)=>data? data[key] :false;
    const truncateString = (str, maxLength) => {
        if (str && str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        }
        return str;
    };
    
    return(
        <TouchableOpacity 
        onPress={()=>props.navigation.navigate('ProductDetail', { 
            productData:data?data:undefined
        })}
        >
            <View 
            
        style ={[styles.container,{marginRight: last  ? 0 : 10},medium?{width: (screenWidth/2)-5-20, height: 180,borderRadius:10}:{width: 120, height: 130,borderRadius:10}]}>
            <View style={styles.imgContainer}>
                <Image
                
                    style={[medium?{width: (screenWidth/2)-5-20, height: 180,borderRadius:10}:{width: 120, height: 130,borderRadius:10}]}
                    source={{
                            uri:check('imageCover')||'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/lo-dien-loat-trang-phuc-tien-hiep-moi-voi-tao-hinh-cuc-chat.jpg' }
                            }
                    
                        />  
                        
                
            </View>
           
            
            <View> 
                <Text
                    style={{
                        fontWeight:'600',
                        fontSize:16,
                    }}
                    numberOfLines={1} // Chỉ hiển thị 1 dòng
                    ellipsizeMode='tail'
                    
                >{check('name')}</Text>
                <Text
                    style={{
                        color:'gray'
                    }}
                > 4.5  | <Text style={{color:mainColor}}>8.743 sold</Text></Text>
                <Text>{check('price')} VND</Text>
            </View>
        </View>
        </TouchableOpacity>
        
       
    )
}

export default ProductShow;

const styles = StyleSheet.create({
    container:{
        
        flex:1,
        marginRight:10,
        marginBottom:10,
        
    },
    imgContainer:{
        position:'relative',
        height:'fit-content',
        width:'fit-content'
    }
})