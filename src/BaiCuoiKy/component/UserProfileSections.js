
import { View,Text,StyleSheet,Button,TouchableOpacity ,FlatList  ,Image } from "react-native-web";
import { Entypo } from '@expo/vector-icons';
import { useEffect } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { gray } from "../colorGlobal";
function UserProfileSections({callback,name}){
    return(
            <TouchableOpacity style={styles.container} 
                onPress={callback}
            >
                <Text>
                    {name}
                </Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />

            
            </TouchableOpacity>
    )
}
export default UserProfileSections;

const styles = StyleSheet.create({
    container:{
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alighItems:'center',
        backgroundColor:gray,
        width:'100%',
        borderRadius:10,
        marginBottom:20
    }
})