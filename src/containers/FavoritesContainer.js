import { connect } from 'react-redux'
import Favorites from '../components/Favorite'
import { bindActionCreators } from 'redux';
import { toggleFavorite } from '../actions'

const mapToStateToProps = (state) => ({
    favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleFavorite
    },
    dispatch)
}

const FavoritesContainer = connect(mapToStateToProps, mapDispatchToProps)(Favorites)
export default FavoritesContainer