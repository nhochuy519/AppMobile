import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
  } from 'react-native';

function TestBtn (){
    return(
        <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
    )
}

export default TestBtn;