import { getFromLS, storeInLS } from "../utilities/localStorage.js";

export function displayAmountCartItemsInNav() {
    const cardItemCountEl = document.querySelector('.card-item-count');
    if (!cardItemCountEl) return;
    const numCartItems = sumCartItems();
    cardItemCountEl.classList.toggle('show', numCartItems);
    if (numCartItems) {
        (cardItemCountEl.innerHTML = numCartItems);
    }
}

export function showNavCartBtn() {
    const isNotEmpty = !!getFromLS('cartItems')?.length;
    const navCartBtn = document.querySelector('nav .cart');
    if (navCartBtn) {
        navCartBtn.classList.toggle('show', isNotEmpty);
    }
}

export function sumCartItems() {
    const cartItemsLS = getFromLS('cartItems');
    let totalCartItems = cartItemsLS && cartItemsLS.reduce((total, cartItem) => total + cartItem.quantity, 0);
    return totalCartItems;
}

// TODO - Refactor: split up.
export function createCartItem() {
    const cartContainer = document.querySelector('.cart-item-container');
    const cartItemsEl = document.createElement('div');
    const cartItemsLS = getFromLS('cartItems');
    cartItemsLS.forEach(cardItemLS => {
        const product = cardItemLS.product;
        const quantity = cardItemLS.quantity;
        const cardItemEl = document.createElement('div');
        cardItemEl.setAttribute('data-productid', product.id);
        cardItemEl.classList.add('cart-item');
        cardItemEl.innerHTML = `
            <div class="cart-item__thumbnail">
                <img src="${product.image}" alt="">
            </div>
            <div class="cart-item__header">
                <h5 class="cart-item__name">${product.name}</h5>
                <h6 class="cart-item__brand">${product.brand}</h6>
            </div>
             <div class="cart-item__amount-manager">
                <button data-btn="decrement-item" class="cart-item__decrement-btn">-</button>
                <span data-item="quantity-display" class="cart-item__display-amount">${quantity}</span>
                <button data-btn="increment-item" class="cart-item__increment-btn">+</button>
            </div>
            <div class="cart-item__price">
                <span data-item="price-display">
                    $ ${cardItemLS.totalPrice.toFixed(2)}
                </span>
            </div>
            <button data-btn="remove-item" class="cart-item__remove-btn">
                <svg
                    viewBox="0 0 24 24"   
                    fill="none"   
                    xmlns="http://www.w3.org/2000/svg">  
                    <g stroke-width="0"></g>  
                    <g   
                        stroke-linecap="round"   
                        stroke-linejoin="round">  
                    </g>  
                    <g>   
                        <path   
                            d="M19 5L5 19M5.00001 5L19 19"   
                            stroke-width="1.5"   
                            stroke-linecap="round"   
                            stroke-linejoin="round">  
                        </path>   
                    </g>  
                </svg>
            </button>
        `;
        cartContainer.appendChild(cardItemEl);
    });
    return cartItemsEl;
}

export function loadCartItem() {
    const cartContainer = document.querySelector('.cart-item-container');
    cartContainer.appendChild(createCartItem());
}

export function calcSubtotalCartItemPrice() {
    const cartItemsLs = getFromLS('cartItems');
    let subtotalCartItems = 0;
    cartItemsLs.forEach(cartItem => {
        subtotalCartItems += +cartItem.totalPrice;
    });
    return subtotalCartItems.toFixed(2);
}

export function displaySubtotalCartItemsPrice() {
    const subtotalEl = document.querySelector('[data-price="subtotal"]');
    subtotalEl.textContent = `$ ${calcSubtotalCartItemPrice()}`;
}

export function displayUpdatedCartItemPrice(target) {
    const cartItemsLS = getFromLS('cartItems');
    const cartItemPriceDisplay = target.parentElement.parentElement.querySelector('[data-item="price-display"]');
    const targetItemID = target.parentElement.parentElement.dataset.productid;
    cartItemsLS.forEach(cartItemLS => {
        if (cartItemLS.product.id === targetItemID) {
            cartItemPriceDisplay.textContent = `$ ${cartItemLS.totalPrice.toFixed(2)}`;
        }
    });
}

export function displayUpdatedCartItemQuantity(target) {
    const cartItemsLS = getFromLS('cartItems');
    const cartItemElQuantity = target.parentElement.querySelector('.cart-item__display-amount');
    const targetItemID = target.parentElement.parentElement.dataset.productid;
    cartItemsLS.forEach(cartItemLS => {
        if (cartItemLS.product.id === targetItemID) {
            cartItemElQuantity.innerHTML = cartItemLS.quantity;
        }
    });
}

export function removeCartItemFromDisplay(target) {
    target.parentElement.remove();
}

export function getCustomerName() {
    return prompt("What is your name?");
}

export function confirmCheckout(name) {
    const isAgreed = window.confirm(`
        Thank you for shopping with us ${name}! Your order will be shipped shortly. Press "Ok" to return to shop.
    `);
    return isAgreed;
}

export function removeCartItemsFromStock() {
    const cartItems = getFromLS('cartItems') || [];
    const productData = getFromLS('productData') || [];
    const allProducts = Object.values(productData).flatMap(gender => Object.values(gender)).flat();
    cartItems.forEach(cartItem => {
        const productToRemove = allProducts.find(product => product.id === cartItem.product.id);
        if (productToRemove) {
            (productToRemove.quantity -= cartItem.quantity);
        }
    });
    storeInLS('productData', productData);
}

export function createNewOrder(customerName) {
    const orders = getFromLS("orderData") || [];
    const id = generateNewOrderId(orders);
    const orderDate = generateOrderDate();
    const cartItems = getFromLS('cartItems');
    const totalPrice = calcSubtotalCartItemPrice();
    const order = {
        orderId: `IN${id}`,
        customerName: customerName,
        totalPrice: totalPrice,
        products: cartItems,
        orderDate: orderDate,
    };
    return order;
}

export function generateNewOrderId(orders) {
    let lastOrderId = orders.length > 0 ? orders[orders.length - 1].orderId.substring(2) : 0;
    lastOrderId++;
    return lastOrderId;
}

export function generateOrderDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const orderDateString = `${year}/${month}/${day}/${hours}/${minutes}/${seconds}`;
    return orderDateString;
}

export function storeOrderInLS(customerName) {
    const orders = getFromLS("orderData") || [];
    const newOrder = createNewOrder(customerName);
    orders.push(newOrder);
    storeInLS('orderData', orders);
}