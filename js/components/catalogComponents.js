import { getFromLS, getSelectionStateFromLS } from "../utilities/localStorage.js";

export function createCatalogHero() {
    const gender = getSelectionStateFromLS('genderState');
    const videoContainerEl = document.createElement('div');
    videoContainerEl.classList.add('video-container');
    videoContainerEl.innerHTML = `
        <video 
            playsinline
            autoplay
            muted
            loop
            poster="../assets/img/gender/${gender}/hero/img-${gender}-hero-catalog-001.jpg">
            <source src="../assets/vid/${gender}/vid-${gender}-hero-category.mp4"
            type="video/mp4">
        </video>
        <div class="video-divider"></div>
        <div class="video-shadow-lg"></div>
        <div class="video-shadow-sm"></div>
    `;
    return videoContainerEl;
}

export function createCatalogProducts() {
    const productGridEl = document.createElement('div');
    productGridEl.classList.add('product-grid');
    const productData = getFromLS('productData');
    const currentGender = getSelectionStateFromLS('genderState');
    const currentCategory = getSelectionStateFromLS('categoryState');
    const products = productData[currentGender][currentCategory];
    products.forEach(product => {
        if (product.quantity == 0) return;
        const productEl = document.createElement('a');
        productEl.classList.add('product');
        productEl.setAttribute('data-productID', product.id);
        productEl.setAttribute('data-btn', 'product-link');
        productEl.innerHTML = `
            <img src="${product.image}" alt="" loading="lazy">
            <div class="product-text">
                <h5 class="product-text__title">${product.name}</h5>
                <h6 class="product-text__subtitle">${product.brand}</h6>
                <span class="product-text__price">$ ${product.price}</span>
            </div>
        `;
        productGridEl.appendChild(productEl);
    });
    return productGridEl;
}

export function loadCatalogHero() {
    const categoryHero = document.querySelector('.hero');
    categoryHero.appendChild(createCatalogHero());
}

export function loadCatalogProducts() {
    const productContainer = document.querySelector('.product-container');
    productContainer.appendChild(createCatalogProducts());
}