import { all, fork } from 'redux-saga/effects'
import watchGetProducts from '../pages/Products/ProductList/ProductList.Saga'
import watchGetProductDetails from '../pages/Products/ProductDetails/ProductDetails.Saga'
import watchSearchSaga from '../assets/components/Search/SearchProduct.Saga'
export default function* rootSaga() {
  yield all([
    fork(watchGetProducts),
    fork(watchGetProductDetails),
    fork(watchSearchSaga),
  ])
}
