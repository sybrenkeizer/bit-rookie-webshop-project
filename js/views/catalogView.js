import { loadCatalogProducts, loadCatalogHero } from "../components/catalogComponents.js";
import { storeSelectionStateInLS } from "../utilities/localStorage.js";
import { navigateToProductPage } from "../navigation/navigate.js";

export default function loadCatalogView() {
    loadCatalogHero();
    loadCatalogProducts();
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target.dataset.btn === 'product-link') {
            storeSelectionStateInLS('productState', target.dataset.productid);
            navigateToProductPage();
        }
    });
}