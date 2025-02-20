import { getFromLS, storeSelectionStateInLS } from '../utilities/localStorage.js';
import {
    loadGenderHero,
    loadGenderCategories,
    loadGenderStyles,
    loadGenderSubBanner,
} from '../components/genderComponents.js';
import { navigateToCategoryPage, navigateToHomePage } from '../navigation/navigate.js';

export default function loadGenderView() {
    if (!getFromLS("selectionStates") || !getFromLS("selectionStates").genderState) {
        navigateToHomePage();
    } else {
        storeSelectionStateInLS('categoryState', null);
        loadGenderHero();
        loadGenderCategories();
        loadGenderStyles();
        loadGenderSubBanner();
        document.addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.target;
            if (target.dataset.btn === 'category-link') {
                storeSelectionStateInLS('categoryState', target.dataset.categoryLink);
                navigateToCategoryPage();
            }
            if (target.dataset.btn === 'collection-link') {
                storeSelectionStateInLS('categoryState', 'collection');
                navigateToCategoryPage();
            }
        });
    }
}