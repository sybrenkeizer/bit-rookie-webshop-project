import { getFromLS, storeInLS } from "../utilities/localStorage.js";

export function createInventoryItems() {
    const inventoryList = document.querySelector('[data-inventory="product-list"]');
    const productData = getFromLS('productData');

    for (const gender of Object.keys(productData)) {
        for (const category of Object.keys(productData[gender])) {
            productData[gender][category].forEach(product => {
                const inventoryListItem = document.createElement('li');
                inventoryListItem.setAttribute('data-product-id', product.id);
                inventoryListItem.setAttribute('data-btn', 'inventory-list-item');
                if (product.quantity > 0 && product.quantity < 4) {
                    inventoryListItem.classList.add('low-stock');
                }
                if (product.quantity == 0) {
                    inventoryListItem.classList.add('out-of-stock');
                }
                inventoryListItem.innerHTML = `
                    <div class="main-row">
                        <span class="col-id">${product.id}</span>
                        <span class="col-name">${product.name}</span>
                        <span class="col-brand">${product.brand}</span>
                        <span class="col-price">$${product.price}</span>
                        <span class="col-quantity">${product.quantity}</span>
                        <span class="col-category">${category}</span>
                    </div>
                    <form action="" class="hide">
                        <div class="form-control">
                            <label for="">ID</label>
                            <input
                                data-type="id" 
                                type="text" 
                                value="${product.id}" 
                                placeholder="${product.id}">
                        </div>
                        <div class="form-control">
                            <label for="">Name</label>
                            <input 
                                data-type="name" 
                                type="text" 
                                value="${product.name}" 
                                placeholder="${product.name}">
                        </div>
                        <div class="form-control">
                            <label for="">Brand</label>
                            <input 
                                data-type="brand" 
                                type="text" value="${product.brand}" 
                                placeholder="${product.brand}">
                        </div>
                        <div class="form-control">
                            <label for="">Price</label>
                            <input 
                                data-type="price" 
                                type="text" value="${product.price}" 
                                placeholder="$ ${product.price}">
                        </div>
                        <div class="form-control">
                            <label for="">Quantity</label>
                            <input 
                                data-type="quantity" 
                                type="text" 
                                value="${product.quantity}" 
                                placeholder="${product.quantity}">
                        </div>
                        <div class="form-control">
                            <label for="">Category</label>
                            <input 
                                data-type="category" 
                                type="text" 
                                value="${category}" 
                                placeholder="${category}">
                        </div>
                        <div class="form-control">
                            <label for="">Image</label>
                            <input 
                                data-type="image" 
                                type="text"
                                value="${product.image}" 
                                placeholder="${product.image}">
                        </div>
                        <div class="form-control">
                            <img src="${product.image}" alt="" loading="lazy">
                        </div>
                        <div class="form-control">
                            <button 
                                data-btn="remove-item" 
                                class="inventory-remove-item-btn">Remove item</button>
                            <button
                                data-btn="save-changes" 
                                class="inventory-save-changes-item-btn" 
                                type="submit">Save changes</button>
                        </div>
                    </form>
                `;
                inventoryList.appendChild(inventoryListItem);
            });
        }
    }
    return inventoryList;
}

export function loadInventoryItems() {
    const inventoryListContainer = document.querySelector('[data-inventory="product-list-container"]');
    inventoryListContainer.appendChild(createInventoryItems());
}

export function removeInventoryItems() {
    const inventoryList = document.querySelector('[data-inventory="product-list"]');
    if (inventoryList && inventoryList.children) {
        Array.from(inventoryList.children).forEach(listItem => {
            listItem.remove();
        });
    }
}

export function countAmountItemsListed(list) {
    let numItems = 0;
    Array.from(list.children).forEach(item => {
        if (!item.classList.contains('hide')) {
            numItems += 1;
        }
    });
    return numItems;
}

export function displayAmountInventoryItemsListed() {
    const inventoryList = document.querySelector('[data-inventory="product-list"]');
    const amountInventoryItemsEl = document.querySelector('[data-inventory="footer"] .amount-items');
    const amountListItems = countAmountItemsListed(inventoryList);
    amountInventoryItemsEl.textContent = `${amountListItems} item${amountListItems > 1 ? "s" : ""} listed`;
}

export function displayAmountOrderItemsListed() {
    const orderList = document.querySelector('[data-orders="order-list"]');
    const amountOrderItemsEl = document.querySelector('[data-orders="footer"] .amount-items');
    const amountListItems = countAmountItemsListed(orderList);
    amountOrderItemsEl.textContent = `${amountListItems} item${amountListItems > 1 ? "s" : ""} listed`;
}

export function showListItemFadeOut() {
    const dashboardToolList = document.querySelector('.dashboard-tool-list');
    const listOverlay = document.querySelector('.list-overlay');
    const isScrollable = dashboardToolList.scrollHeight > dashboardToolList.clientHeight;
    if (isScrollable) {
        listOverlay.classList.remove('hide');
    } else {
        listOverlay.classList.add('hide');
    }
}

export function hideListItemFadeOutAtBottom(dashboardToolList) {
    const listOverlay = document.querySelector('.list-overlay');
    const isAtBottom = dashboardToolList.scrollTop + dashboardToolList.offsetHeight
        >= dashboardToolList.scrollHeight - 10;
    if (isAtBottom) {
        listOverlay.classList.add('hide');
    } else {
        listOverlay.classList.remove('hide');
    }
}

export function toggleInventoryItem(target) {
    const inventoryListItems = document.querySelectorAll('[data-inventory="product-list"] li');
    inventoryListItems.forEach(item => {
        if (target === item) {
            const itemForm = item.querySelector('form');
            if (itemForm.classList.contains('hide')) {
                itemForm.classList.remove('hide');
            } else {
                itemForm.classList.add('hide');
            }
        }
    });
}

