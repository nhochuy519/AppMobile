

import { Provider } from 'react-redux'
import store from "./store";
import { StyleSheet ,Text,View} from "react-native";

import ManHinhChinh from "./ManHinhChinh";
const WrapperRedux = () =>{
    return(
        <Provider store={store}>
            <ManHinhChinh/>
        </Provider>
    )

}

export default WrapperRedux