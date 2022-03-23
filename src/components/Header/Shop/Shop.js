import React, { useEffect, useState } from 'react';
import {addToDb, getStoredCart} from '../../../utilities/fakedb'
import Cart from '../../cart/Cart';
import Product from '../Product/Product';
import './Shop.css' 
  
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
 
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

useEffect(() => {
    const storedCart = getStoredCart()
    // console.log(storedCart);
    for(const id in storedCart){
        const addedProduct = products.find(product => id === id)
    }
},[])

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart,product]
        setCart(newCart)
        addToDb(product.id)
      
    }
    return (
        <div className='shop-container'>
           <div className="products-container">
                 {/* <h3>This is for products : {products.length}</h3> */}
                 {
                     products.map(product => <Product
                         key={product.id}
                         product={product}
                         handleAddToCart ={handleAddToCart}
                         ></Product>)
                 }
           </div>
           <div className="cart-container">
               <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};
 
export default Shop; 