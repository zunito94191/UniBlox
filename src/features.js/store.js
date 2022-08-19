import {createSlice} from "reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{value:{name:"ds"}},
    reducers:{
        addTocart:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {addTocart} = cartSlice.actions;
export default cartSlice.reducer;
