import { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

type ProductProps = {
  op: {
    id: number
    productName: string
    price: number
    productImage: string
  }
}
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

const Product = ({ op }: ProductProps) => {
  const { id, price, productImage, productName } = op
  const data = useContext<SharedData | null>(ShopContext)

  const cartItemCount = data?.cartItems[id]
  return (
    <div className="product" key={id}>
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => data?.addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  )
}

export default Product
