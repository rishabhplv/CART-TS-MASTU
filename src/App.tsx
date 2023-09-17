import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Shop from './pages/shop/Shop'
import Contact from './pages/Contact'
import './App.css'
import { ShopContextProvider } from './context/ShopContext'
import { Cart } from './pages/cart/Cart'

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
