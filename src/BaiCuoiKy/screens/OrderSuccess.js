

import { View,Image, FlatList ,TextInput,StyleSheet,Text,Dimensions, TouchableOpacity} from "react-native-web"

import { gray, mainColor } from "../colorGlobal";
import { Octicons } from '@expo/vector-icons';
const data =[
    1,2,3,4,
]
const windowHeight = Dimensions.get('window').height;
function OrderSuccess (props) {
    
    return(
       <View
        style={{
            
            justifyContent:'center',
            alignItems: 'center',
            marginTop:100
           
        }}
       >
           
            <Octicons name="check-circle" size={200} color={mainColor} />
            <Text
                style={{
                    fontWeight:'bold',
                    fontSize:20
                }}
            >
                Tạo đơn hàng thành công
            </Text>
            <TouchableOpacity
                onPress={()=>{
                    props.navigation.navigate('UserOrder')
                   
                }}
            >
                <Text
                    style={{
                        color:mainColor,
                        fontSize:18

                    }}
                >
                    Xem giỏ hàng
                </Text>
                
            </TouchableOpacity>
       </View>
           
        
       
    )
}

export default OrderSuccess;

const styles = StyleSheet.create({
    container :{
        
       
    }
})

