import React from 'react'
import Box from '@material-ui/core/Box';
import { injectStripe, Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutSection';


const InjectedCheckout = injectStripe(CheckoutForm)

export default function StripeMain(props) {
    return (
        <Box p={2} >
            <StripeProvider apiKey="pk_test_hf5oc3rFTkCcCEcq5MewBDKc00n95nrq18">
                <Elements>
                    <InjectedCheckout />
                </Elements>
            </StripeProvider>
        </Box>
    )
}