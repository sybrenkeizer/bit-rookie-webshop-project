import {
    loadCartItem,
    displaySubtotalCartItemsPrice,
    displayUpdatedCartItemPrice,
    displayUpdatedCartItemQuantity,
    displayAmountCartItemsInNav,
    removeCartItemFromDisplay,
    removeCartItemsFromStock,
    confirmCheckout,
    getCustomerName,
    storeOrderInLS,
} from "../components/cartComponents.js";
import {
    incrementCartItemInLS,
    decrementCartItemInLS,
    removeCartItemFromLS,
    storeInLS,
} from "../utilities/localStorage.js";
import { navigateToLastVisitedPage, navigateToHomePage } from "../navigation/navigate.js";

export default function loadCartPage() {
    loadCartItem();
    displaySubtotalCartItemsPrice();
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target.dataset.btn === 'increment-item') {
            incrementCartItemInLS(target);
            displaySubtotalCartItemsPrice();
            displayUpdatedCartItemPrice(target);
            displayUpdatedCartItemQuantity(target);
            displayAmountCartItemsInNav();
        }
        if (target.dataset.btn === 'decrement-item') {
            decrementCartItemInLS(target);
            displaySubtotalCartItemsPrice();
            displayUpdatedCartItemPrice(target);
            displayUpdatedCartItemQuantity(target);
            displayAmountCartItemsInNav();
        }
        if (target.dataset.btn === 'remove-item') {
            removeCartItemFromLS(target);
            removeCartItemFromDisplay(target);
            displaySubtotalCartItemsPrice();
            displayAmountCartItemsInNav();
        }
        if (target.dataset.btn === 'checkout') {
            const customerName = getCustomerName();
            if (confirmCheckout(customerName)) {
                removeCartItemsFromStock();
                storeOrderInLS(customerName);
                storeInLS('cartItems', null);
                navigateToHomePage();
            }
        }
        if (target.dataset.btn === 'display-previous-view') {
            navigateToLastVisitedPage();
        }
    });
}