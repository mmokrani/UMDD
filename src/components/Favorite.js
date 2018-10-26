import React from 'react'
//import {View, Text } from 'react-native'
import { isInFavorite } from '../actions'

class Favorite extends React.Component {
  render() {
    //return (<View><Text>Favorite</Text></View>);
    return (
      <div>
        <div><b>Favoris</b></div>
        <div>{this.getListingFavorites()}</div>
      </div>)
  }
  getListingFavorites(){
    const {favorites, toggleFavorite} = this.props
    if(favorites) {
      console.log("favorites ++++++++++++++")
      console.log(favorites)
      return favorites.map(item => <div key={item.id}>{item.name}&nbsp;&nbsp;{this.renderFavorite(item, favorites, toggleFavorite)}</div>)
    }
    else {
      return ''
    }
  }
  renderFavorite =(product, favorites, toggleFavorite) => {
    const isInFav = isInFavorite(favorites, product.id) 
    const label = (!isInFav) ? 'Ajouter aux favoris' : 'Supprimer des favoris'
    if(product.id) return <a href='#' onClick={() => toggleFavorite(product)}>{label}</a>
    else return ''
  }
}

export default Favorite
