



import { View,Text,StyleSheet,Button ,Image, TextInput,TouchableOpacity} from "react-native-web";

import Product from "./product";
function ShowProduct() {
    return(
        <View style={styles.container}>
            <Product/>
            <Product/>
            <Product/>
          
        </View>
    )
}



export default ShowProduct

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:10
    }
    
})