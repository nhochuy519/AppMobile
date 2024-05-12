

import { View,Text,StyleSheet,Button } from "react-native-web";
function Cart() {

    return(
        <View style={styles.container}>
            <Text>
                Cart
            </Text>

        </View>
    )
}

export default Cart;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    }   

})