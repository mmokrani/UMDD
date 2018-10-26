import GET from '../GET'
import * as config from "../config.js"

let get = new GET('products')

const products = {
    one(id) {
        return get.one(id).then(res => (res.length === 0) ? [] : res.product)
    },
    all() {
        return get.collections()
    },
    getFilterProductsList(limit = null, category = null, manufacturer = null, products = null, sort="id_ASC"){
        if( Array.isArray(products)){
          var productsRequestString = products.join('|');
        }
    
       let url = ''
       //TODO a commenter si on résout le PB du CORS
      // url += config.PROXY_URL
       url += config.API_URL
       return fetch(`${url}/products/` +
            `?display=[id,id_default_image,price,wholesale_price,name,show_price,link_rewrite]` +
            `&filter[active]=[1]` +
            `${category !== null ?  `&filter[id_category_default]=[${category}]` : ``}` +
            `${manufacturer !== null ?  `&filter[id_manufacturer]=[${manufacturer}]` : ``}` +
            `${products !== null ?  `&filter[id]=[${productsRequestString}]` : ``}` +
            `${limit !== null ?  `&limit=${limit}` : ``}` +
            `${sort !== null ?  `&sort=${sort}` : ``}` +
            `&ws_key=${config.API_KEY}&${config.DATA_TYPE}`)
        .then(response => response.json())
        .then(res => (res.length === 0) ? [] : res.products)
    },
    getProductsByName(search){    
       let url = ''
       //TODO a commenter si on résout le PB du CORS
      // url += config.PROXY_URL
       url += config.API_URL
       return fetch(`${url}/products/` +
            `?display=[id,id_default_image,price,wholesale_price,name,show_price,link_rewrite]` +
            `&filter[active]=[1]` +
            `&filter[name]=%[${search}]%` +
            `&ws_key=${config.API_KEY}&${config.DATA_TYPE}`)
        .then(response => response.json())
        .then(res =>  (res.length === 0) ? [] : res.products)
    },
    getProductByCategoryId(categoryId, limit = null){    
       let url = ''
       //TODO a commenter si on résout le PB du CORS
       //url += config.PROXY_URL
       url += config.API_URL
       return fetch(`${url}/products/` +
            `?display=[id,id_default_image,price,wholesale_price,name,show_price,link_rewrite,id_category_default]` +
            `&filter[active]=[1]` +
            `&filter[id_category_default]=[${categoryId}]` +
            `${limit !== null ?  `&limit=${limit}` : ``}` +
            `&ws_key=${config.API_KEY}&${config.DATA_TYPE}`)
        .then(response => response.json())
        .then(res => (res.length === 0) ? [] : res.products)
    }
}

export default products