

import { StyleSheet ,Text,View} from "react-native";

import { useSelector } from "react-redux";
const  Bi =({reducer}) => {
    const result = useSelector(state =>state[reducer].value)
    console.log(result)
    return (
        <View
        style={styles.container}
        >
            <View
               style={[styles.radius,{
                backgroundColor:`rgb(${result.red}, ${result.blue}, ${result.green})`
               }]}
            >

            </View>
        </View>
    )
}

export default Bi

const styles = StyleSheet.create({
    container :{
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderWidth:2,
        borderRadius:10

    },
    radius :{
        width:150,
        height:150,
        borderRadius:999,
        borderWidth:2,
        borderColor:'black'
    }
})


