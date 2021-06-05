import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Iyjo4KOrLWUUsd1Y9xEpX4irGD4FeLNZhBfjvdIKM9L3c4xcH2POHPozSXg94n7rLYiBYDUmopq6E89sIJisAmO00xUExFEvJ";

  const onToken = (token) => {
    console.log(token);
    alert(`Payment Successful`);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
