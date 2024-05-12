import { ImageBackground,StyleSheet ,Text,View} from "react-native"
import React from 'react';
const image = {uri: 'https://i.pinimg.com/originals/0d/9c/d4/0d9cd4d81a883d84682594e30a9dccf4.jpg'};

const ImgBG = () => (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
  
  const styles = StyleSheet.create({
    container: {
      flex:1
    },
    image: {
       flex:1
    },
    text: {
        flex:1,
        alignItems:'center',
        color:'white',
        textAlign:"center",
        lineHeight:200

    }
  });

export default ImgBG