import React from 'react'
import CartCount from './CartCount'
import Wishlist from './Wishlist'
import '../index.css'

const Header = () => {
  return (
    <div className='header'>
          
         <div className="logo">
            <h4>Smart Store</h4>
         </div>

         <div className="right">
        
        <CartCount/>
        <Wishlist/>
        
         </div>
    </div>
  )
}

export default Header