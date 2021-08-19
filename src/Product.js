import React from 'react';
import "./product.css";
import {useStateValue} from './StateProvider'

function Product({id, title, price, rating, image}) {
    const[{basket}, dispatch] = useStateValue();

    // console.log("Panier : ", basket)

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating : rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>{price}</strong>
                    <small>€</small>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                       <p>⭐</p> 
                    ))}
                </div>
            </div>
            <img className="product__image" src={image} alt=""></img>
            <button onClick={addToBasket} className="product__button">Ajouter au panier</button>
        </div>
    )
}

export default Product
