
import { useEffect, useState } from "react";
import "./App.css";

// const API_URL = "http://localhost:5000/api/products";

const API_URL = `${import.meta.env.VITE_API_URL}/api/products`;

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <main className="container">
      <header className="header">
        <div>
          <h1>Product Dashboard</h1>
          <p>Products fetched from your Express API</p>
        </div>

        <span className="count">{products.length} Products</span>
      </header>

      {loading && <p className="message">Loading products...</p>}

      {error && (
        <p className="error">
          {error}. Make sure your backend is running on port 5000.
        </p>
      )}

      {!loading && !error && products.length === 0 && (
        <p className="message">No products found.</p>
      )}

      <section className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <span className="product-id">Product #{product.id}</span>
            <h2>{product.name}</h2>
            <p className="price">
              ₹{Number(product.price).toLocaleString("en-IN")}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
