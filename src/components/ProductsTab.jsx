// ProductsTab.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../redux/productsSlice";

const ProductsTab = () => {
  //   const products = useSelector((state) => state.products);
  const { productsList } = useProductListData;
  console.log(productsList);
  const dispatch = useDispatch();
  const [updatedProducts, setUpdatedProducts] = useState(productsList);

  const handleProductUpdate = (invoiceId, productId, updatedInfo) => {
    // Update the product information in the local state
    const updatedProductList = updatedProducts.map((product) =>
      product.invoiceId === invoiceId && product.id === productId
        ? { ...product, ...updatedInfo }
        : product
    );
    setUpdatedProducts(updatedProductList);

    // Dispatch action to update product information in Redux store
    dispatch(
      updateProduct({ invoiceId: invoiceId, itemId: productId, updatedInfo })
    );
  };

  return (
    <div>
      <h3>Products</h3>
      {updatedProducts.map((product) => (
        <div key={`${product.invoiceId},${product.itemId}`}>
          <input
            type="text"
            value={product.itemName}
            onChange={(e) =>
              handleProductUpdate(product.invoiceId, product.itemId, {
                itemName: e.target.value,
              })
            }
          />
          <input
            type="number"
            value={product.itemPrice}
            onChange={(e) =>
              handleProductUpdate(product.invoiceId, product.itemId, {
                itemPrice: parseFloat(e.target.value),
              })
            }
          />
          {/* Add more fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default ProductsTab;
