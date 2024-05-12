
import { View ,Text,StyleSheet} from "react-native"

import classNames from "classnames/bind";



    
function DefaultLayout({name,msv,ns,lop}) {
 return(
    <View >
        <Text style={styles.h1}>
            Họ và tên :{name}

        </Text>
        <Text style={styles.msv}>
            Msvv :{msv}
        </Text>
        <Text style={styles.ns}>
            ngày sinh :{ns}
        </Text>
        <Text style={styles.class}>
            Lớp : {lop}
        </Text>
    </View>
 )
}

export default DefaultLayout;

const styles = StyleSheet.create(
    {
        h1:{
            fontSize:30,
            marginLeft:20
        },
        msv:{
            color:'red'
        },
        ns :{
            color:'pink'
        },
        class:{
                textAlign:'right',
                color:'blue'
            }
    }
)