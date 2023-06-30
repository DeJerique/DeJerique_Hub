let cart = [];
// Fetch data for the "women's clothing" category from the Fake Store API
fetch('https://fakestoreapi.com/products/category/women%27s%20clothing')
    .then(response => response.json())
    .then(data => {
        // Process the retrieved data
        const products = data;

        // Display the data in the browser
        const container = document.getElementById('product-container-women');

        products.forEach(product => {
            const div = document.createElement('div');
            div.classList.add('product');

            const image = document.createElement('img');
            image.src = product.image;
            image.alt = product.title;
            image.classList.add('image');

            const details = document.createElement('div');
            details.classList.add('details');

            const title = document.createElement('div');
            title.classList.add('title');
            title.textContent = product.title;

            const rating = document.createElement('div');
            rating.classList.add('rating');
            rating.innerHTML = `
    <span class="star">&#9733;</span>
    <span class="star">&#9733;</span>
    <span class="star">&#9733;</span>
    <span class="star">&#9733;</span>
  `;

            const price = document.createElement('div');
            price.classList.add('price');
            price.textContent = `$${product.price}`;

            const addToCartButton = document.createElement('button');
            addToCartButton.classList.add('add-to-cart');
            addToCartButton.textContent = 'Add to Cart';
            addToCartButton.addEventListener('click', () => {
                addToCart(product);
            });

            details.appendChild(title);
            details.appendChild(rating);
            details.appendChild(price);
            details.appendChild(addToCartButton);

            div.appendChild(image);
            div.appendChild(details);
            container.appendChild(div);
        });
        hideLoadingOverlay();
    })
    .catch(error => {
        console.log('Error fetching data:', error);
        hideLoadingOverlay();
    });

// Show loading overlay
function showLoadingOverlay() {
    var loadingOverlay = document.getElementById("loading-overlay");
    loadingOverlay.style.display = "block";
}

// Hide loading overlay
function hideLoadingOverlay() {
    var loadingOverlay = document.getElementById("loading-overlay");
    loadingOverlay.style.display = "none";
}

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    console.log('Product added to cart:', product.title);
    console.log('Current cart:', cart);
    updateCartCount();
}

// Function to update the cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length.toString();
}

// Greetings Scripts
function showGreeting() {
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
    var greeting;

    if (currentHour < 12) {
        greeting = "Good Morning &nbsp;&nbsp;";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon &nbsp;&nbsp;";
    } else {
        greeting = "Good Evening &nbsp;&nbsp;";
    }

    var greetingElement = document.getElementById("greeting");
    greetingElement.innerHTML = greeting;

    var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateElement = document.getElementById("date");
    dateElement.innerHTML = currentTime.toLocaleDateString(undefined, dateOptions).replace(/\./g, '/');
}

function updateTime() {
    var currentTime = new Date();
    var timeElement = document.getElementById("time");
    timeElement.innerHTML = currentTime.toLocaleTimeString();
}

// Call the functions when the page loads
window.onload = function () {
    showGreeting();
    setInterval(updateTime, 1000);
};
