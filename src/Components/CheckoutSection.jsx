import React from 'react'
import CardSection from './CardCmp';
import Button from '@material-ui/core/Button';

class CheckoutForm extends React.Component {


    handleSubmit = (ev) => {
        // We don't want to let default form submission happen here, which would refresh the page.
        ev.preventDefault();

        const cardElement = this.props.elements.getElement('card');

        this.props.stripe
            .createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details: { name: 'Jenny Rosen' },
            })
            .then(({ paymentMethod }) => {
                console.log('Received Stripe PaymentMethod:', paymentMethod);
            });

        this.props.stripe.confirmCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}', {
            payment_method: {
                card: cardElement,
            },
        });

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <CardSection />
                <Button m={2} type="submit" variant="contained" color="primary">
                    Confirm Order
                </Button>
            </form>
        );
    }
}

export default CheckoutForm;