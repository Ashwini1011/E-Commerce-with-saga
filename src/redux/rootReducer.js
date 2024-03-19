// sare reducer is file ke andar rahenge
import productListReducer from '../pages/Products/ProductList/ProductList.Slice'
import productDetailsReducer from '../pages/Products/ProductDetails/ProductDetails.Slice'
import searchReducer from '../assets/components/Search/SearchProduct.Slice'
const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  search: searchReducer,
}
export default reducer
