import { useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import './styles.scss'
import { Product } from '../../types/Product'
import api from '../../services/api'
import { Card } from '../../components/Card'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    async function getProducts() {
      const products = await api.get('/products/')
      setProducts(products.data)
    }

    getProducts()
  }, [])

  console.log(products)
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="product-card">
          {products.map((item, index) => (
            <Card 
              item={item} 
              key={index}  
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
