import { useState, useEffect } from 'react'
import { Header } from '../../components/Header'
import './styles.scss'
import { Product } from '../../types/Product'
import api from '../../services/api'
import { Card } from '../../components/Card'
import ClipLoader from "react-spinners/ClipLoader";

function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getProducts() {
      const products = await api.get('/products/')
      setProducts(products.data)
      setLoading(false)
    }

    getProducts()
  }, [])

  console.log(products)
  return (
    <>
          {loading && (
            <div className='loading'>
              <ClipLoader color="#36d7b7" size={82} />
            </div>
          )}
          {!loading && (
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
          )}
    </>
    
  )
}

export default Home
