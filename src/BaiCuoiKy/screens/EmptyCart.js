

import { View,Image, FlatList ,TextInput,StyleSheet,Text,Dimensions,TouchableOpacity} from "react-native-web"
import { Entypo } from '@expo/vector-icons';
import { mainColor } from "../colorGlobal";
import { StackActions } from '@react-navigation/native';
function EmptyCart({props}){
    return(
        <View
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                gap:10
                
            }}
        >   
            <Entypo name="shopping-cart" size={200} color={mainColor} />
            <Text
                style={
                    {
                        fontSize:18,
                        fontWeight:"bold"
                    }
                }
            >Chưa có đơn hàng nào</Text>
            <TouchableOpacity
                onPress={()=>{
                
                    props.navigation.navigate('MainScreen');
                   
                    props.navigation.dispatch(StackActions.popToTop()); // ressetStack
                }}
            >
                <Text
                    style={{
                        color:mainColor,
                        fontSize:18
                    }}
                >
                    Quay lại trang chủ
                </Text>
            </TouchableOpacity>
        </View>
    )
} 

export default EmptyCart