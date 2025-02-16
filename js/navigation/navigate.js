import { getFromLS, getSelectionStateFromLS } from "../utilities/localStorage.js";

export function navigateToHomePage() {
    if (window.location.pathname.includes('index')) return;
    window.location = window.location.pathname.split('/').slice(0, -2).join('/').concat(`/index.html`);
}

export function navigateToGenderPage() {
    window.location = window.location.pathname.split('/').slice(0, -1).join('/').concat(`/html/gender.html`);
}

export function navigateToCategoryPage() {
    window.location = window.location.pathname.split('/').slice(0, -1).join('/').concat(`/catalog.html`);
}

export function navigateToProductPage() {
    window.location = window.location.pathname.split('/').slice(0, -1).join('/').concat(`/product.html`);
}

export function navigateToCartPage() {
    window.location = window.location.pathname.split('/').slice(0, -1).join('/').concat(`/cart.html`);
}

export function navigateToDashboardPage() {
    window.location = window.location.pathname.split('/').slice(0, -1).join('/').concat(`/dashboard.html`);
}

export function navigateToLastVisitedPage() {
    window.location = getFromLS('lastVisitedPage');
}

export function navigateBackwards(currentLocation) {
    let baseUrl = currentLocation.slice(0, currentLocation.lastIndexOf("/"));
    const currentGenderSelection = getSelectionStateFromLS('genderState');
    const currentPage = currentLocation
        .slice(currentLocation.lastIndexOf("/"))
        .slice(0, -5);
    if (currentPage === "/gender") {
        baseUrl = baseUrl.slice(0, baseUrl.lastIndexOf("/"));
    }
    const pageHierarchyDataStructure = getFromLS('pageHierarchyData');
    let parentCurrentPage = null;
    Object.values(pageHierarchyDataStructure).forEach(page => {
        if (page.url === currentPage) {
            if (Array.isArray(page.parent)) {
                page.parent.forEach(parent => {
                    if (parent.includes(currentGenderSelection)) {
                        parentCurrentPage = parent;
                    }
                });
            } else {
                parentCurrentPage = page.parent;
            }
        }
    });

    const parentUrl = `${baseUrl}${parentCurrentPage}.html`;
    window.location = parentUrl;
}