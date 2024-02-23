import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_stripe_publish_key)
const Payment = () => {
    return (
        <div>
            <h2 className="text-center mb-16 text-3xl">PayMent System</h2>
            <div className="max-w-3xl mx-auto">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;