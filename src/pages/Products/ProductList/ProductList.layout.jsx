import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './ProductList.Slice'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Search from '../../../assets/components/Search/Search.Component'
const ProductList = () => {
  //selector and dispatch
  const { isLoading, data } = useSelector((state) => state.productList) // selector se data component me aayega
  const dispatch = useDispatch() // dispatch se components se jayega

  // UseEffect
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  if (isLoading) {
    return <p>Please wait</p>
  }

  return (
    <>
      <Search />
      <h1>My Products</h1>

      <ProductContainer>
        {Array.isArray(data) &&
          data.map((item) => {
            const productImage =
              item.images && item.images.length > 0 ? item.images[0] : '' //// Choose the first image from the images array, you can modify this logic as per your requirement
            return (
              <ProductCard key={item.id}>
                <ProductLink to={`/${item.id}`}>
                  <ImageMainDiv>
                    <ProductCardImage src={productImage} alt={item.title} />
                  </ImageMainDiv>
                  <ProductCardTitle>{item.title}</ProductCardTitle>
                  <div className='price'>
                    Rs<span> </span>
                    {item.price}
                  </div>
                </ProductLink>
              </ProductCard>
            )
          })}
      </ProductContainer>
    </>
  )
}

export default ProductList

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  background-color: #eee;
  padding: 12px;
`
const ProductCard = styled.div`
  width: 200px;
  height: 300px;
  background-color: #fff;
  padding: 12px;
`
const ProductLink = styled(Link)`
  text-decoration: none;
`
const ProductCardTitle = styled.p`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;

  color: #111111;
`

const ProductCardImage = styled.img`
  width: auto;
  height: 125px;
  max-width: 100%;
  object-fit: cover;
`
const ImageMainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
`
//  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
