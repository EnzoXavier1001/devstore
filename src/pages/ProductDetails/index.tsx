import './styles.scss'
import {
  useParams
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
      {loading && (
        <div className='loading'>
          <ClipLoader color="#36d7b7" size={82} />
        </div>
      )}    
      {!loading && (
        <h1>{item?.title}</h1>
      )}
    </>
    
  )
}

export default ProductDetails