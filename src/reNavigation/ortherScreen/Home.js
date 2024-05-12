
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { View,Text,StyleSheet,Button } from "react-native-web";
function HomeMobile(props) {

    return(
        <View style={styles.container}>
            <Button
                title='Screen One'
                onPress={()=>props.navigation.navigate('ScreenOne')}
            />
            <Button
                title='Screen Two'
                onPress={()=>props.navigation.navigate('ScreenTwo')}
            />

        </View>
    )
}

export default HomeMobile;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    }   

})