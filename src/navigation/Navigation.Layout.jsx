import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ProductList from '../pages/Products/ProductList/ProductList.layout'
import ProductDetails from '../pages/Products/ProductDetails/ProductDetails.layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductList />,
  },
  {
    path: '/:id',
    element: <ProductDetails />,
  },
])

const Navigation = () => {
  return <RouterProvider router={router} />
}

export default Navigation
