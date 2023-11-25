import "./App.css";
import { ProductDetails } from "./Components/ProductDetails/ProductDetails";
import { Data } from "./Data.js";

function App() {
  return (
    <>
      <header>
        <section className="header">
          <h1>Product Details</h1>
        </section>
      </header>
      <main>
        {Data.map((product) => (
          <ProductDetails key={product.id} product={product} />
        ))}
      </main>
    </>
  );
}

export default App;
