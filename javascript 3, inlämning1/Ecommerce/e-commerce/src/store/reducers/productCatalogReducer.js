import actiontypes from '../reducers/actiontypes';

const initState = {
    products: [],
    product: null
};

const productCatalogReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().productCatalog.set:
            state.products = action.payload
            return state

        case actiontypes().productCatalog.setPost:
            return {
                ...state,
                product: action.payload
            }
        default:
            return state;
        
        
        
    }

}

export default productCatalogReducer;