import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getOnePost } from '../store/actions/productCatalogActions'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const id = useParams().id
    const dispatch = useDispatch();
    
    useEffect(() => {
        // console.log(id)
        dispatch(getOnePost(id))
    }, [dispatch, id])
    
    const product = useSelector(state => state.productCatalog.product);
    

    const _post = (product && 
        <div className="bilddetalj">
             <img
                    src={product.image}
                    alt="..." 
             />
            <h1>{product.name}</h1>
            <p>Pris:{product.price}kr</p>
            <p>{product.desc}</p>
            </div>
            
        )


    return (
        <div>

          {_post}

        </div>
    )
}

export default ProductDetails
