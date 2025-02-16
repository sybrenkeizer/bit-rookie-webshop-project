import { loadProductItem } from "../components/productComponents.js";
import toggleTabs from "../utilities/toggleTabs.js";
import { getFromLS, getSelectionStateFromLS, storeCartItemInLS } from "../utilities/localStorage.js";
import { displayAmountCartItemsInNav, showNavCartBtn } from "../components/cartComponents.js";

export default function loadProductView() {
    loadProductItem();
    toggleTabs(document.querySelectorAll('.product-info__secondary > .tab'));
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target.dataset.btn === 'add-to-cart') {
            const productData = getFromLS('productData');
            const currentGender = getSelectionStateFromLS('genderState');
            const currentCategory = getSelectionStateFromLS('categoryState');
            const currentProductID = getSelectionStateFromLS('productState');
            const currentCategoryProducts = productData[currentGender][currentCategory];
            const currentItemData = currentCategoryProducts.filter(item => item.id === currentProductID)[0];
            storeCartItemInLS(currentItemData);
            showNavCartBtn();
            displayAmountCartItemsInNav();
        }
    });
}