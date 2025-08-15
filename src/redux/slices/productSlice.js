import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//action returns promise
export const fetchProducts = createAsyncThunk("products/fetchProducts",async()=>{
    const result = await axios.get("https://dummyjson.com/products")
    // console.log(result);
    sessionStorage.setItem("allProducts",JSON.stringify(result.data.products))
    return result.data.products

})


const productSlice = createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        dupAllProducts:[],
        loading:false,
        errorMsg:""
    },
    reducers:{
        searchProduct : (state,actionByHeader)=>{
            state.allProducts = state.dupAllProducts.filter(item=>item.title.toLowerCase().includes(actionByHeader.payload))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
            state.allProducts = apiResult.payload
            state.dupAllProducts =apiResult.payload
            state.loading = false
            state.errorMsg = ""
        })
        builder.addCase(fetchProducts.pending,(state,apiResult)=>{
            state.allProducts = []
            state.dupAllProducts =[]
            state.loading = true
            state.errorMsg = ""
        })
        builder.addCase(fetchProducts.rejected,(state,apiResult)=>{
            state.allProducts = []
            state.dupAllProducts =[]
            state.loading = false
            state.errorMsg = "API Call Failed"
        })
    }

})

export const {searchProduct} = productSlice.actions
export default productSlice.reducer