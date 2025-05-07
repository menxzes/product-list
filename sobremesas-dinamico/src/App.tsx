import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards/Card'
import Cart from './components/cart/Cart'
{/*import test from "./assets/images/image-waffle-desktop.jpg"*/}

interface Dessert {
  name: string
  category: string
  price: number
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
}

interface CartItem {
  name: string
  price: number
  quantity: number
}

function App() {
  const [desserts, setDesserts] = useState<Dessert[]>([])
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setDesserts(data))
      .catch((err) => console.error("Erro ao carregar JSON:", err))

      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        setCart(JSON.parse(savedCart))
      }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function handleAddToCart(name: string, price: number) {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.name === name)
      if (existingItem) {
        return prevCart.map(item =>
          item.name === name ? { ...item, quantity: item.quantity + 1} : item
        )
      } else {
        return [...prevCart, { name, price, quantity: 1 }]
      }
    })
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  function increaseQuantity(name: string) {
    setCart(prevCart =>
      prevCart.map(item =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  function decreaseQuantity(name: string) {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  function removeItem(name: string) {
    setCart(prevCart => prevCart.filter(item => item.name !== name));
  }
  
  return (
    <div id="app">
      <main className="container">
        <section className="menu">
          <h2>Desserts</h2>
          <div id="product-list" className="product-list">
            {desserts.map((dessert, index) => (
              <Card
                key={index}
                image={dessert.image}
                name={dessert.name}
                category={dessert.category}
                price={dessert.price}
                onAddToCart={() => handleAddToCart(dessert.name, dessert.price)}
              />
            ))}
          </div>
        </section>

        <Cart
          items={cart}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeItem}
        />
      </main>
  </div>
  )
}

export default App
