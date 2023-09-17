import { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { useNavigate } from 'react-router-dom'
import { CartItem } from './Cart-item'
import { ShopContext } from '../../context/ShopContext'
import './Cart.css'

export const Cart = () => {
  const navigate = useNavigate()
  const context = useContext(ShopContext)
  if (!context) {
    return <div>Context is not available</div>
  }

  const { getTotalCartAmount, cartItems, checkout } = context
  const totalAmount = getTotalCartAmount()

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate('/')}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout()
              navigate('/checkout')
            }}
          >
            {' '}
            Checkout{' '}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  )
}
