import * as types from '../constants'
import { combineReducers } from 'redux'

const categories = (state=[], action) => {
    switch (action.type){
        case types.FETCH_CATEGORIES_SUCCEEDED:
            return action.categories
        default:
            return state
    }
}

const products = (state=[], action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS_CATEGORY_SUCCEEDED:
            return action.products
        default:
            return state    
    }
}

const productSelected = (state=[], action) => {
    switch(action.type){
        case types.FETCH_PRODUCT_SUCCEEDED:
            return action.product
        default:
            return state    
    }
}
const favorites = (state=[], action) => {
    switch(action.type) {
        case types.TOGGLE_FAVORITE:
            console.log("------------------------reducer-----------------------")
            console.log(state)
            const favoriteIndex = state.findIndex(item => item.id === action.product.id)
            if(favoriteIndex === -1) {
                console.log("case add")
                console.log([...state, action.product])
                return [...state, action.product]
            }
            else {
                console.log("case remove")
                console.log(state.filter(item => item.id !== action.product.id))
                return state.filter(item => item.id !== action.product.id)
            }
        default:
            return state
    }
}

const rootReducers = combineReducers({ categories, products,productSelected, favorites})
export default rootReducers