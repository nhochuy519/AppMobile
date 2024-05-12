

import { configureStore } from "@reduxjs/toolkit";
import nhietdoSlice from './Reducer/nhietdoSlice'
import colorSlice from './Reducer/rgbSlice'

const store = configureStore({
    reducer:{
        nhietdo:nhietdoSlice,
        color:colorSlice
    }
})


export default store