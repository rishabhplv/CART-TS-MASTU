import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

type SharedData = {
  cartItems: {
    [key: number]: number
  }
  addToCart: (itemId: number) => void
  updateCartItemCount: (newAmount: number, itemId: number) => void
  removeFromCart: (itemId: number) => void
  getTotalCartAmount: () => number
  checkout: () => void
}

type Props = {
  data: {
    id: number
    productName: string
    price: number
    productImage: string
  }
}

export const CartItem = ({ data }: Props) => {
  const { id, productName, price, productImage } = data
  const context = useContext<SharedData | null>(ShopContext)

  if (!context) {
    // Handle the case where context is null
    return <div>Context is not available</div>
  }
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = context

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  )
}
