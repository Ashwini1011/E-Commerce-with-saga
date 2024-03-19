import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  data: null,
  err: null,
}
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state) => {
      state.isLoading = true
    },
    getProductsSuccess: (state, actions) => {
      state.isLoading = false
      state.err = null
      state.data = actions.payload.results
    },
    getProductsFailed: (state, actions) => {
      state.isLoading = false
      state.err = actions.payload.err
      state.data = []
    },
  },
})

export const { getProducts, getProductsSuccess, getProductsFailed } =
  productSlice.actions

export default productSlice.reducer
