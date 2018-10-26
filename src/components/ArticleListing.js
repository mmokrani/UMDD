import React from 'react'
//import {View, Text, FlatList, ListView } from 'react-native'
import ArticleItem from './ArticleItem';
import CategoryItem from './CategoryItem'
import { isInFavorite } from '../actions'

const ArticleListing = ({categories, products, favorites, fetchProductsForCategory, fetchProduct, toggleFavorite}) => {
    console.log("render Categories")
    //this.props.navigate('Article', {key: elmt.id})
    const categoriesList = (categories) ? categories.map(elmt => 
      
        <CategoryItem 
          key={elmt.id} 
          category={elmt} 
          handleClick={() => fetchProductsForCategory(elmt.id)}/>
      ) : ''
      
    const productsList   = (products) ?  products.map(elmt => 
      <div key={elmt.id} >
        <ArticleItem 
          
          article={elmt} 
          handleClick={() => fetchProduct(elmt.id)}/>&nbsp;&nbsp;&nbsp;
          {renderFavorite(elmt, favorites, toggleFavorite)}
        </div> 
        ) : ''

  // handleClick={() => this.props.navigate('Article', {key: elmt.id})}/>)  : ''
    return (
      <div>
          <div><b>Catégories</b></div>
         {categoriesList}
         <br /><br /><br />
         <div><b>Produits</b></div>
         {productsList}
      </div>);
  }
 /* render_Native() {
    return (
      <View>
          <ListView
            dataSource={ds.cloneWithRows(this.state.categories)}
            renderRow ={(row, j, k) => <Text index={k}></Text>}
          />
          <FlatList
              data={this.state.products}
              keyExtractor={({item}) => item.id.toString()}
              renderItem={({item}) => <ArticleItem article={item}/>}
              onEndReachedTheshold={0.5}
              onEndreached={() => {console.log("onEndreached")}}
            />
        </View>);
  }*/
  const renderFavorite =(product, favorites, toggleFavorite) => {
    const isInFav = isInFavorite(favorites, product.id) 
    const label = (!isInFav) ? 'Ajouter aux favoris' : 'Supprimer des favoris'
    if(product.id) return <a href='#' onClick={() => toggleFavorite(product)}>{label}</a>
    else return ''
  }

export default ArticleListing
