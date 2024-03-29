import {createSlice} from '@reduxjs/toolkit';


export const basketSlice = createSlice({
    name:'basket',
    initialState: {
        basket: [],
    },
    reducers:{
        addToBasket(state, action){
            state.basket = [...state.basket, action.payload] 
        }
    },     
})
export const {addToBasket} = basketSlice.actions;
export default basketSlice.reducer;

