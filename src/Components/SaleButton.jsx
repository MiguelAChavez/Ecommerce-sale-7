import "./SaleButton.css";
export const SaleButton = () => {
  return (
    <button className="ready" type="button" onClick={""}>
      <div className="message submitMessage">
        <span className="button-text">Comprar</span>
      </div>
      <div className="message loadingMessage"></div>
      <div className="message successMessage">
        <span className="button-text">Ya es tuyo</span>
      </div>
      <canvas id="can"></canvas>
    </button>
  );
};
