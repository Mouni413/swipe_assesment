import { createSlice } from "@reduxjs/toolkit";
const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    // deleteProduct: (state, action) => {
    //   return state.filter((product) => product.id !== action.payload);
    // },
    // updateProduct: (state, action) => {
    //   const index = state.findIndex(
    //     (product) =>
    //       product.invoiceId === action.payload.invoiceId &&
    //       product.itemId === action.payload.itemId
    //   );
    //   if (index !== -1) {
    //     state[index] = action.payload.updatedInfo;
    //   }
    // },
  },
});

export const { addProduct } = productsSlice.actions;

export const selectProductList = (state) => state.products;

export default productsSlice.reducer;
