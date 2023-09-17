import { ReactNode, createContext, useState } from 'react'
import { PRODUCTS } from '../products'

type ShopContextProviderProps = {
  children: ReactNode
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

export const ShopContext = createContext<SharedData | null>(null)

const getDefaultCart = () => {
  const cart: { [key: number]: number } = {}
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}

export const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = PRODUCTS.find((product) => product.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount
  }

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const updateCartItemCount = (newAmount: number, itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }

  const checkout = () => {
    setCartItems(getDefaultCart())
  }

  const contextValue: SharedData = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  }

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  )
}
