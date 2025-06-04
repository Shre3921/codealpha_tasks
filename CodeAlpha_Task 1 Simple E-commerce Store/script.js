const products = [
  { id: 1, name: "T-shirt", price: 499 },
  { id: 2, name: "Jeans", price: 999 }
];

const container = document.getElementById("products");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `<h3>${product.name}</h3><p>Price: ₹${product.price}</p><button>Add to Cart</button>`;
  container.appendChild(div);
});
