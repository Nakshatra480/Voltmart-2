// --- Static Product Data ---
const products = [
    // Smartphone
    { id: 1, name: "iPhone 14 Pro", price: 82999, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Smartphone", description: "Apple's latest flagship smartphone with advanced camera and display." },
    { id: 2, name: "Samsung Galaxy S23", price: 74699, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Smartphone", description: "Samsung's premium Galaxy S23 with stunning display and performance." },
    // Headphones
    { id: 11, name: "Sony WH-1000XM5", price: 29049, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Headphones", description: "Industry-leading noise cancelling headphones from Sony." },
    { id: 12, name: "Bose QC45", price: 27389, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Headphones", description: "Bose QuietComfort 45 for comfort and clear sound." },
    // Laptops
    { id: 21, name: "MacBook Air M2", price: 99599, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Laptops" },
    { id: 22, name: "Dell XPS 13", price: 82999, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Laptops" },
    // Speakers
    { id: 31, name: "JBL Flip 6", price: 10789, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Speakers" },
    { id: 32, name: "Bose SoundLink Flex", price: 12449, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Speakers" },
    // Tablets
    { id: 41, name: "iPad Pro 11", price: 66399, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Tablets" },
    { id: 42, name: "Samsung Galaxy Tab S8", price: 58099, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Tablets" },
    // Smartwatches
    { id: 51, name: "Apple Watch Series 8", price: 33199, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Smartwatches" },
    { id: 52, name: "Samsung Galaxy Watch 5", price: 23239, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Smartwatches" },
    // Cameras
    { id: 61, name: "Canon EOS R10", price: 81339, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Cameras" },
    { id: 62, name: "Sony Alpha a7 III", price: 107899, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Cameras" },
    // Monitors
    { id: 71, name: "Dell UltraSharp 27", price: 37349, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Monitors" },
    { id: 72, name: "Samsung Odyssey G9", price: 124499, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Monitors" },
    // Keyboards
    { id: 81, name: "Logitech MX Keys", price: 8299, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Keyboards" },
    { id: 82, name: "Razer Huntsman Elite", price: 16599, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Keyboards" },
    // Mice
    { id: 91, name: "Razer DeathAdder V2", price: 5809, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Mice" },
    { id: 92, name: "Logitech G Pro X Superlight", price: 10789, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Mice" },
    // Printers
    { id: 101, name: "HP LaserJet Pro", price: 19089, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Printers" },
    { id: 102, name: "Epson WorkForce 3000", price: 16599, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Printers" },
    // Routers
    { id: 111, name: "TP-Link Archer AX50", price: 10789, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Routers" },
    { id: 112, name: "Netgear Nighthawk R7000", price: 16599, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Routers" },
    // Drones
    { id: 121, name: "DJI Mini 3 Pro", price: 63079, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Drones" },
    { id: 122, name: "DJI Mavic 3", price: 107899, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Drones" },
    // Game Consoles
    { id: 131, name: "PlayStation 5", price: 41499, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Game Consoles" },
    { id: 132, name: "Xbox Series X", price: 41499, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Game Consoles" },
    // Projectors
    { id: 141, name: "Epson Home Cinema 2250", price: 74699, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Projectors" },
    { id: 142, name: "BenQ HT2050", price: 41499, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Projectors" },
    // Power Banks
    { id: 151, name: "Anker PowerCore 20000", price: 4149, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Power Banks" },
    { id: 152, name: "RavPower 20000mAh", price: 3319, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Power Banks" },
    // Smart Home
    { id: 161, name: "Google Nest Hub", price: 8299, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Smart Home" },
    { id: 162, name: "Amazon Echo Dot 4", price: 4149, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Smart Home" },
    // Wearables
    { id: 171, name: "Fitbit Charge 5", price: 12449, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Wearables" },
    { id: 172, name: "Garmin Venu 2", price: 29049, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Wearables" },
    // Storage
    { id: 181, name: "Samsung T7 SSD 1TB", price: 9129, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Storage" },
    { id: 182, name: "SanDisk Extreme Pro 1TB", price: 10789, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Storage" },
    // Accessories
    { id: 191, name: "Belkin USB-C Hub", price: 3319, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Accessories" },
    { id: 192, name: "Anker PowerCore 20000", price: 4149, image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80", category: "Accessories" },
];

// --- Login Logic ---
const loginSection = document.getElementById('login-section');
const mainContent = document.getElementById('main-content');
const loginForm = document.getElementById('login-form');

// --- User Registration Logic ---
const registerSection = document.getElementById('register-section');
const registerForm = document.getElementById('register-form');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');

function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}
function saveUser(username, password, email) {
    const users = getUsers();
    users.push({ username, password, email });
    localStorage.setItem('users', JSON.stringify(users));
}
function userExists(username, email) {
    return getUsers().some(u => u.username === username || u.email === email);
}
function validateUser(username, password, email) {
    return getUsers().some(u => u.username === username && u.password === password && u.email === email);
}
showRegister.addEventListener('click', function(e) {
    e.preventDefault();
    loginSection.style.display = 'none';
    registerSection.style.display = 'flex';
});
showLogin.addEventListener('click', function(e) {
    e.preventDefault();
    registerSection.style.display = 'none';
    loginSection.style.display = 'flex';
});
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    if (!username || !password || !email) {
        alert('Please enter username, email, and password.');
        return;
    }
    if (userExists(username, email)) {
        alert('Username or email already exists.');
        return;
    }
    saveUser(username, password, email);
    alert('Registration successful! Please login.');
    registerSection.style.display = 'none';
    loginSection.style.display = 'flex';
});

// --- Update Login Logic ---
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const email = document.getElementById('login-email').value.trim();
    if (!username || !password || !email) {
        alert('Please enter username, email, and password.');
        return;
    }
    if (!validateUser(username, password, email)) {
        alert('Invalid username, email, or password.');
        return;
    }
    loginSection.style.display = 'none';
    mainContent.style.display = 'block';
});

// --- Product Listing ---
const productsList = document.getElementById('products-list');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
let filteredProducts = products.slice();
function applyFilters() {
    const q = searchInput.value.trim().toLowerCase();
    const cat = categoryFilter.value;
    filteredProducts = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(q);
        const matchesCategory = cat === 'all' || p.category === cat;
        return matchesSearch && matchesCategory;
    });
}
// --- Sorting Logic ---
const sortFilter = document.getElementById('sort-filter');
function sortProducts(arr) {
    const val = sortFilter.value;
    if (val === 'name-asc') return arr.slice().sort((a, b) => a.name.localeCompare(b.name));
    if (val === 'name-desc') return arr.slice().sort((a, b) => b.name.localeCompare(a.name));
    if (val === 'price-asc') return arr.slice().sort((a, b) => a.price - b.price);
    if (val === 'price-desc') return arr.slice().sort((a, b) => b.price - a.price);
    return arr;
}
function renderProducts() {
    applyFilters();
    // Only keep 2 products per category
    let categoryCount = {};
    let limited = [];
    let sorted = sortProducts(filteredProducts);
    for (let product of sorted) {
        if (!categoryCount[product.category]) categoryCount[product.category] = 0;
        if (categoryCount[product.category] < 2) {
            limited.push(product);
            categoryCount[product.category]++;
        }
    }
    productsList.innerHTML = '';
    limited.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        const discountedPrice = Math.round((product.price * 0.1) / 100) * 100; // 90% discount rounded to nearest 100
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p><span style="text-decoration: line-through; color: #999; font-size: 0.9em;">₹${Math.round(product.price / 100) * 100}</span></p>
            <p style="color: #e74c3c; font-weight: bold; font-size: 1.2em;">₹${discountedPrice.toLocaleString('en-IN')}</p>
            <p style="color: #27ae60; font-size: 0.8em; margin: 5px 0;">90% OFF!</p>
            <button data-id="${product.id}" class="add-cart-btn">Add to Cart</button>
            <button data-id="${product.id}" class="buy-now-btn">Buy Now</button>
        `;
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('add-cart-btn') && !e.target.classList.contains('buy-now-btn')) {
                openProductModal(product);
            }
        });
        productsList.appendChild(card);
    });
}
searchInput.addEventListener('input', renderProducts);
categoryFilter.addEventListener('change', renderProducts);
sortFilter.addEventListener('change', renderProducts);
renderProducts();

// --- Cart Logic (with Remove) ---
let cart = [];
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartCloseX = document.getElementById('cart-close-x');
const placeOrderBtn = document.getElementById('place-order-btn');
const orderModal = document.getElementById('order-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

function updateCartCount() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}
function updateCartSidebar() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.name} x${item.qty}</span>
            <span>₹${(item.price * item.qty).toLocaleString('en-IN')} <button class="remove-cart-btn" data-idx="${idx}">Remove</button></span>
        `;
        cartItems.appendChild(li);
        total += item.price * item.qty;
    });
    cartTotal.textContent = `Total: ₹${total.toLocaleString('en-IN')}`;
    updateCartCount();
}
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const discountedPrice = Math.round((product.price * 0.1) / 100) * 100; // 90% discount rounded to nearest 100
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, price: discountedPrice, qty: 1 });
    }
    updateCartSidebar();
}
function buyNow(productId) {
    // Find the product
    const product = products.find(p => p.id === productId);
    if (!product) return;
    // Show order modal immediately
    hideCart();
    orderModal.classList.remove('hidden');
    // Optionally, you can display product info in the modal if desired
}

productsList.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-cart-btn')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        addToCart(id);
    }
    if (e.target.classList.contains('buy-now-btn')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        buyNow(id);
    }
});
function showCart() {
    cartSidebar.classList.add('visible');
    cartSidebar.classList.remove('hidden');
    updateCartSidebar();
}
function hideCart() {
    cartSidebar.classList.remove('visible');
    cartSidebar.classList.add('hidden');
}
cartBtn.addEventListener('click', showCart);
closeCartBtn.addEventListener('click', hideCart);
cartCloseX.addEventListener('click', hideCart);
cartItems.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-cart-btn')) {
        const idx = parseInt(e.target.getAttribute('data-idx'));
        cart.splice(idx, 1);
        updateCartSidebar();
    }
});

// --- Place Order Logic ---
placeOrderBtn.addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    cart = [];
    updateCartSidebar();
    hideCart();
    orderModal.classList.remove('hidden');
});
closeModalBtn.addEventListener('click', function() {
    orderModal.classList.add('hidden');
});

// --- Product Details Modal Logic ---
const productModal = document.getElementById('product-modal');
const productModalContent = document.getElementById('product-modal-content');
function openProductModal(product) {
    const discountedPrice = Math.round((product.price * 0.1) / 100) * 100; // 90% discount rounded to nearest 100
    const originalPrice = Math.round(product.price / 100) * 100; // original price rounded to nearest 100
    productModalContent.innerHTML = `
        <button class="close-modal-btn" id="close-product-modal">&times;</button>
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Original Price:</strong> <span style="text-decoration: line-through; color: #999;">₹${originalPrice.toLocaleString('en-IN')}</span></p>
        <p><strong>Discounted Price:</strong> <span style="color: #e74c3c; font-weight: bold; font-size: 1.1em;">₹${discountedPrice.toLocaleString('en-IN')}</span></p>
        <p style="color: #27ae60; font-weight: bold;">90% OFF!</p>
        <p>${product.description || "No description available."}</p>
        <div class="modal-btns">
            <button class="add-cart-btn" data-id="${product.id}">Add to Cart</button>
            <button class="buy-now-btn" data-id="${product.id}">Buy Now</button>
        </div>
    `;
    productModal.classList.remove('hidden');
}
productModal.addEventListener('click', function(e) {
    if (e.target.id === 'close-product-modal' || e.target === productModal) {
        productModal.classList.add('hidden');
    }
});
productModalContent.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-cart-btn')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        addToCart(id);
        productModal.classList.add('hidden');
    }
    if (e.target.classList.contains('buy-now-btn')) {
        const id = parseInt(e.target.getAttribute('data-id'));
        buyNow(id);
        productModal.classList.add('hidden');
    }
});

// Hide cart sidebar and modal on load
hideCart();
orderModal.classList.add('hidden');

// --- Features Animation Below Search Bar ---
const features = [
    '🚚 Fast Delivery',
    '🛒 Everything is Available',
    '💸 Cheaper Cost',
    '🔒 Secure Payments',
    '⭐ Top Rated Products',
    '📦 Easy Returns',
];
const featuresAnimation = document.getElementById('features-animation');
let featureIdx = 0;
function showNextFeature() {
    featuresAnimation.classList.add('fade');
    setTimeout(() => {
        featuresAnimation.textContent = features[featureIdx];
        featuresAnimation.classList.remove('fade');
        featureIdx = (featureIdx + 1) % features.length;
    }, 500);
}
featuresAnimation.textContent = features[0];
setInterval(showNextFeature, 2000);