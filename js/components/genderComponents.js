import { getSelectionStateFromLS } from "../utilities/localStorage.js";

export function createGenderHero() {
    const gender = getSelectionStateFromLS('genderState');
    const heroSectionEl = document.createElement('section');
    heroSectionEl.classList.add('hero');
    heroSectionEl.innerHTML = `
        <video
            autoplay
            muted
            loop
            class="hero-bg-video"
            poster="../assets/img/gender/${gender}/hero/img-${gender}-hero-gender-001.jpg">
            <source src="../assets/vid/${gender}/vid-${gender}-hero-gender.mp4"
            type="video/mp4">
            Your browser does not support the video
            </video>
            <div class="diagonal-slice"></div>
        <button data-category="collection-btn" data-btn="collection-link" class="section-btn hero-btn">
            <span class="text">New collection</span>
            <div class="section-btn__arrows">
                <svg   
    class="section-btn__arrows--lg"   
    version="1.1"   
    xmlns="http://www.w3.org/2000/svg"   
    xmlns:xlink="http://www.w3.org/1999/xlink"   
    viewBox="0 0 330.00 330.00"   
    xml:space="preserve"   
    transform="rotate(180)"   
    stroke-width="0.00330002">  
    <g stroke-width="0"></g>  
    <g
        stroke-linecap="round"   
        stroke-linejoin="round"   
        stroke-width="3.9600239999999998">  
    </g>  
    <g id="SVGRepo_iconCarrier">   
        <path
            d="M229.966,0.847c-6.011-2.109-12.698-0.19-16.678,4.784L93.288,155.635
            c-4.382,5.478-4.382,13.263,0.001,18.741l120,149.996c2.902,3.628,7.245,5.63,11.716,5.63
            c1.658,0,3.336-0.276,4.962-0.847c6.012-2.108,10.035-7.784,10.035-14.154v-300
            C240.001,8.63,235.978,2.955,229.966,0.847z M210.001,272.24l-85.79-107.235
            l85.79-107.241V272.24z">  
        </path>   
    </g>  
</svg>
<svg   
    class="section-btn__arrows--sm"   
    fill="#ffffff"   
    version="1.1"   
    xmlns="http://www.w3.org/2000/svg"   
    xmlns:xlink="http://www.w3.org/1999/xlink"   
    viewBox="0 0 330.00 330.00"   
    xml:space="preserve"   
    stroke="#ffffff"   
    transform="rotate(180)"   
    stroke-width="0.00330002">  
    <g stroke-width="0"></g>  
    <g
        stroke-linecap="round"   
        stroke-linejoin="round"   
        stroke="#CCCCCC"   
        stroke-width="3.9600239999999998">  
    </g>  
    <g id="SVGRepo_iconCarrier">   
        <path
            d="M229.966,0.847c-6.011-2.109-12.698-0.19-16.678,4.784L93.288,155.635
            c-4.382,5.478-4.382,13.263,0.001,18.741l120,149.996c2.902,3.628,7.245,5.63,11.716,5.63
            c1.658,0,3.336-0.276,4.962-0.847c6.012-2.108,10.035-7.784,10.035-14.154v-300
            C240.001,8.63,235.978,2.955,229.966,0.847z M210.001,272.24l-85.79-107.235
            l85.79-107.241V272.24z">  
        </path>   
    </g>  
</svg>
            </div>
        </button>
    `;
    return heroSectionEl;
}

export function createGenderCategories() {
    const gender = getSelectionStateFromLS('genderState');
    const categoriesSectionEl = document.createElement('section');
    categoriesSectionEl.classList.add('categories');
    categoriesSectionEl.innerHTML = `
        <div class="category-container">
            <a class="card category" data-category-link="jackets" data-btn="category-link">
                <span class="category-name">Jackets</span>
                <img src="../assets/img/gender/${gender}/categories/jackets/img-${gender}-jacket-001.jpg" alt="">
                <div class="img-overlay"></div>
            </a>
            <a class="card category" data-category-link="sweaters" data-btn="category-link">
                <span class="category-name">Sweaters</span>
                <img src="../assets/img/gender/${gender}/categories/sweaters/img-${gender}-sweater-001.jpg" alt="">
                <div class="img-overlay"></div>
            </a>
            <a class="card category" data-category-link="pants" data-btn="category-link">
                <span class="category-name">Pants</span>
                <img src="../assets/img/gender/${gender}/categories/pants/img-${gender}-pant-001.jpg" alt="">
                <div class="img-overlay"></div>
            </a>
            <a class="card category" data-category-link="shirts" data-btn="category-link">
                <span class="category-name">Shirts</span>
                <img src="../assets/img/gender/${gender}/categories/shirts/img-${gender}-shirt-001.jpg" alt="">
                <div class="img-overlay"></div>
            </a>
            <a class="card category" data-category-link="accessories" data-btn="category-link">
                <span class="category-name">Accessories</span>
            <img src="../assets/img/gender/${gender}/categories/accessories/img-${gender}-accessories-001.jpg" alt="">
                <div class="img-overlay"></div>
            </a>
        </div>
    `;
    return categoriesSectionEl;
}

