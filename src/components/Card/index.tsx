import './styles.scss'
import { Product } from '../../types/Product'

import {BsStarFill} from 'react-icons/bs'

import { Link }  from 'react-router-dom'

type CardProps = {
    item: Product;
}

export const Card = ( { item }: CardProps) =>  {

    return (
        <div className="card">
            <Link to={`product/${item.id}`} className="card-link">
                <img className='card-image' src={item.image} alt={item.title} />
                <h2 className="card-title">{item.title}</h2>
                <span className='card-price'>{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </Link>
        </div>
    )
}