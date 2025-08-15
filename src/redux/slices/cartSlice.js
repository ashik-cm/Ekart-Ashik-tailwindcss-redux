import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartItems",  // The slice name (used in Redux actions and state)
    initialState: [], // Initial cart is an empty array
    reducers: {
        // action name : reducer function
        addToCart: (state, actionFromComponent) => {
            // Find if the product already exists in the cart
            const existingProduct = state.find(item => item.id == actionFromComponent.payload.id)
            if (existingProduct) {
                // If it exists, increase its quantity
                existingProduct.quantity++
                // Recalculate total price for that product
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                // Get all products except the updated one
                const remainingProduct = state.filter(item => item.id != existingProduct.id)
                // Replace the state with remaining products + updated product
                state = { ...remainingProduct, existingProduct }
            } else {
                // If it doesn't exist, add it with quantity 1 and initial totalPrice
                state.push({ ...actionFromComponent.payload, quantity: 1, totalPrice: actionFromComponent.payload.price })
            }
        },
        // Reducer 2: Increase quantity of a product in cart
        incrementQuantity: (state, actionByCart) => {
            // Find the product by id
            const existingProduct = state.find(item => item.id == actionByCart.payload)
            // Increase the quantity by 1
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProduct = state.filter(item => item.id != existingProduct.id)
            state = [...remainingProduct, existingProduct]
        },
        removeCartItem :(state,actionByCart)=>{
            return state.filter(item=>item.id!=actionByCart.payload)
        },
        decrementQuantity :(state,actionByCart) =>{
             // Find the product by id
            const existingProduct = state.find(item => item.id == actionByCart.payload)
            // Increase the quantity by 1
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProduct = state.filter(item => item.id != existingProduct.id)
            state = [...remainingProduct, existingProduct]
        },
        emptyCart : (state) =>{
            return state =[]
        }
    }
})
// Exporting the action creators for dispatch in components
export const { addToCart , incrementQuantity , removeCartItem , decrementQuantity ,emptyCart} = cartSlice.actions
// Exporting the reducer function to be used in Redux store
export default cartSlice.reducer