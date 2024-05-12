
import { StyleSheet ,Text,View} from "react-native";

import NhietDo from "./NhietDo";
import NutBam from "./NutBam";
import Bi from "./Bi";
import { tang,giam } from "./Reducer/nhietdoSlice";
import { tangRed,giamRed,tangBlue,giamBlue,tangGreen,giamGreen } from "./Reducer/rgbSlice";
const ManHinhChinh = ()=>{

    return (
        <View style={styles.container}>
            <Bi reducer={'color'}/>
            <NutBam callback={[tangRed,giamRed]} title={['Tăng Red','Giảm Red']} />
            <NutBam callback={[tangBlue,giamBlue]} title={['Tăng Blue','Giảm Blue']} />
            <NutBam callback={[tangGreen,giamGreen]} title={['Tăng Green','Giảm Green']} />
            
        </View>
    )
}

export default ManHinhChinh;

const styles = StyleSheet.create({
    container:{
        padding:15

    }
})