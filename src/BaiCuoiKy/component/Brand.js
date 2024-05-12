









import { View,Image, FlatList ,Text,StyleSheet,Dimensions} from "react-native-web";
import { MaterialIcons } from '@expo/vector-icons';


import { mainColor } from "../colorGlobal";

const screenWidth = Dimensions.get('window').width;
function Brand({medium,last=false,data}) {
    return(
        <View
            style={styles.container}
        >
            <Image
            style={
                {
                    width:120,
                    height:120,
                    borderRadius:10
                }
            }
                source={
                    {
                        uri:data
                    }
                }
            />
            <Text>
                Adidas
            </Text>
        </View>

    )
}

export default Brand;

const styles = StyleSheet.create({
   container:{
    borderRadius:10,
    backgroundColor:'white',
    width:'fit-content',
    alignItems:'center',
    flexDirection:'column',
    padding:10,
    marginRight:10,

   }
})