// Concatenate all product item data and hide whatever product does not contain the input value
export function filterProductItems(target) {
    if (!target) return;
    let inputValue = target.value.toLowerCase();
    const inventoryListItems = document.querySelectorAll('[data-inventory="product-list"] li');
    inventoryListItems.forEach(item => {
        const inventoryItemHeaders = Array.from(item.firstElementChild.children);
        const concatItemText = inventoryItemHeaders.map(span => span.textContent.toLowerCase()).join(' ');
        if (concatItemText.includes(inputValue)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}

export function filterOrderItems(target) {
    if (!target) return;
    let inputValue = target.value.toLowerCase();
    const inventoryListItems = document.querySelectorAll('[data-orders="order-list"] li');
    inventoryListItems.forEach(item => {
        const inventoryItemHeaders = Array.from(item.firstElementChild.children);
        const concatItemText = inventoryItemHeaders.map(span => span.textContent.toLowerCase()).join(' ');
        if (concatItemText.includes(inputValue)) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}

// Update targeted product item but only allow unique ID's and names
export function updateProductDataItem(target) {
    const listItem = target.parentElement.parentElement.parentElement;
    const listItemId = listItem.dataset.productId;
    let productData = getFromLS('productData') || [];
    if (!productData) return;
    let productToUpdate = null;
    let genderKey,
        categoryKey,
        productIndex;
    for (const gender of Object.keys(productData)) {
        for (const category of Object.keys(productData[gender])) {
            productIndex = productData[gender][category].findIndex(product => product.id === listItemId);
            if (productIndex !== -1) {
                productToUpdate = productData[gender][category][productIndex];
                genderKey = gender;
                categoryKey = category;
                break;
            }
        }
        if (productToUpdate) {
            break;
        }
    }
    if (!productToUpdate) {
        console.error("Product not found");
        return;
    }
    const updatedValues = {};
    Array.from(listItem.querySelector('form').elements).forEach(element => {
        if (element.tagName === "INPUT") {
            updatedValues[element.dataset.type] = element.value;
        }
    });
    const {
        id: newId,
        name: newName,
    } = updatedValues;
    const idExists = productData[genderKey][categoryKey].some(product => product.id === newId
        && product.id !== productToUpdate.id);
    const nameExists = productData[genderKey][categoryKey].some(product => product.name === newName
        && product.name !== productToUpdate.name);
    if (idExists || nameExists) {
        alert("ID or Name already exists");
        return;
    }
    const updatedProductData = getFromLS('productData');
    updatedProductData[genderKey][categoryKey][productIndex] = {
        ...productToUpdate,
        ...updatedValues,
    };
    storeInLS('productData', updatedProductData);
}

export function removeProductDataItem(target) {
    const listItemId = target.parentElement.parentElement.parentElement.dataset.productId;
    const productData = getFromLS('productData') || [];
    if (!productData) return;
    for (const gender of Object.keys(productData)) {
        for (const categories of Object.keys(productData[gender])) {
            productData[gender][categories].forEach((product, index) => {
                if (product.id === listItemId) {
                    productData[gender][categories].splice(index, 1);
                }
            });
        }
    }
    storeInLS('productData', productData);
}

export function returnFilter() {
    const searchFormInput = document.querySelector('[data-input="search"]');
    if (searchFormInput.value) {
        return searchFormInput;
    } else {
        return null;
    }
}

export function showInventory() {
    const inventoryContainerEl = document.querySelector('[data-inventory="dashboard-tool-container"]');
    const inventoryTab = document.querySelector('[data-tab="inventory"]');
    inventoryContainerEl.classList.add('active');
    inventoryTab.classList.add('active');
}
export function hideInventory() {
    const inventoryContainerEl = document.querySelector('[data-inventory="dashboard-tool-container"]');
    const inventoryTab = document.querySelector('[data-tab="inventory"]');
    inventoryContainerEl.classList.remove('active');
    inventoryTab.classList.remove('active');
}

export function showOrders() {
    const ordersContainerEl = document.querySelector('[data-orders="dashboard-tool-container"]');
    const ordersTabEl = document.querySelector('[data-tab="orders"]');
    ordersContainerEl.classList.add('active');
    ordersTabEl.classList.add('active');
}
export function hideOrders() {
    const ordersContainerEl = document.querySelector('[data-orders="dashboard-tool-container"]');
    const ordersTabEl = document.querySelector('[data-tab="orders"]');
    ordersContainerEl.classList.remove('active');
    ordersTabEl.classList.remove('active');
}

export function createOrderItems() {
    const orderList = document.querySelector('[data-orders="order-list"]');
    const orderData = getFromLS('orderData') || [];
    if (!orderData) return null;
    orderData.forEach(order => {
        const amountOrderedItems = order.products.reduce((acc, product) => acc + product.quantity, 0);
        const orderListItem = document.createElement('li');
        orderListItem.setAttribute('data-btn', 'order-list-item');
        orderListItem.classList.add("order-list-item");
        orderListItem.innerHTML = `
            <div class="main-row">
                <span class="col-id">${order.orderId}</span>
                <span class="col-name">${order.customerName}</span>
                <span class="col-date">${order.orderDate}</span>
                <span class="col-price">${order.totalPrice}</span>
                <span class="col-quantity">${amountOrderedItems}</span>
            </div>
        `;
        orderList.appendChild(orderListItem);
    });
    return orderList;
}

export function loadOrderItems() {
    const orderListContainer = document.querySelector('[data-orders="order-list-container"]');
    orderListContainer.appendChild(createOrderItems());
}

export function toggleOrderItem(target) {
    if (target.classList.contains('show')) {
        target.classList.remove('show');
    } else {
        target.classList.add('show');
    }
}