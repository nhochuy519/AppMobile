


import { View,Text,StyleSheet,Button } from "react-native-web";
function HomePage(props) {

    return(
        <View style={styles.container}>
            <Text>HomePage</Text>


        </View>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    }   

})