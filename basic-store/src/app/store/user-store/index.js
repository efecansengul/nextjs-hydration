import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
    return Promise.resolve({id:1, name:"John Doe"});
})

export const userSlice = createSlice({
    name:'user',
    initialState: {
        user: {}
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload;
        })
    }        
})
export default userSlice.reducer;

