
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Keyboard", price: 1500 },
  { id: 3, name: "Mouse", price: 800 },
];

app.get("/", (req, res) => {
  res.json({ message: "MERN CI/CD API is running!" });
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
