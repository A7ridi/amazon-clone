import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({ id, title, image, price, rating, hideButton }) => {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt=""/>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <strong className="price">$</strong>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {
            Array(rating)
            .fill()
            .map((_) => (
              <span role="img" aria-label="Star">⭐</span>
              ))
            }
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Cart</button>
        )}

      </div>
    </div>
  )
}

export default CheckoutProduct;
