import {
    removeInventoryItems,
    loadInventoryItems,
    toggleInventoryItem,
    updateProductDataItem,
    removeProductDataItem,
    filterProductItems,
    returnFilter,
    hideInventory,
    showOrders,
    hideOrders,
    showInventory,
    showListItemFadeOut,
    hideListItemFadeOutAtBottom,
    loadOrderItems,
    displayAmountInventoryItemsListed,
    displayAmountOrderItemsListed,
    filterOrderItems,
} from "../components/dashboardComponents.js";
import storeProductDataInLS from "../data/productData.js";
import { getFromLS, removeFromLS } from "../utilities/localStorage.js";
import { navigateToHomePage } from "../navigation/navigate.js";
import loadAddProductView from "./addProductView.js";

export default function loadDashboardView() {
    if (!getFromLS('productData')) {
        storeProductDataInLS();
    }
    removeInventoryItems();
    loadInventoryItems();
    loadOrderItems();
    showListItemFadeOut();
    displayAmountInventoryItemsListed();

    const searchInventoryInput = document.querySelector('[data-input="search-inventory"]');
    if (searchInventoryInput) {
        searchInventoryInput.addEventListener('input', (event) => {
            filterProductItems(event.target);
            displayAmountInventoryItemsListed();
            showListItemFadeOut();
        });
    }

    const searchOrderInput = document.querySelector('[data-input="search-orders"]');
    if (searchOrderInput) {
        searchOrderInput.addEventListener('input', (event) => {
            filterOrderItems(event.target);
            displayAmountOrderItemsListed();
            showListItemFadeOut();
        });
    }

    document.addEventListener('click', async (event) => {
        event.preventDefault();
        const target = event.target;
        if (target.dataset.btn === "log-out") {
            navigateToHomePage();
        }
        if (target.dataset.tab === "inventory") {
            hideOrders(target);
            showInventory(target);
        }
        if (target.dataset.tab === "orders") {
            hideInventory(target);
            showOrders(target);
            displayAmountOrderItemsListed();
        }
        if (target.dataset.btn === "inventory-list-item") {
            toggleInventoryItem(target);
        }
        if (target.dataset.btn === "save-changes") {
            updateProductDataItem(target);
            removeInventoryItems();
            loadInventoryItems();
            displayAmountInventoryItemsListed();
            filterProductItems(returnFilter());
        }
        if (target.dataset.btn === "remove-item") {
            removeProductDataItem(target);
            removeInventoryItems();
            loadInventoryItems();
            displayAmountInventoryItemsListed();
        }
        if (target.dataset.btn === "reset-product-data") {
            removeFromLS('productData');
            await storeProductDataInLS();
            removeInventoryItems();
            loadInventoryItems();
            displayAmountInventoryItemsListed();
        }
        if (target.dataset.btn === "add-product-modal") {
            loadAddProductView();
        }
    });
    const dashboardToolList = document.querySelector('.dashboard-tool-list');
    dashboardToolList.addEventListener('scroll', (event) => {
        hideListItemFadeOutAtBottom(event.target);
    });
}
