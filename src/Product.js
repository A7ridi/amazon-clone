import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

const Product = ({ id, title, image, price, rating }) => {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title,
        image,
        price,
        rating,
      }
    })
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__">
          <small className="price__tag">$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {
            Array(rating)
            .fill()
            .map((_) => (
              <span role="img" aria-label="Star">⭐</span>
              ))
            }
        </div>
      </div>

      <img src={image} alt="products"/>
      <button  onClick={addToBasket}>Add to cart</button>
    </div>
  )
}

export default Product
