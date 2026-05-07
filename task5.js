const API_URL = "https://fakestoreapi.com/products/";

const productsContainer = document.getElementById("productsContainer");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");

let allProducts = [];

// Fetch API Data
fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    loading.style.display = "none";

    allProducts = data;

    displayProducts(allProducts);

    showCategories(allProducts);
  })
  .catch(() => {
    loading.style.display = "none";
    error.innerText = "Failed to load data";
  });

// Display Products
function displayProducts(products) {

  productsContainer.innerHTML = "";

  products.forEach(product => {

    productsContainer.innerHTML += `
    
      <div class="card">

        <img src="${product.image}" alt="">

        <h3>${product.title.slice(0, 50)}...</h3>

        <p class="price">$${product.price}</p>

        <p class="desc">
          ${product.description.slice(0, 60)}...
        </p>

        <div class="btn-group">

          <button 
            class="view-btn"
            onclick="viewProduct(${product.id})"
          >
            View More
          </button>

          <button 
            class="cart-btn"
            onclick="addToCart(${product.id})"
          >
            Add to Cart
          </button>

        </div>

      </div>
    `;
  });
}

// View Product Details
function viewProduct(id) {

  const product = allProducts.find(item => item.id === id);

  alert(
`Title: ${product.title}

Price: $${product.price}

Category: ${product.category}

Description:
${product.description}`
  );
}

// Show Categories
function showCategories(products) {

  const categories = [...new Set(products.map(item => item.category))];

  categories.forEach(category => {

    categoryFilter.innerHTML += `
      <option value="${category}">
        ${category}
      </option>
    `;
  });
}

// Search + Filter + Sort
function filterProducts() {

  let filtered = [...allProducts];

  // Search
  const searchText = searchInput.value.toLowerCase();

  filtered = filtered.filter(product =>
    product.title.toLowerCase().includes(searchText)
  );

  // Category Filter
  const selectedCategory = categoryFilter.value;

  if (selectedCategory !== "all") {

    filtered = filtered.filter(product =>
      product.category === selectedCategory
    );
  }

  // Sort
  if (sortPrice.value === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sortPrice.value === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

// Add To Cart
function addToCart(id) {

  const product = allProducts.find(item => item.id === id);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Product added to cart");
}

// Events
searchInput.addEventListener("input", filterProducts);

categoryFilter.addEventListener("change", filterProducts);

sortPrice.addEventListener("change", filterProducts);