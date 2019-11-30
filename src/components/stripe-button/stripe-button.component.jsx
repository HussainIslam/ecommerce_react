import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) =>{
    const priceForStrip = price * 100;
    const publishableKey = 'pk_test_rhX3ltjsxwRT4EIFW0xhMise00c02T7ot4';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing Inc.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${ price }`}
            amount={ priceForStrip }
            panelLabel='Pay Now'
            token={ onToken }
            stripeKey={ publishableKey }
        />
    );
};

export default StripeCheckoutButton;