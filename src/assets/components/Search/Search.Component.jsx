import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchStart } from './SearchProduct.Slice'

const Search = () => {
  // -------------------------------------useState variable-------------------------
  const [searchProduct, setSearchProduct] = useState('') //search product variable
  // -------------------------------dispatch and function--------------------------
  const dispatch = useDispatch()

  //--------------------------------------Search functionality ----------------------
  const handleSearch = (e) => {
    const { value } = e.target
    setSearchProduct(value)
    dispatch(searchStart())
  }

  return (
    <>
      <SearchContainer>
        <SearchBar
          type='text'
          name='searchProduct'
          value={searchProduct}
          onChange={handleSearch}
          placeholder='Search your products here'
          className='search_bar'
        />
      </SearchContainer>
    </>
  )
}

export default Search

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const SearchBar = styled.input`
  display: flex;
  justify-content: center;
  width: 70%;
  height: 40px;
  margin: 20px;
  border: 1px solid rgb(232, 229, 229);
  box-shadow: rgba(124, 124, 131, 0.2) 0px 7px 15px 0px;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  outline: none;
`
