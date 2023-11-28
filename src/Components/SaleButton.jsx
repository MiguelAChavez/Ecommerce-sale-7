import "./SaleButton.css";
import { useEffect, useState } from "react";
import "./SaleButton.css";

export const SaleButton = ({ onClick }) => {
  const [isSold, setIsSold] = useState(false);
  const buttonClass = isSold ? "sold" : "ready";

  const handleClick = () => {
    setIsSold(true);
    onClick();
  };

  useEffect(() => {
    if (isSold) {
      setTimeout(() => setIsSold(false), 2000);
    }
  }, [isSold]);

  return (
    <div className="button-wrapper">
      <button className={buttonClass} type="button" onClick={handleClick}>
        <span className="ready-text">{isSold ? "Vendido" : "Comprar"}</span>
      </button>
      {isSold && <span className="text-sold">Gracias por su compra!</span>}
    </div>
  );
};
