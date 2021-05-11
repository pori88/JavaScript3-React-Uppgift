import axios from 'axios';
import actiontypes from '../reducers/actiontypes';


export const getProductCatalog = () => {
    
    return async dispatch => {

        const res = await axios.get('http://localhost:9999/api/products')
        dispatch(setProducts(res.data))
    }
}


export const setProducts = products => {
    return {
        type: actiontypes().productCatalog.set,
        payload: products
    }
}

export const getOnePost = id => {
    return async dispatch => {
        const res = await axios.get(`http://localhost:9999/api/products/${id}`)
        dispatch(setPost(res.data));

    }
}

export const setPost = (post) => {
    return {
        type: actiontypes().productCatalog.setPost,
        payload: post
    }
}