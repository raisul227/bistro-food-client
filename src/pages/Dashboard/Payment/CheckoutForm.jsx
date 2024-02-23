import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from './../../../hooks/useCart';
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const navigate = useNavigate();
    const elements = useElements();
    const [cart, refetch] = useCart();
    const secureAxios = useAxios();
    const { user } = useAuth();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    useEffect(() => {
        if (totalPrice > 0) {
            secureAxios.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [secureAxios, totalPrice])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
        } else {
            console.log('payment method', paymentMethod);
            setError('');
        }
        //confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            setError(confirmError.message)
        } else {
            if (paymentIntent.status === "succeeded") {
                setTransactionId(paymentIntent.id);

                //save the payment into the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartId: cart.map(item => item._id),
                    menuId: cart.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await secureAxios.post('/payments', payment)
                if (res.data?.paymentResult?.insertedId) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Order Placed Succesfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory')
                }
            }
            setError('');
        }
    }
    return (

        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-warning my-5 text-white" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-danger">{error}</p>
            <p className="text-green-600 my-2">{transactionId}</p>
        </form>

    );
};

export default CheckoutForm;