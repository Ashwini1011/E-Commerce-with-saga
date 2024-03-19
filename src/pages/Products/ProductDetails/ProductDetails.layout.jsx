import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from './ProductDetails.Slice'

const ProductDetails = () => {
  //useParams to get the productId from the URL parameter
  const { id } = useParams()
  const dispatch = useDispatch()
  const { isLoading, data, err } = useSelector((state) => state.productDetails)

  // useEffect to call a url and get the product details.
  useEffect(() => {
    dispatch(getProductDetails({ id }))
  }, [id, dispatch])

  // if isloading then show please wait else as api gets data, show data
  if (isLoading || err) {
    return <p>Please Wait...</p>
  }

  return (
    <>
      <h1>Details</h1>
      <img src={data?.thumbnail} height={200} width={200} alt='Product Image' />
      <p>Id:{data?.id}</p>
      <p>Name:{data?.title}</p>
      <p>Description:{data?.description}</p>
      <p>Rating:{data?.rating}</p>
    </>
  )
}

export default ProductDetails
