import * as types from '../constants'
import categories from '../api/categories'
import products from '../api/products'

export const toggleFavorite = (product) => ({
  type: types.TOGGLE_FAVORITE,
  product: product
})

export const fetchCategories = () => (dispatch, getState) => {
  categories.all()
  .then(res => {
    console.log(res)
    dispatch({
        type: types.FETCH_CATEGORIES_SUCCEEDED,
        categories: res
    })
  })
  .catch(err => {
    dispatch({
      type: types.FETCH_CATEGORIES_FAILED,
      error: err
    })
  })
}


export const fetchProductsForCategory = (id) => (dispatch, getState) => {
    console.log(`productsForCategory ${id}`)
    //this.setState({productsList: ''})
    products
      .getProductByCategoryId(id)
      .then( res => {
        console.log(res)
        dispatch({
          type: types.FETCH_PRODUCTS_CATEGORY_SUCCEEDED,
          products: res
        })
      })
      .catch(err => {
        console.log("Erreur : ");
        dispatch({
          type: types.FETCH_PRODUCTS_CATEGORY_FAILED,
          error: err
        })
      })
}

export const fetchProduct = (id) => (dispatch, getState) => {
  console.log(`fetchProduct ${id}`)
    products.one(id)
      .then(result =>{
        console.log(result)
        dispatch({
          type: types.FETCH_PRODUCT_SUCCEEDED,
          product: result
        })
      })
      .catch(err => {
        console.log("Erreur : ");
        dispatch({
          type: types.FETCH_PRODUCT_FAILED,
          error: err
        })
      })
 
}

export const isInFavorite = (favorites, idProduct) => {
  console.log("isInFavorite")
  console.log("favorites")
  console.log(favorites)
  console.log("idProduct")
  console.log(idProduct)
  if(!idProduct) return false
  const idx = favorites.findIndex(item => item.id === idProduct)
  console.log("idx")
  console.log(idx)
  return (favorites.findIndex(item => item.id === idProduct) !== -1)
}