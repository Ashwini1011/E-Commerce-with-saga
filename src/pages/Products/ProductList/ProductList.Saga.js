import { put, takeLatest } from 'redux-saga/effects'
import {
  getProducts,
  getProductsFailed,
  getProductsSuccess,
} from './ProductList.Slice'
import { getRequest } from '../../../services/http.service'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getProductsAction(action) {
  try {
    yield console.log('Request inside getProducts Saga: ', action)
    const response = yield getRequest('https://dummyjson.com/products')
    console.log({ response })
    if (!response) {
      // Return error
      yield put(getProductsFailed({ err: 'Unable to load products' }))
      return
    }

    yield put(getProductsSuccess({ results: response.products }))
  } catch (e) {
    console.log('Error: ', e)
    yield put(getProductsFailed({ err: 'Unable to load products' }))
  }
}

function* watchGetProducts() {
  yield takeLatest(getProducts, getProductsAction)
}

export default watchGetProducts

//mostly saga files are copied just you need to change the urls
// sare saga files rootSaga me connect hote hai
//sare slices jo ki reducer hote hai wo rootReduce me connect hote hai
//rootReducer and rootSaga store me jake connect hote hai.
// Takelatest ka matlab hai debouncing and takeEvery ka matlab hai throttling.
