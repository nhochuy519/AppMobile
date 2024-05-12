
import { View,Image, FlatList ,Text,StyleSheet,Dimensions} from "react-native-web";
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


import { mainColor } from "../colorGlobal";

const screenWidth = Dimensions.get('window').width;
function Slogan({data}) {
    return(
        <View
            style={[styles.container,{
                width:(screenWidth/2)-5-20
            }]}
        >
           {data.icon}
            <Text
                style={{
                    fontSize:17,
                    fontWeight:'bold',
                    marginTop:10
                }}
            >
                {data.title}
            </Text>
            <Text>
                {data.description}
            </Text>
        </View>

    )
}

export default Slogan;

const styles = StyleSheet.create({
   container:{
        marginRight:15,
        marginBottom:20
   }
})