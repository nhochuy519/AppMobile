



import { View,Text,StyleSheet,Button,TouchableOpacity ,FlatList  ,Image } from "react-native-web";
import { Entypo } from '@expo/vector-icons';
import { inputColor } from "../colorGlobal";
function ListSearch({name,props,data}){
    return(
        <TouchableOpacity
            onPress={()=>props.navigation.navigate('ProductDetail',{productData:data})}
        >
            <View style={styles.container} >
            {data?data.name: null}
            </View>
        </TouchableOpacity>
            
    )
}
export default ListSearch;

const styles = StyleSheet.create({
   container:{
    width:'100%',
    borderTopWidth:0.5,
    borderTopColor:'gray',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop:10,
    paddingBottom:10
   }
})