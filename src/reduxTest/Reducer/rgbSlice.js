import { createSlice } from "@reduxjs/toolkit";



const colorSlice = createSlice({
    name:'color',
    initialState:{
        value:{
            red:255,
            blue:255,
            green:255,
        }
    },
    reducers:{
        tangRed:state =>{
            if(state.value.red >= 255) 
            {
                state.value.red =0;
            }
            else state.value.red +=1;
            
        },
        giamRed:state =>{
            if(state.value.red <= 0) {
                 state.value.red =255
            }
            else state.value.red -=1;
            
        },
        tangBlue:state =>{
            if(state.value.blue >= 255) 
            {
               state.value.blue =0;
            }
            else state.value.blue +=1;
        },
        giamBlue:state =>{
            if(state.value.blue <= 0) {
                 state.value.blue =255
            }
            else state.value.blue -=1;
        },
        tangGreen:state =>{
            if(state.value.green>= 255) 
            {
                 state.value.green=0;
            }
            else state.value.green +=1;
        },
        giamGreen:state =>{
            if(state.value.green <= 0) {
                return state.value.green=255
            }
            else state.value.green-=1;
        }
    }

})


export const {tangRed,giamRed,tangBlue,giamBlue,tangGreen,giamGreen}= colorSlice.actions
export default colorSlice.reducer;