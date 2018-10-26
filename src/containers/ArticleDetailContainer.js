import { connect } from 'react-redux'
import ArticleDetail from '../components/ArticleDetail'
import { bindActionCreators } from 'redux';
import { toggleFavorite, isInFavorite } from '../actions'

const mapStateToProps = (state, initialProps) => {
    return {
        product: state.productSelected,
        favorites: state.favorites
        
    }
    //isInFavorite: isInFavorite(state.favorites, initialProps)
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleFavorite     
    },
    dispatch)
}

const ArticleDetailContainer = connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)
export default ArticleDetailContainer
