import React from 'react';
import { Link } from 'react-router-dom';
import useCard from '../../hooks/useCard';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] =useProducts();
    const [cart, setCart] =useCard(products)

    const handleRemoveProduct=product=>{
      const rest =cart.filter(pd => pd.id !==product.id)
      setCart(rest)
      removeFromDb(product.id)
    }

    return (
        <div className='shop-container'>
           <div className='review-items-container'>
            {
             cart.map(product => <ReviewItem key={product.id}
                                             product={product}
                                             handleRemoveProduct={handleRemoveProduct}
                                             ></ReviewItem>)

            }
           </div>
           <div className='cart-container'>
             <Cart cart={cart}> <Link to='/about'> <button>Inside of Order</button> </Link> </Cart>
           </div>
        </div>
    );
};

export default Orders;