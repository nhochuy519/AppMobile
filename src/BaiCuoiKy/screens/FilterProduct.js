




import { View,Text,StyleSheet,Button,TouchableOpacity , ScrollView,FlatList ,Image ,TextInput ,Dimensions} from "react-native-web";


import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useRef,useEffect } from "react";
import { Entypo } from '@expo/vector-icons';

import ListSearch from "../component/ListSearch";
import ProductShow from "../component/productShow";
import { useState } from "react";
import { gray } from "../colorGlobal";

import instance from "../API";
const data=[
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '4'},
    { key: '5' },
    { key: '6' },
    { key: '7' },
    { key: '8' },
]
function FilterProduct(props) {
    const [value,setValue]=useState('');
    
    const inputRef = useRef(null);
    const [result,setResult]=useState([]);
    const {featured} = props.route.params;

    const handleSearch = () =>{
        props.navigation.navigate('Result',{q:value})

    }
    useEffect(() => {
        
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, []);

      useEffect(()=>{
        instance.get(`/product?q=${value}&limit=5`)
        .then((data)=>{
            setResult(data.data.data.products)
        })
      },[value])
    console.log('re-render')
    return(
        <ScrollView>
                <View>
                    <View style={styles.container}>
                        <View
                            style={{
                                width:40,
                                height:40,
                                borderRadius:999,
                                backgroundColor:gray ,
                                flexDirection:'row',
                                justifyContent:'center',
                                alignItems:'center'

                            }}
                        >
                            <Ionicons 
                                onPress={()=>props.navigation.navigate('MainScreen')}
                            name="chevron-back" size={24} color="black" />
                        </View>
                       
                        <View style={styles.filterContainer}>
                            
                        <Feather name="search" size={24} color="black" 
                        
                        />
                        <TextInput
                        onChangeText={(value)=>{setValue(value)}}
                        value={value}
                        onSubmitEditing = {handleSearch}
                        ref={inputRef}
                        
                            placeholder="Search"
                            style={[{height:'100%',flexGrow:1, outlineColor: 'transparent', 
                            outlineWidth: 0,marginLeft:5}]}
                            
                        
                        />
                        <Feather 
                            onPress={()=>setValue('')}
                        name="x" size={20} color="black" />
                    </View>
                </View>
        <View 
            style={value? {display:'block'}:{display:'none'}}
        >
            <FlatList
                data={result}
                renderItem={({item,index})=>{
                    return  <ListSearch props={props} data={item}/>
                }}
            />
           
            
        </View>

        <View>


        <View style={{
            padding:20
        }}>
            <Text
                style={
                    {
                        fontSize:20,
                        fontWeight:'bold',
                        marginBottom:20
                    }
                }
            >
                Search Suggestions

            </Text>
            <View style={styles.mostPopularContainer}>
                                <FlatList
                                
                                numColumns={2}   
                                data={featured? featured :[]}
                                renderItem={({item,index})=>{
                                    return(
                                        <ProductShow data={item} props={props} medium last={ (index+1)%2===0 ? true:false}/>
                                    )
                                }}/>
                            </View>
            </View>
        </View>
       
        </View>
        </ScrollView>
    
        
       
    )
}

export default FilterProduct;

const styles = StyleSheet.create({
    container:{
        
        flexDirection:'row',    
        width:'100%',
        

       
        gap:10,
        padding:20,
        alignItems:'center'

       
    },

    filterContainer:{
        height:40,
        position:'relative',
        borderRadius:'5px',
        backgroundColor:'rgb(235, 232, 232)',
        flexDirection:'row',  
        alignItems: 'center',
        paddingLeft:10,
        paddingRight:10,
        
        flexGrow:1
        
        
        
    },  
 

})