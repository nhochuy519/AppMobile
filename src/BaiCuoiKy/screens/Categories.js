





import { View,Image, FlatList ,TextInput,StyleSheet,Text} from "react-native-web"
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";

import ShopByCg from "../component/ShopByCg";
import ProductDetail from "./ProductsSc";

const Type =[
  {
    name:'Áo Thun',
    image:'https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/467845/item/vngoods_37_467845.jpg?width=320'
  },
  {
    name:'Áo Khoác',
    image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/454513/sub/goods_454513_sub14.jpg?width=750'
  },
  {
    name:'Quần',
    image:'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/465163/sub/goods_465163_sub24.jpg?width=750'
  },

]
function Categories(props) {

    const Stack = createStackNavigator();
    return(

        <Stack.Navigator
        screenOptions={{
            cardStyle: { backgroundColor: 'white' },
            gestureEnabled: true,
              gestureDirection: 'horizontal',
              cardStyleInterpolator: ({ current, layouts }) => {
                return {
                  cardStyle: {
                    transform: [
                      {
                        translateX: current.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [layouts.screen.width, 0],
                        }),
                      },
                    ],
                  },
                };
              },
            }}
        >
           
               <Stack.Screen name='FavoriteDetail' component={
                    ()=>{
                        return(
                             <View style={styles.container}>
                                    <Text
                                        style={
                                            {
                                                fontSize:20,
                                                fontWeight:'bold',
                                                marginBottom:20,
                                                marginTop:20
                                            }
                                        }
                                    >
                                        Shop by Categories
                                    </Text>
                                    <FlatList
                                      data={Type}
                                      renderItem={({item,index})=>{
                                        return <ShopByCg props={props} data={item}/>
                                    }}
                                    />
                                    
                                    
                                </View>
                        )
                    }

               } options={{headerShown:false}}/>
               <Stack.Screen name='ProductDetail' component={ProductDetail}/>
               
       </Stack.Navigator> 

       
        
       
    )
}

export default Categories;

const styles = StyleSheet.create({
    container:{
        padding:10,
        height:'100%',
        width:'100%',
        backgroundColor:'white'
    }
})