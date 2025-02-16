export function storeInLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function getFromLS(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function removeFromLS(key) {
    localStorage.removeItem(key);
}

export function initSelectionStateInLS() {
    if (getFromLS('selectionStates')) {
        localStorage.removeItem('selectionStates');
    }
    const selectionStates = {
        genderState: null,
        categoryState: null,
        productState: null,
    };
    storeInLS('selectionStates', selectionStates);
}

export function storeSelectionStateInLS(state, selection) {
    const selectionStates = getFromLS('selectionStates');
    if (!selectionStates) {
        console.error("No selectionStates object found in local storage");
        return;
    }
    selectionStates[state] = selection;
    storeInLS('selectionStates', selectionStates);
}

export function getSelectionStateFromLS(state) {
    const selectinStates = getFromLS('selectionStates');
    if (!selectinStates) {
        console.error("No selectionStates object found in local storage");
        return null;
    }
    if (!selectinStates[state]) {
        console.error("State not found in selectionStates object in local storage");
        return null;
    }
    return selectinStates[state];
}

export function storeCartItemInLS(item) {
    const cartItems = getFromLS('cartItems') || [];
    const existingCartItem = cartItems && cartItems.find(cartItem => cartItem.product.id === item.id);
    if (existingCartItem) {
        const productInProductData = findProductInProductDataById(existingCartItem.product.id);
        if (productInProductData.quantity > existingCartItem.quantity) {
            existingCartItem.quantity++;
            existingCartItem.totalPrice += existingCartItem.product.price;
        } else {
            alert("No more of this item in stock");
            return;
        }
    } else {
        cartItems.push({
            product: item,
            quantity: 1,
            totalPrice: item.price,
        });
    }
    storeInLS('cartItems', cartItems);
}

export function storeLastVisitedPageInLS() {
    const regex = /cart\.html$/;
    const currentPage = window.location.href;
    const currentPageIsNotCart = !regex.test(currentPage);
    if (currentPageIsNotCart) {
        storeInLS('lastVisitedPage', currentPage);
    }
}

export function incrementCartItemInLS(target) {
    const cartData = getFromLS('cartItems') || [];
    const targetItemID = target.parentElement.parentElement.dataset.productid;
    const productInCartData = cartData.find(cartItem => cartItem.product.id === targetItemID);
    const productInProductData = findProductInProductDataById(targetItemID);
    if (productInCartData.quantity > productInProductData.quantity) {
        alert("No more of this item in stock");
        return;
    }
    productInCartData.quantity++;
    productInCartData.totalPrice += productInCartData.product.price;
    storeInLS('cartItems', cartData);
}

export function decrementCartItemInLS(target) {
    const cartData = getFromLS('cartItems') || [];
    const targetItemID = target.parentElement.parentElement.dataset.productid;
    const productInCartData = cartData.find(cartItem => cartItem.product.id === targetItemID);
    if (!productInCartData.quantity > 0) return;
    productInCartData.quantity--;
    productInCartData.totalPrice -= productInCartData.product.price;
    storeInLS('cartItems', cartData);
}

export function removeCartItemFromLS(target) {
    const cartData = getFromLS('cartItems') || [];
    const targetItemID = target.parentElement.dataset.productid;
    cartData.forEach((cartItem, index) => {
        if (cartItem.product.id === targetItemID) {
            cartData.splice(index, 1);
            storeInLS('cartItems', cartData);
        }
    });
}

export function findProductInProductDataById(targetId) {
    return Object.values(getFromLS('productData'))
        .flatMap(gender => Object.values(gender))
        .flat()
        .find(product => product.id === targetId);
}

export function findProductInProductDataByName(targetName) {
    return Object.values(getFromLS('productData'))
        .flatMap(gender => Object.values(gender))
        .flat()
        .find(product => product.name === targetName);
}