export function createGenderStyles() {
    const gender = getSelectionStateFromLS('genderState');
    const stylesSectionEl = document.createElement('section');
    stylesSectionEl.classList.add('styles');
    stylesSectionEl.innerHTML = `
        <h2 class="styles__header">Get the look</h2>
        <div class="style">
            <button data-category="collection-btn" data-btn="collection-link" class="section-btn style__btn">
                <span class="text">New collection</span>
                <div class="section-btn__arrows">
<svg   
    class="section-btn__arrows--lg"   
    version="1.1"   
    xmlns="http://www.w3.org/2000/svg"   
    xmlns:xlink="http://www.w3.org/1999/xlink"   
    viewBox="0 0 330.00 330.00"   
    xml:space="preserve"   
    transform="rotate(180)"   
    stroke-width="0.00330002">  
    <g stroke-width="0"></g>  
    <g
        stroke-linecap="round"   
        stroke-linejoin="round"   
        stroke-width="3.9600239999999998">  
    </g>  
    <g>   
        <path
            d="M229.966,0.847c-6.011-2.109-12.698-0.19-16.678,4.784L93.288,155.635
            c-4.382,5.478-4.382,13.263,0.001,18.741l120,149.996c2.902,3.628,7.245,5.63,11.716,5.63
            c1.658,0,3.336-0.276,4.962-0.847c6.012-2.108,10.035-7.784,10.035-14.154v-300
            C240.001,8.63,235.978,2.955,229.966,0.847z M210.001,272.24l-85.79-107.235
            l85.79-107.241V272.24z">  
        </path>   
    </g>  
</svg>
<svg   
    class="section-btn__arrows--sm"   
    fill="#ffffff"   
    version="1.1"   
    xmlns="http://www.w3.org/2000/svg"   
    xmlns:xlink="http://www.w3.org/1999/xlink"   
    viewBox="0 0 330.00 330.00"   
    xml:space="preserve"   
    stroke="#ffffff"   
    transform="rotate(180)"   
    stroke-width="0.00330002">  
    <g stroke-width="0"></g>  
    <g
        stroke-linecap="round"   
        stroke-linejoin="round"   
        stroke="#CCCCCC"   
        stroke-width="3.9600239999999998">  
    </g>  
    <g>   
        <path
            d="M229.966,0.847c-6.011-2.109-12.698-0.19-16.678,4.784L93.288,155.635
            c-4.382,5.478-4.382,13.263,0.001,18.741l120,149.996c2.902,3.628,7.245,5.63,11.716,5.63
            c1.658,0,3.336-0.276,4.962-0.847c6.012-2.108,10.035-7.784,10.035-14.154v-300
            C240.001,8.63,235.978,2.955,229.966,0.847z M210.001,272.24l-85.79-107.235
            l85.79-107.241V272.24z">  
        </path>   
    </g>  
</svg>
                </div>
            </button>
            <div class="style__cube">
                <div class="img-container">
                    <img src="../assets/img/gender/${gender}/styles/img-${gender}-styles-001.png" alt="">
                </div>
            </div>
        </div>
    `;
    return stylesSectionEl;
}

export function createGenderSubBanner() {
    const subscriptionBanner = document.createElement('section');
    subscriptionBanner.classList.add('subscription');
    subscriptionBanner.innerHTML = `
        <div class="subscription__banner">
            <h3>GET 10% OFF</h3>
            <p>Subscribe to our newsletter and enjoy 10% off your next purchase, exclusive offers, and so much more!</p>
            <button class="banner-btn">SUBSCRIBE</button>
        </div>
    `;
    return subscriptionBanner;
}

export function loadGenderHero() {
    const mainEl = document.querySelector('main');
    mainEl.appendChild(createGenderHero());
}

export function loadGenderCategories() {
    const mainEl = document.querySelector('main');
    mainEl.appendChild(createGenderCategories());
}

export function loadGenderStyles() {
    const mainEl = document.querySelector('main');
    mainEl.appendChild(createGenderStyles());
}

export function loadGenderSubBanner() {
    const mainEl = document.querySelector('main');
    mainEl.appendChild(createGenderSubBanner());
}