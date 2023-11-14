// const authReducer=(state=false,action)=>{
//     switch(action.type){
//         case "LOG_IN":
//             return true;
//         case "LOG_OUT":
//             return false;
//         default:
//             return state
//     }
// }


// export default authReducer


import {createSlice} from '@reduxjs/toolkit'

export const loginApp=createSlice({
    name:'login',
    initialState:{
        token:false
    },
    reducers:{
        login:(state)=>{
            state.token=true
        },
        logout:(state)=>{
            state.token=false
        }

    }
})

export const {login,logout}=loginApp.actions
export default loginApp.reducer
