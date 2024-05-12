
import { StyleSheet, Text, View ,Image} from 'react-native';


function Bai4() {

    return(
        <View style ={styles.container}>
            <View style={styles.wrapper}>
                
                <View style={[styles.radius,styles.red]} styles >
                    Đỏ
                </View>
                <View style={[styles.radius,styles.green]} >
                    Vàng
                </View>
                <View style={[styles.radius,styles.yellow]} >
                    xanh
                </View>
            </View>
           
            
        </View>
    )
}

export  default Bai4;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        
    },
    wrapper :{
        backgroundColor:'black',
        width:200,
        height:600
    },
    radius :{
        borderRadius:999,
        width:'100%', 
        height:600/3
    },
    red : {
        backgroundColor:'red'
      },
      yellow : {
        backgroundColor:"yellow"
      },
      green:{
        backgroundColor:'green'
      }
    
})