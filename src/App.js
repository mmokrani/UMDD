import React, { Component } from 'react';
import ArticleListingContainer from './containers/ArticleListingContainer'
import ArticleDetailContainer from './containers/ArticleDetailContainer'
import FavoritesContainer from './containers/FavoritesContainer'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="item"><ArticleListingContainer /></div>
        <div className="item"><ArticleDetailContainer /></div>
        <div className="item"><FavoritesContainer /></div>
      </div>
    );
  }
}


export default App;