import * as config from './config'

export default class GET {
    constructor(name){
        this.name = name
    }
    collections() {
        return new Promise((resolve, reject) => {
          let returnData = [];
          let url = ''
          //TODO a commenter si on résout le PB du CORS
         // url += config.PROXY_URL
          url += config.API_URL          
          fetch(`${url}/${this.name}/?ws_key=${config.API_KEY}&${config.DATA_TYPE}`)
            .then((response) => response.json())
            .then(data => {
              
              data[this.name].forEach((item)=> {
                this.one(item.id).then(item => {
                  
                  // Recuperer le détail du produit  
                  for (var i in item) {
                    returnData.push(item[i]);
                    break;
                  }
    
                  if (returnData.length === data[this.name].length) {
                    resolve(returnData);
                  }
                })
              })
            })
            .catch(err => {
                reject(err);
            })
        })
    }

    one(id) {
        let url = ''
        //TODO a commenter si on résout le PB du CORS
        //url += config.PROXY_URL
        url += config.API_URL

        return fetch(`${url}/${this.name}/${id}?ws_key=${config.API_KEY}&${config.DATA_TYPE}`)
        .then(function (response) {
            //console.log(response)
          return response.json();
        })
    }
}