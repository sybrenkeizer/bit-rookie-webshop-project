import { loadInventoryItems, removeInventoryItems } from "../components/dashboardComponents.js";
import {
    closeAddNewProductModal,
    loadAddNewProductModal,
    storeNewProductInLS,
    validateAddNewProductForm,
} from "../components/modalComponents.js";

export default function loadAddProductView() {
    loadAddNewProductModal();
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target.dataset.btn === "add-product") {
            if (!validateAddNewProductForm()) return;
            storeNewProductInLS();
            removeInventoryItems();
            loadInventoryItems();
            closeAddNewProductModal();
        }
        if (target.dataset.btn === "close-modal") {
            closeAddNewProductModal();
        }
    });
}