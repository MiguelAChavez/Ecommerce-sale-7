import { useState } from "react";
import { SaleButton } from "../SaleButton";
import "./productDetails.css";

export const ProductDetails = ({ product }) => {
  const [stock, setStock] = useState(product.stock);

  const handleSale = () => {
    if (stock > 0) {
      setStock(stock - 1);
    }
  };

  return (
    <section className="card">
      <article className="left-column">
        <h2>{product.name}</h2>
        <div className="info">
          <p>Precio: ${product.price}</p>
          <p>SKU: {product.SKU}</p>
          <p>Cantidad de producto: {stock}</p>
        </div>
        <SaleButton onClick={handleSale}></SaleButton>
      </article>

      <article className="right-column">
        <h3>Descripción</h3>
        <img src={product.path} alt={product.name} />
        <p>{product.description}</p>
      </article>
    </section>
  );
};
