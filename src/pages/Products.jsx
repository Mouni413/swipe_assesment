import React, { useEffect } from "react";
import { useInvoiceListData, useProductsListData } from "../redux/hooks";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productsSlice";

const Products = () => {
  const { invoiceList } = useInvoiceListData();
  const { productItems } = useProductsListData();
  console.log(productItems);
  const dispatch = useDispatch();
  const existingProducts = new Set(
    productItems.map((product) => `${product.itemId}-${product.invoiceId}`)
  );
  console.log(existingProducts);
  useEffect(() => {
    invoiceList.forEach((invoice) => {
      invoice.items.forEach((item) => {
        const productId = `${item.itemId}-${invoice.invoiceId}`;
        if (!existingProducts.has(productId)) {
          dispatch(
            addProduct({
              invoiceId: invoice.id,
              itemId: item.itemId,
              itemName: item.itemName,
              itemDescription: item.itemDescription,
              itemPrice: item.itemPrice,
              itemQuantity: item.itemQuantity,
            })
          );
        }
      });
    });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      <h1>dsfaf</h1>
      {productItems.map((eachProduct) => (
        <div className="card">
          <h1>InvoiceId:{eachProduct.invoiceId}</h1>
          <h1>InvoiceId:{eachProduct.itemId}</h1>
          <h1>InvoiceId:{eachProduct.itemName}</h1>
        </div>
      ))}
    </div>
  );
};

export default Products;
