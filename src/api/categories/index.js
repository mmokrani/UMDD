import GET from '../GET'
let get = new GET('categories')

const categories ={
    all() {
        return get.collections()
    },
    one(id){
        return get.one(id).then(d => d.category)
    }
}

export default categories