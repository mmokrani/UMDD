import React from 'react'
//import {View, Text } from 'react-native'

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
    const favorites = this.props.favorites
    if(favorites) {
      console.log("favorites ++++++++++++++")
      console.log(favorites)
      return favorites.map(item => <div key={item.id}>{item.name}</div>)
    }
    else {
      return ''
    }
  }
}

export default Favorite
