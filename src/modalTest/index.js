
import { Modal,StyleSheet ,Text,View} from "react-native"
import { useState } from "react";




const TestModal = () =>{
    const [state,setState] = useState(false);
    console.log(state)
    return(
        <View>
            <Text
                onPress={()=>{
                    setState(!state)
                }}
            >
                Bấm vào đây
            </Text>
            <Modal
                   animationType="slide"
                   visible={state}
                   transparent={true}
                   

            >
                <View style ={style.modalBg}>
                    <Text 
                        style ={state? {color:'white'}:{color:'black'}}
                    onPress={()=>{
                        setState(!state)
                    }}
                    >
                    Bấm vào đây
                    </Text>
                    
                </View>
                
            </Modal>
            
        </View>
    )
    
}

export default TestModal

const style = StyleSheet.create({
    container :{
        flex:1
    },
    modalBg:{
        backgroundColor: 'lightblue',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }


})