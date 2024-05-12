

import { View,Text,StyleSheet,Button ,Image, TextInput,TouchableOpacity,SafeAreaView,ScrollView } from "react-native-web";

import { AntDesign } from '@expo/vector-icons';
function Search() {

    return(
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                style={styles.input}
                    placeholder="Tìm Kiếm"
                />
                <AntDesign style={styles.icon} name="search1" size={24} color="black" />
            </View>
           
            <View style={{
                flexDirection: 'row',
                justifyContent:'center',
                gap:'10px',
                
            }} >
                <Image
                    style={{width: 80, height: 80,borderRadius:'4px'}}
                source={{
                        uri: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/lo-dien-loat-trang-phuc-tien-hiep-moi-voi-tao-hinh-cuc-chat.jpg'}
                        }
                
                    />
                    <Image
                    style={{width: 80, height: 80,borderRadius:'4px'}}
                source={{
                        uri: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/lo-dien-loat-trang-phuc-tien-hiep-moi-voi-tao-hinh-cuc-chat.jpg'}
                        }
                
                    />
                    <Image
                   style={{width: 80, height: 80,borderRadius:'4px'}}
                source={{
                        uri: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/lo-dien-loat-trang-phuc-tien-hiep-moi-voi-tao-hinh-cuc-chat.jpg'}
                        }
                
                    />
                    <Image
                    style={{width: 80, height: 80,borderRadius:'4px'}}
                source={{
                        uri: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/lo-dien-loat-trang-phuc-tien-hiep-moi-voi-tao-hinh-cuc-chat.jpg'}
                        }
                
                    />
                    
            </View>

            <View

            >
        
            </View>
            <SafeAreaView 
                
            >
                <ScrollView 
                    horizontal={true}
                style={styles.scrollView}>
                <View style={styles.image}>
                    <Image
                        style={{width: 100, height: 100}}
                    source={{
                            uri: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/lo-dien-loat-trang-phuc-tien-hiep-moi-voi-tao-hinh-cuc-chat.jpg'}
                            }
                    
                        />
                </View>
                <View style={styles.image}>
                    <Image
                        style={{width: 100, height: 100}}
                    source={{
                            uri: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/lo-dien-loat-trang-phuc-tien-hiep-moi-voi-tao-hinh-cuc-chat.jpg'}
                            }
                    
                        />
                </View>
                <View style={styles.image}>
                    <Image
                        style={{width: 100, height: 100}}
                    source={{
                            uri: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/lo-dien-loat-trang-phuc-tien-hiep-moi-voi-tao-hinh-cuc-chat.jpg'}
                            }
                    
                        />
                </View>
                <View style={styles.image}>
                    <Image
                        style={{width: 100, height: 100}}
                    source={{
                            uri: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/lo-dien-loat-trang-phuc-tien-hiep-moi-voi-tao-hinh-cuc-chat.jpg'}
                            }
                    
                        />
                </View>
                <View style={styles.image}>
                    <Image
                        style={{width: 100, height: 100}}
                    source={{
                            uri: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/lo-dien-loat-trang-phuc-tien-hiep-moi-voi-tao-hinh-cuc-chat.jpg'}
                            }
                    
                        />
                </View>
                <View style={styles.image}>
                    <Image
                        style={{width: 100, height: 100}}
                    source={{
                            uri: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/lo-dien-loat-trang-phuc-tien-hiep-moi-voi-tao-hinh-cuc-chat.jpg'}
                            }
                    
                        />
                </View>
                <View style={styles.image}>
                    <Image
                        style={{width: 100, height: 100}}
                    source={{
                            uri: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/08/lo-dien-loat-trang-phuc-tien-hiep-moi-voi-tao-hinh-cuc-chat.jpg'}
                            }
                    
                        />
                </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    container :{
        flex: 1,
    },
    input:{
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:4,
        paddingLeft:'10px',
        fontSize:'20px',
        marginTop:'0',
        marginBottom:'0'
        
    },
    searchContainer:{
        position:'relative',
        
        marginTop:'30px',
        marginBottom:'30px'
       

    },
    icon:{
        position:'absolute',
        right:'30px',
        top:'30%'
    },
    image:{
        marginRight:'10px'
    },
    scrollView: {
        backgroundColor: 'pink',
        marginTop:10
      },
      ScrollContainer :{
        marginTop:'10px'
      }


})