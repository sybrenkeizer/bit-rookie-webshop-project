import { loadCatalogProducts, loadCatalogHero } from "../components/catalogComponents.js";
import { getFromLS, storeSelectionStateInLS } from "../utilities/localStorage.js";
import { navigateToHomePage, navigateToProductPage } from "../navigation/navigate.js";

export default function loadCatalogView() {
    if (!getFromLS("selectionStates") || !getFromLS("selectionStates").categoryState) {
        navigateToHomePage();
        return;
    }
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