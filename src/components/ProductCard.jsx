import React from "react";

const ProductCard = (props) => {
  const {
    invoiceId,
    itemDescription,
    itemId,
    itemName,
    itemPrice,
    itemQuantity,
  } = props.productItem;
  return (
    <div className="card m-3">
      <h1>{itemName}:</h1>
      <p>{itemDescription}</p>
      <p>Cost : {itemPrice}</p>
      <p>Quantity:{itemQuantity}</p>
    </div>
  );
};

export default ProductCard;
