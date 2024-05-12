

import { View,Image, FlatList ,TextInput,StyleSheet,Text,TouchableOpacity} from "react-native-web";
import { gray } from "../colorGlobal";
import Result from "../screens/Result";
import { inputColor } from "../colorGlobal";
function ShopByCg({props,data}) {
    console.log(data.image)
    return(
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('Result',{q:data.name})}

            >
                <View
                style={styles.container}
            >
                <Image
                    style={{
                        width:50,
                        height:50,
                        marginRight:10
                    }}
                    source={{
                    uri: data.image}
                    }
            
                /> 
                <Text>{data.name}</Text> 
            </View>
            </TouchableOpacity>

            

        
        
       
    )
}

export default ShopByCg;

const styles = StyleSheet.create({
    container:{
        padding: 15,
        backgroundColor: gray ,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        marginBottom:5
    }
})
