import { useSelector } from "react-redux";
import { selectInvoiceList } from "./invoicesSlice";
import { selectProductList } from "./productsSlice";

export const useInvoiceListData = () => {
  const invoiceList = useSelector(selectInvoiceList);

  const getOneInvoice = (receivedId) => {
    return (
      invoiceList.find(
        (invoice) => invoice.id.toString() === receivedId.toString()
      ) || null
    );
  };

  const listSize = invoiceList.length;

  return {
    invoiceList,
    getOneInvoice,
    listSize,
  };
};

export const useProductsListData = () => {
  const productItems = useSelector(selectProductList);

  const getOneProduct = (receivedId) => {
    return (
      productItems.find(
        (product) => product.itemId.toString() === receivedId.toString()
      ) || null
    );
  };

  const productsSize = productItems.length;

  return {
    productItems,
    getOneProduct,
    productsSize,
  };
};
