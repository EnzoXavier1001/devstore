import './styles.scss'
import {
  useParams
} from "react-router-dom";
import { useEffect, useState } from 'react';
import api from '../../services/api';

import { Product } from '../../types/Product';

const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState<Product | null>({} as Product);

  useEffect(() => {
    async function getProduct() {
      let res = await api.get(`/products/${id}`)
      setItem(res.data)
    }

    getProduct()
      
  }, [])

  return (
    <h1>
      {item?.title}
    </h1>
  )
}

export default ProductDetails