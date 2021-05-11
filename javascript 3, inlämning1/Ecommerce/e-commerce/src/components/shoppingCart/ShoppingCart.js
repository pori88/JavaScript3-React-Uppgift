import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';

const ShoppingCart = () => {

    const shoppingCart = useSelector(state => state.cartReducer.shoppingCart);
    const totaltCartAmount = useSelector (state => state.cartReducer.totaltCartAmount);

    const empty = (
        <div className="p-2 d-flex align-items-center">
            Your cart is empty
        </div>
    )

    return (
        <div>
            {
                shoppingCart && shoppingCart.map(product => (
                    <CartProduct key={product._id} product={product} />
                ))
            
            }
            {
                shoppingCart.length < 1 && empty
            }

            <div className="dropdown-divider"></div>
            
            <div className="p-2 d-flex justify-content-between align-items-center"></div>
            <div>
                <div className="total-price">
                    Total Amount: <span>{totaltCartAmount}</span>
                </div>
                <small className="text-muted">ink. vat</small>
            </div>
            <button className="btn btn-info">Checkout</button>
        </div>
    )
}

export default ShoppingCart
