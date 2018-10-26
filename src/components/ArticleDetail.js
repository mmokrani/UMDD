import React from 'react'
//import {View, Text } from 'react-native'
import { isInFavorite } from '../actions'

const ArticleDetail = ({product, favorites, toggleFavorite}) => {
    console.log("ProductDetail")
    
    const  detail = renderDetail(product)
    const isInFav = isInFavorite(favorites, product.id) 

    return (<div>
        <div><b>Détail du produit</b></div>
        <div>{detail}</div>
        <div>{renderFavorite(product, isInFav, toggleFavorite)}</div>
    </div>)
   // return (<View><Text>{this.state.id} : {this.state.name}</Text></View>);
  }
  
  const renderFavorite =(product, isInFav, toggleFavorite) => {
    const label = (!isInFav) ? 'Ajouter aux favoris' : 'Supprimer des favoris'
    if(product.id) return <div><a href='#' onClick={() => toggleFavorite(product)}>{label}</a></div>
    else return ''
  }
  const renderDetail =(product) => {
    if(product.id)  return <div>{product.id} : {product.name}</div>
    else return ''
  }

export default ArticleDetail
