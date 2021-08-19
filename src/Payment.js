import React, {useState, useEffect} from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';
import './payment.css'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const history = useHistory();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("false");

    useEffect(() => {
        // génère une clé secrète stripe pour faire payer le client
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])
    
    console.log('Secret >>>', clientSecret)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            // paymentIntent = confirmation de paiement
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            history.replace('/orders')
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

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

                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className='payment__priceContainer'>
                           <CurrencyFormat renderText={(value) => (
                                <>
                                    <p>
                                        Total de la commande : {value}
                                    </p>
                                </>    
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"€"} 
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>en cours...</p> : "Payez"}</span>
                            </button>
                        </div>
                        {/* errors */}
                        {error && <div>{error}</div>}
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Payment
