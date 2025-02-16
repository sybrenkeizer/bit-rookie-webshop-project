import { initSelectionStateInLS, storeSelectionStateInLS } from "../utilities/localStorage.js";
import { navigateToGenderPage } from "../navigation/navigate.js";
import storeProductDataInLS from "../data/productData.js";
import storePageHierarchyDataInLS from "../data/pageHierarchyData.js";
import storeAccountDataInLS from "../data/accountData.js";

export default function loadHomeView() {
    storeProductDataInLS();
    storePageHierarchyDataInLS();
    storeAccountDataInLS();
    initSelectionStateInLS();
    document.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;
        if (target.dataset.btn === 'gender-link') {
            storeSelectionStateInLS('genderState', target.dataset.gender);
            navigateToGenderPage();
        }
    });
}