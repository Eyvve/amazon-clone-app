import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import './payment.css'

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} articles</Link>
                    )
                </h1>

                {/* adresse */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Adresse de livraison</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>16 avenue du maréchal juin</p>
                        <p>78420 Carrières-sur-seine, France</p>
                    </div>
                </div>
                {/* verif et validation */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Vérification et validation de votre commande</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                    
                </div>
                {/* methode de paiement */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Mode de paiement</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
