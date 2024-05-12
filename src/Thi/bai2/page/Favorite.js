

import { View,Text,StyleSheet,Button } from "react-native-web";
function Favorite() {

    return(
        <View style={styles.container}>
            <Text>
                Favorite
            </Text>

        </View>
    )
}

export default Favorite;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    }   

})