import { PRODUCTS } from '../../products'
import Product from './Product'
import './Shop.css'

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Mastu Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => {
          return <Product op={product} key={product.id} />
        })}
      </div>
    </div>
  )
}

export default Shop
