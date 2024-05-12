



import { StyleSheet ,Text,View,Button,TouchableOpacity} from "react-native";


import {useDispatch} from 'react-redux';
const NutBam = ({callback,title})=>{
    console.log(title)
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={()=>{dispatch(callback[0]())}}
                style={
                    styles.button
                }
            >
                <Text style={{
                    fontSize:16
                }}>
                    {title[0]}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{dispatch(callback[1]())}}
                style={
                    styles.button
                }
            >
                <Text
                    style={{
                        fontSize:16
                    }}
                >
                    {title[1]}
                </Text>
            </TouchableOpacity>
        </View>
    )
}


export default NutBam;

const styles = StyleSheet.create({
   container :{
        width:'100%',
        height:'fit-content',
        borderWidth:1,
        borderColor:'black',
        justifyContent:'center',
        alignItems:'center',
        gap:10,
        paddingTop:20,
        paddingBottom:20,
        borderRadius:5
     
   },
    button :{
        borderWidth:2,
        borderColor:'black',
        width:'40%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:'5px',
        fontSize:16,
        fontWeight:'bold'
        
       
    }

})