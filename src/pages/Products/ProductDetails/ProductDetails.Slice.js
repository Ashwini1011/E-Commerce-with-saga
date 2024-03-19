import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  data: null,
  err: null,
}
const productDetailsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductDetails: (state) => {
      state.isLoading = true
    },
    getProductDetailsSuccess: (state, actions) => {
      state.isLoading = false
      state.err = null
      state.data = actions.payload.results
    },
    getProductDetailsFailed: (state, actions) => {
      state.isLoading = false
      state.err = actions.payload.err
      state.data = {}
    },
  },
})

export const {
  getProductDetails,
  getProductDetailsSuccess,
  getProductDetailsFailed,
} = productDetailsSlice.actions

export default productDetailsSlice.reducer
