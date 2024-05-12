
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { View,Text,StyleSheet,Button } from "react-native-web";
function ScreenOne() {

    return(
        <View style={styles.container}>
            <Text>
                Trang thứ nhất
            </Text>

        </View>
    )
}

export default ScreenOne;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    }   

})