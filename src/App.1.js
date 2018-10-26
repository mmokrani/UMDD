import React, { Component } from 'react';
import './App.css';
import products from './api/products'
import categories from './api/categories'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      productsList: '',
      categoriesList: ''
    }
  }

  allProducts = () => {
    console.log("allProducts")
    products.all()
    .then(res => this.productsJSX(res))
    .catch(error => {console.log("Erreur : ");console.log( error)})
  }
  paginationProducts = (page) => {
    console.log("lesTroisPremiers")
    const nbProductPerPage = 3
    const debut = ((page -1) * nbProductPerPage) 
    console.log(`${debut},${nbProductPerPage}`)
    products.getFilterProductsList(`${debut},${nbProductPerPage}`)
    .then(res => {console.log("res >>> ");console.log(res);  this.productsJSX(res)})
    .catch(error => {console.log("Erreur : ");console.log( error)})
  }

  allCategories = () => {
    console.log("allCategories")
    categories.all()
      .then(res => {
        this.categoriesJSX(res)
        this.setState({productsList: ''})
      })
      .catch(err => console.log(err))
  }

  productsForCategory = (id) =>{
    console.log(`productsForCategory ${id}`)
    //this.setState({productsList: ''})
    products
      .getProductByCategoryId(id)
      .then(res => this.productsJSX(res))
      .catch(error => {console.log("Erreur : ");console.log( error)})
  }

  searchProduct = (eventSearch) => {
    console.log("searchProduct")
    //eventSearch.preventDefault();
    //console.log(eventSearch.target.value)
    let search = eventSearch.target.value
    if(search.length > 2) this.getProductsByName(search)
  }

  getProductsByName = (search) => {
    console.log(`getProductsByName : ${search}`)
    products.getProductsByName(search)
      .then(result => this.productsJSX(result))
      .catch(error => console.log(error))
  }

  componentDidMount(){
    //products.one(1).then(prd => console.log(prd));
    this.allCategories()
  }

  productsJSX = (results) => {
    console.log("productsJSX")
    if(results.length === 0 ) this.setState({productsList: 'Pas de produits associés'})
    else this.setState({productsList: results.map(elmt => <div key={elmt.id}>{elmt.id}: {elmt.name}</div>)})
  }

  categoriesJSX(results) {
    this.setState({categoriesList: results.map(elmt => <div  key={elmt.id}><a href="#" onClick={() => this.productsForCategory(elmt.id)}>{elmt.id}: {elmt.name}</a></div>)})
  }

  render() {
    return (
      <div>
        <div>
          <a href="#" onClick={this.allCategories}>Toues les catégories</a><br />
          <a href="#" onClick={this.allProducts}>Tous les produits</a><br />
         
          Les produits avec le nom :<input type="text" name="searchProduct" onChange={this.searchProduct}/><br />
          
          <br /><br />
        </div>
        <div><b>Catégories</b></div>
        {this.state.categoriesList}<br />
        <div><b>Produits</b></div>
        Pagination : &nbsp;<a href="#" onClick={() => this.paginationProducts(1)}>1</a>&nbsp;&nbsp;&nbsp;<a href="#" onClick={() =>this.paginationProducts(2)}>2</a><br />
        {this.state.productsList}
      </div>
    );
  }
}

export default App;