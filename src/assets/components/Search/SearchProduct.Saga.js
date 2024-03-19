// sabse pehale component tayar kare
// slice me action tayar karo
// saga me operation karo
// saga and slice ko main rootReducer and rootSaga se connect karo
// searchSaga.js
import { call, put, takeLatest } from 'redux-saga/effects'
import {
  searchStart,
  searchSuccess,
  searchFailure,
} from './SearchProduct.Slice'

function* performSearch(action) {
  try {
    const response = yield call(
      fetch,
      `https://dummyjson.com/products/search?q=${action.payload}`
    )
    console.log('This is searchSaga action Payload', action)
    const data = yield response.json()
    yield put(searchSuccess(data))
  } catch (error) {
    yield put(searchFailure(error.message))
  }
}

function* watchSearchSaga() {
  yield takeLatest(searchStart.type, performSearch)
}

export default watchSearchSaga
