import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export  const getData = createAsyncThunk("Products/Data",
    async () =>{
        return await fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
    }
)
 const  productSlice = createSlice({
    name : "products",
    initialState:{
        products : [],
        loading: true,
    },
    extraReducers:{
        [getData.fulfilled]:(state ,{payload})=>{
            state.products = payload;
            state.loading = false;
        }
    }
})
export default productSlice.reducer;