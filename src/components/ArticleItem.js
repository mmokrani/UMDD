import React from 'react'
//import {View, Text } from 'react-native'

class ArticleItem extends React.Component {
  /*render_NATIVE() {
    const {article} = this.props
    return (<View><Text><a href='#' onClick={this.props.navigate('Article', {key: article.id})}>{article.name}</a></Text></View>);
  }*/
  render() {
    const {article, handleClick,children} = this.props
    return (
            <a href='#' onClick={handleClick}>{article.name}</a>);
  }
}
export default ArticleItem
