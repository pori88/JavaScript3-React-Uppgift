const actiontypes = () => {
    return{
        productCatalog: {
            set: 'SET_PRODUCT_CATALOG',
            setPosts: 'PRODUCT_DETAILS',
            setPost: 'PRODUCT_DETAIL'
        },
        cart: {
            add: 'ADD:_TO_CART',
            remove: 'REVMOVE_FROM_CART',
            delete: 'DELETE_PRODUCT'
            
        }
    }
}

export default actiontypes;