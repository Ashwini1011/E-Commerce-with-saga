import { put, takeLatest } from 'redux-saga/effects'
import {
  getProductDetails,
  getProductDetailsSuccess,
  getProductDetailsFailed,
} from './ProductDetails.Slice'
import { getRequest } from '../../../services/http.service'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getProductDetailAction(action) {
  console.log('ACTIONS', action)
  try {
    yield console.log('Request inside getProducts Saga: ', action)
    const response = yield getRequest(
      `https://dummyjson.com/products/${action.payload.id}`
    )
    console.log({ response })
    if (!response) {
      // Return error
      yield put(getProductDetailsFailed({ err: 'Unable to load products' }))
      return
    }

    yield put(getProductDetailsSuccess({ results: response }))
  } catch (e) {
    console.log('Error: ', e)
    yield put(getProductDetailsFailed({ err: 'Unable to load products' }))
  }
}

function* watchGetProductDetails() {
  yield takeLatest(getProductDetails, getProductDetailAction)
}

export default watchGetProductDetails

//mostly saga files are copied just you need to change the urls
// sare saga files rootSaga me connect hote hai
//sare slices jo ki reducer hote hai wo rootReduce me connect hote hai
//rootReducer and rootSaga store me jake connect hote hai.
// Takelatest ka matlab hai debouncing and takeEvery ka matlab hai throttling.
// har watchFunction ka nam different hota hai.
