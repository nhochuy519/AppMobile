







import { View,Picker,Dimensions,Text,StyleSheet,Button,TouchableOpacity , ScrollView,FlatList ,Image ,TextInput, Modal } from "react-native-web";

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useState,useRef,useEffect } from "react";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';


import ProductShow from "../component/productShow";
import { gray, inputColor, mainColor } from "../colorGlobal";

import instance from "../API";


import { AntDesign } from '@expo/vector-icons';
const screenHeight = Dimensions.get('window').height;



const dataFilter =[
    
    'Áo khoác',
    'Áo Thun',
    'Áo UT',

]

const price =[
    'Thấp đến cao',
    'Cao đến thấp'
]
const Gender= [
    'Men',
    'Woman',
    'kid'
]




function Result(props) {
    const [value,setValue]=useState('');
    const [popup,setPopup]=useState(false);
    const [filter,setFilter]=useState([]);// filter sortby
    const [featured,setFeatured]=useState([]);
    const [filterRs,setFilterRs]=useState([])
    const {q}=props.route.params;
    
    const checkBtt = (item,index)=>{
                                          
        // const itemIndex = filter.indexOf(item);
        // if (itemIndex !== -1) {
        //     setFilter(prev => {
        //         let arr = [...prev];
        //         arr.splice(itemIndex, 1);
        //         return arr;
        //     });
        // } else {
        //     setFilter(prev => [...prev, item]);
        // }
            
        

    
    }
   
    useEffect(()=>{
        let query =`product?q=${q}`
        
        if(filter === 'Thấp đến cao') {
             query = `product?q=${q}&price=high`
             
        }
        else if(filter === 'Cao đến thấp') {
            query = `product?q=${q}&price=low`
        }


        console.log(query)
        instance.get(query)
        .then((data)=>{
            console.log(data);
            const apiRs  =Object.values(data.data.data.products);
            const Featured= apiRs.filter((item)=>{
                return item.price <= 70000
            })
            setFeatured(Featured)
            setFilterRs(data.data.data.products);
            
        })
    },[filter])

    



    return(
        <ScrollView>
            <View style={styles.container}>
                    <View style={styles.searchWrapper}>
                        <Ionicons 
                             onPress={()=>props.navigation.navigate('MainScreen')}
                        name="chevron-back" size={24} color="black" />
                        <View style={styles.filterContainer}>
                            
                        <Feather name="search" size={24} color="black" 
                        
                        />
                        <TextInput
                        value={q}
                        onChangeText={(value)=>{setValue(value)}}
                        onFocus={()=>
                        
                            props.navigation.navigate('FilterProduct',{featured,})
                         }
                        
                            placeholder="Search"
                            style={[{height:'100%',flexGrow:1, outlineColor: 'transparent', // Thiết lập màu của outline thành transparent
                            outlineWidth: 0,marginLeft:5}]}
                            
                        
                        />
                       
                    </View>
                  
                </View>
                <View style={
                            {
                                flexDirection:'row',
                                gap:8,
                                justifyContent:'space-between',
                                marginTop:25
                            }
                        }>
                            <Text
                                style={{
                                    fontSize:18,
                                    fontWeight:'bold'
                                }}
                            >
                                Explore All Product
                            </Text>
                            <TouchableOpacity
                                  onPress={() => setPopup(!popup)}
                                style={
                                    {
                                        flexDirection:'row',
                                        alignItems:'center',
                                        height:30,
                                      
                                        borderRadius:20,
                                        backgroundColor:mainColor,
                                        padding:5,
                                        paddingLeft:10,
                                        gap:2
                                    }
                                }
                            >
                                <AntDesign name="filter" size={24} color="white" />
                                <MaterialIcons name="keyboard-arrow-down" size={20} color="white" />
                            </TouchableOpacity>
                            
                            
                           
                        </View>
                <View style={{
                    marginTop:15
                }}>
                        
                        

                        <Text
                            style={{
                                marginBottom:30
                            }}
                        >({filterRs.length} results)
                        </Text>
                        
                </View>
                <View >
                                <FlatList
                                
                                numColumns={2}   
                                data={filterRs}
                                renderItem={({item,index})=>{
                                    return(
                                        <ProductShow data={item} key={index} props={props} medium last={ (index+1)%2===0 ? true:false }/>
                                    )
                                }}/>
                </View>
                
                <Modal
                visible={popup}
                transparent={true}
            >
                <View style={styles.modalView}>
                    <View style={styles.filterView}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 17 }}
                                    onPress={()=>{
                                        setFilter([])
                                    }}
                                >Clear</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Sort by</Text>
                            <Feather onPress={() => setPopup(!popup)} name="x" size={23} color="black" />
                        </View>
                        <ScrollView style={{ flex: 1 }}> {/* Bọc ScrollView ở đây */}
                            <FlatList
                                data={price}
                                renderItem={({ item, index }) => {
                                    //backgroundColor:mainColor,
                                    // const checkFt = filter.includes(item);
                                    
                                    return (
                                        <TouchableOpacity style={[styles.bttFilter,filter===item?{ backgroundColor:mainColor}:{ backgroundColor:gray}]}

                                            onPress={()=>{
                                                setFilter(item)
                                            }}
                                        >
                                            <Text style={[{  fontSize: 17, fontWeight: 'bold' },filter===item?{color:'white'}:{color:'black'}]}>{item}</Text>
                                            <Feather name="check" size={24} color="white" />
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </ScrollView>
                    </View>
                </View>
            </Modal>
            </View>
            
                
        </ScrollView>
    
        
       
    )
}

export default Result;

const styles = StyleSheet.create({
    container:{
        padding: 20,
        position:'relative'
    },
    searchWrapper:{
        flexDirection:'row',    
        width:'100%',
        

       
        gap:10,
        
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
    detailSelect:{
        position:'fixed',
        height:screenHeight/2,
        backgroundColor:'white',
        bottom:0,
    },
    modalView:{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height:screenHeight,
        width:'100%',
        position:'relative',
        
    },
    filterView:{
        position:'absolute',
        width:'100%',
        height:screenHeight/2,
        bottom:0,
        backgroundColor:'white',
        padding:20,
        borderTopRightRadius:20,
        borderTopLeftRadius:20
        
    },
    bttFilter:{
        
        width:'100%',
        height:60,
        borderRadius:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:20,
       
        marginBottom:20

    }
   
})