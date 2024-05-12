import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,Button,Alert} from 'react-native';





import BaiCK from './src/BaiCuoiKy';




export default function App() {
  return (
    <View style={styles.container}>
      <BaiCK/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // mặc đinh flex column alight item center
   flex:1,
   
    

  },
  
  
});
