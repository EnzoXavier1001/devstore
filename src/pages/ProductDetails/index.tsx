import './styles.scss'
import {
  useParams,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import api from '../../services/api';

import { Product } from '../../types/Product';
import ClipLoader from "react-spinners/ClipLoader";

const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Product | null>({} as Product);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getProduct() {
      let res = await api.get(`/products/${id}`)
      setItem(res.data)
      setLoading(false)
    }
    getProduct()
  }, [])

  return (
    <>
      {loading ? (
        <div className='loading'>
          <ClipLoader color="#36d7b7" size={82} />
        </div>
      ): 
      <div className='container-product'>
        <div className="product">
          <div className="product-image">
            <img src={item?.image} alt={item?.title} />
          </div>
          <div className="product-info">
            <h3 className="product-category">{item?.category}</h3>
            <h1 className='product-title'>{item?.title}</h1>
            <p className='product-description'>{item?.description}</p>
            <span className='product-price'>R$ {item?.price.toFixed(2).replace(".", ",")}</span>
            <button className='product-cart'>Add to Cart</button>
          </div>
        </div>
      </div>
      }    
    </>
    
  )
}

export default ProductDetails