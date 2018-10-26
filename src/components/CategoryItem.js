import React from 'react'
//import {View, Text } from 'react-native'

class CategoryItem extends React.Component {
  /*render_NATIVE() {
    const {article} = this.props
    return (<View><Text><a href='#' onClick={this.props.navigate('Article', {key: article.id})}>{article.name}</a></Text></View>);
  }*/
  render() {
    const {category, handleClick} = this.props
    return (<div><a href='#' onClick={handleClick}>{category.name}</a></div>);
  }
}
export default CategoryItem
