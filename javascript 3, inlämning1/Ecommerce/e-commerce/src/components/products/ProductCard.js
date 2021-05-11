import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
import {Link} from 'react-router-dom'

const ProductCard = ({product}) => {

    const dispatch = useDispatch();

    return (
        <div className="col">
            <div className="card h-100">
                <Link to={`/product/${product._id}`}>
                    <img
                    src={product.image}
                    className="card-img-top"
                    alt="..." 
                    />
                </Link>
                <div>
                    <h5 className="card-body">{product.name}</h5>
                    <div className="card-text">
                        <p>{ product.short }</p>
                        <p className="text-danger h5">{ product.price }</p>
                        <div>
                        <button className="btn btn-info" onClick={() =>{
                            dispatch(addToCart(product))
                        }}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ProductCard
