const menuData = [
    { id: 1, name: "Single Topping Pizza", price: 70, category: "Simply Veg" },
    { id: 2, name: "Double Topping Pizza", price: 110, category: "Simply Veg" },
    { id: 3, name: "Paneer Special", price: 160, category: "Classic" },
    { id: 4, name: "A1 Special Pizza", price: 210, category: "Premium" }
];

let cart = [];

function displayMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = menuData.map(item => `
        <div class="menu-card">
            <h4>${item.name}</h4>
            <p>${item.category}</p>
            <span>₹${item.price}</span>
            <button onclick="addToCart(${item.id})">Add to Order</button>
        </div>
    `).join('');
}

function addToCart(id) {
    const item = menuData.find(p => p.id === id);
    cart.push(item);
    updateCart();
}

function updateCart() {
    document.getElementById('cart-count').innerText = cart.length;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total-price').innerText = total;
    
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = cart.map(item => `<p>${item.name} - ₹${item.price}</p>`).join('');
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

function sendWhatsApp() {
    const phone = "917001475108";
    let message = "New Order from Website:%0a";
    cart.forEach(item => {
        message += `- ${item.name} (₹${item.price})%0a`;
    });
    message += `%0aTotal: ₹${document.getElementById('total-price').innerText}`;
    
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

displayMenu();
