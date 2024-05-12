
import { StyleSheet ,Text,View} from "react-native";
import { useSelector } from "react-redux";

const NhietDo = ({name,reducer})=>{
    const result = useSelector(state =>state[reducer].value)
    return (
        <View>
            <Text style={styles.text}>{name} {result}</Text>
        </View>
    )
}


export default NhietDo;

const styles = StyleSheet.create({
    text:{
        color:"blue"
    }
})