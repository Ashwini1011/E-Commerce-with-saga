import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchResult: [],
  isLoading: false,
  error: null,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchStart: (state) => {
      state.isLoading = true
      state.error = false
    },
    searchSuccess: (state, action) => {
      state.isLoading = false
      state.searchResult = action.payload
      console.log('this is payload of search', action.payload)
    },
    searchFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const { searchStart, searchSuccess, searchFailure } = searchSlice.actions
export default searchSlice.reducer
