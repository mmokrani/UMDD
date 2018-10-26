import { connect } from 'react-redux'
import ArticleListing from '../components/ArticleListing'
import { fetchProductsForCategory, fetchProduct, toggleFavorite } from "../actions";
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => ({
        categories: state.categories ,
        products: state.products,
        favorites: state.favorites
})

const mapDispatchToProps = ( dispatch ) => {
    return bindActionCreators(
        { 
            fetchProductsForCategory,
            fetchProduct,
            toggleFavorite
        }, 
        dispatch );
}


const ArticleListingContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleListing)
export default ArticleListingContainer