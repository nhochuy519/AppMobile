
import { View,Text,StyleSheet,Button ,Image, TextInput,TouchableOpacity} from "react-native-web";
function LoginPage() {
    return(
        <View style={styles.container}>
            <View style={styles.image}>
                <Image
                    style={{width: 100, height: 100}}
                source={{
                        uri: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/lo-dien-loat-trang-phuc-tien-hiep-moi-voi-tao-hinh-cuc-chat.jpg'}
                        }
                
                    />
            </View>
            
            <View style={{flex:1,alignItems:'center',width:'100%',justifyContent:'center',marginTop:'20px'}}>
                <TextInput
                style={styles.input}
                    placeholder="Username"
                />
                <TextInput
                style={styles.input}
                    placeholder="Username"
                    secureTextEntry='true'
                />
            </View>
            
            <Text style={{textAlign: 'right',marginRight:'50px',marginTop:15}}>
                Quên mật khẩu ?
            </Text>
            <View style={{
                 flex:1,
                 alignItems: 'center',
                 
                 width:'100%'
                
            }}>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={{color:'white'}}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button,{backgroundColor:'gray'}]}
                >
                    <Text style={{color:'white'}}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default LoginPage
const styles = StyleSheet.create({
    container:{
       marginTop:'150px'
    },
    image:{
        flex: 1,
        alignItems: 'center',
        borderRadius:'5px'
        
        
        
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:4,
        width:'70%'
    },
    button:{
        width:200,
        height:80,
        backgroundColor:'blue',
        color:'white',
        fontWeight: 'bold',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        marginTop:10,
        padding:10,
        borderRadius:4
    }
})