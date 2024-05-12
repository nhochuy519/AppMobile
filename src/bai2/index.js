
import { View,StyleSheet,Image } from "react-native-web"
function Bai2() {
    const arrStyles =[styles.all];
    return(
        <View>  
            <View style={arrStyles} >
                Đỏ
            </View>
            <View style={arrStyles} >
                Cam
            </View>
            <View style={arrStyles} >
                Vàng
            </View>
            <View style={arrStyles} >
                Lục
            </View>
            <View style={arrStyles} >
                Lam
            </View>
            <View style={arrStyles} >
                Chàm
            </View>
            <View style={arrStyles} >
                Tím
            </View>

            <View>
                <Image source={{
                    uri: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/lo-dien-loat-trang-phuc-tien-hiep-moi-voi-tao-hinh-cuc-chat.jpg'}
                    }
                        style={{width: 400, height: 400}}
                />
                <View>huy</View>
            </View>

        </View>
    )
}



export default Bai2;



const styles = StyleSheet.create({
    all:{
        backgroundColor:'red',
        height:100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        
        
    }
  });