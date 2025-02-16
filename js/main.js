// TODO - dashboard list view is not supposed to reset once list item is edited.
// TODO - Fix price number formating;
// TODO - Fix hardcoded data in createAddNewProductModal();
// TODO - Reset dashboard filter search input value on tab change;

import loadHomeView from './views/homeView.js';
import loadGenderView from './views/genderView.js';
import loadCatalogView from './views/catalogView.js';
import loadProductView from './views/productView.js';
import loadLogInView from './views/logInView.js';
import { showNavCartBtn, displayAmountCartItemsInNav } from './components/cartComponents.js';
import {
    shrinkNavOnScroll,
    loadHeaderBrand,
    loadHeaderBreadcrumbs,
    loadHeaderNav,
} from './components/headerComponents.js';
import { loadFooterMinimal, loadFooterExtended } from "./components/footerComponents.js";
import { navigateToCartPage, navigateToHomePage, navigateBackwards } from './navigation/navigate.js';
import toggleTabs from './utilities/toggleTabs.js';
import loadCartPage from './views/cartView.js';
import { storeLastVisitedPageInLS } from './utilities/localStorage.js';
import loadDashboardView from './views/dashboardView.js';

function initApp() {
    const currentPage = window.location.pathname;
    if (currentPage.includes('/index')) {
        loadHomeView();
        loadHeaderBrand();
        loadFooterMinimal();
        storeLastVisitedPageInLS();
    }
    if (currentPage.includes('/gender')) {
        loadGenderView();
        loadHeaderBrand();
        loadHeaderNav();
        loadHeaderBreadcrumbs();
        storeLastVisitedPageInLS();
    }
    if (currentPage.includes('/catalog')) {
        loadCatalogView();
        loadHeaderBrand();
        loadHeaderNav();
        loadHeaderBreadcrumbs();
        storeLastVisitedPageInLS();
    }
    if (currentPage.includes('/product')) {
        loadProductView();
        loadHeaderBrand();
        loadHeaderNav();
        loadHeaderBreadcrumbs();
        storeLastVisitedPageInLS();
    }
    if (currentPage.includes('/cart')) {
        loadCartPage();
        loadHeaderBrand();
        loadHeaderNav();
        loadHeaderBreadcrumbs();
    }
    if (currentPage.includes('dashboard')) {
        loadDashboardView();
    }
    if ((!currentPage.includes('/index'))
        && (!currentPage.includes('/cart'))
        && (!currentPage.includes('dashboard'))
    ) {
        loadFooterExtended();
        loadFooterMinimal();
    }

    shrinkNavOnScroll();
    showNavCartBtn();
    displayAmountCartItemsInNav();
    toggleTabs(document.querySelectorAll('.footer-info > .tab'));

    document.addEventListener('click', (event) => {
        const target = event.target;
        if (target.dataset.navigation === 'home-page') {
            navigateToHomePage();
        }
        if (target.dataset.btn === 'nav-account') {
            loadLogInView();
        }
        if (target.dataset.btn === 'nav-cart') {
            navigateToCartPage();
        }
        if (target.dataset.btn === 'breadcrumb-backwards') {
            navigateBackwards(window.location.href);
        }
    });
}

document.addEventListener('DOMContentLoaded', initApp);


