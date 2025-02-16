import { getFromLS } from "../utilities/localStorage.js";

export function createHeaderBrand() {
    const brandEl = document.createElement('span');
    brandEl.classList.add('brand', 'brand-component');
    brandEl.innerHTML = `<a data-navigation="home-page">ZORAH</a>`;
    return brandEl;
}

export function createHeaderNav() {
    const navEl = document.createElement('nav');
    navEl.classList.add('navigation-component');
    navEl.innerHTML = `
        <ul>
            <li class="cart">
                <a data-btn="nav-cart" href="#">
<svg class="svg-cart" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" 
  enable-background="new 0 0 32 32" xml:space="preserve">
  <g stroke-width="0"></g>
  <g stroke-linecap="round" stroke-linejoin="round"></g>
  <g>
    <g>
      <path d="M1.683,32h28.635c0.442,0,0.86-0.194,1.146-0.531
        c0.286-0.338,0.407-0.782,0.334-1.218l-3.538-21C28.137,8.526,27.515,8,26.779,8H22V6
        c0-3.309-2.691-6-6-6s-6,2.691-6,6v2H5.221C4.485,8,3.863,8.526,3.741,9.251l-3.538,21
        c-0.073,0.436,0.048,0.88,0.334,1.218C0.823,31.806,1.24,32,1.683,32z M11,6c0-2.757,2.243-5,5-5
        s5,2.243,5,5v2H11V6z M4.728,9.417C4.768,9.175,4.976,9,5.221,9H10v4c0,0.276,0.224,0.5,0.5,0.5
        S11,13.276,11,13V9h10v4c0,0.276,0.224,0.5,0.5,0.5S22,13.276,22,13V9h4.779c0.245,0,0.453,0.175
        ,0.493,0.417l3.538,21c0.025,0.147-0.015,0.292-0.111,0.406S30.467,31,30.317,31H1.683
        c-0.149,0-0.285-0.063-0.382-0.177s-0.136-0.258-0.111-0.406L4.728,9.417z">
      </path>
    </g>
  </g>
</svg>
                </a>
                <span class="card-item-count"></span>
            </li>
            <li class="account">
                <a data-btn="nav-account" href="#">
<svg class="svg-account" viewBox="0 0 128 128" id="Layer_1" version="1.1" 
  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <g stroke-width="0"></g>
  <g stroke-linecap="round" stroke-linejoin="round"></g>
  <g>
    <g>
      <path d="M30,49c0,18.7,15.3,34,34,34s34-15.3,34-34S82.7,15,64,15S30,30.3,30,49z M90,49
        c0,14.3-11.7,26-26,26S38,63.3,38,49s11.7-26,26-26S90,34.7,90,49z">
      </path>
      <path d="M24.4,119.4C35,108.8,49,103,64,103s29,5.8,39.6,16.4l5.7-5.7C97.2,101.7,81.1,95,64,95
        s-33.2,6.7-45.3,18.7L24.4,119.4z">
      </path>
    </g>
  </g>
</svg>
</a>
            </li>
        </ul>
    `;
    return navEl;
}

export function createHeaderBreadcrumbs() {
    const currentGender = getFromLS('selectionStates').genderState;
    const currentCategory = getFromLS('selectionStates').categoryState;
    const previousPage = getFromLS('lastVisitedPage');
    const breadcrumbsEl = document.createElement('div');
    breadcrumbsEl.classList.add('breadcrumbs', 'breadcrumbs-component');
    breadcrumbsEl.innerHTML = `
        ${previousPage ? `<button data-btn="breadcrumb-backwards" class="breadcrumb navigate-backwards-btn">
<svg   
    viewBox="-4.5 0 20 20"   
    height="32px"   
    width="32px"   
    version="1.1"   
    xmlns="http://www.w3.org/2000/svg"   
    xmlns:xlink="http://www.w3.org/1999/xlink"   
    fill="#000000">  
    <g stroke-width="0"></g>  
    <g   
        stroke-linecap="round"   
        stroke-linejoin="round">  
    </g>  
    <g>   
        <title>arrow_left [#334]</title>   
        <desc>Created with Sketch.</desc>   
        <defs></defs>   
        <g stroke="none" stroke-width="1" fill-rule="evenodd">   
            <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -6679.000000)">   
                <g id="icons" transform="translate(56.000000, 160.000000)">   
                    <path   
                        d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074
                        L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987
                        C330.406,6530.453 329.035,6529.024 338.61,6539"   
                        id="arrow_left-[#334]">   
                    </path>   
                </g>   
            </g>   
        </g>   
    </g>  
</svg>
            </button>` : ''}
            ${currentGender ? `<span data-breadcrumb="gender" class="breadcrumb breadcrumb-gender">
                     ${currentGender} /
                   </span>` : ''}
              ${currentCategory ? `<span data-breadcrumb="category" class="breadcrumb breadcrumb-category">
                     ${currentCategory} /
                   </span>` : ''}
    `;
    return breadcrumbsEl;
}

export function loadHeaderBrand() {
    const mainHeader = document.querySelector('.main-header');
    mainHeader.appendChild(createHeaderBrand());
}

export function loadHeaderNav() {
    const mainHeader = document.querySelector('.main-header');
    mainHeader.appendChild(createHeaderNav());
}

export function loadHeaderBreadcrumbs() {
    const mainHeader = document.querySelector('.main-header');
    mainHeader.appendChild(createHeaderBreadcrumbs());
}

export function shrinkNavOnScroll() {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.main-header');
        const brand = document.querySelector('.main-header .brand');
        const links = document.querySelector('.main-header ul');
        const breadcrumbs = document.querySelector('.main-header .breadcrumbs');

        if (header && brand && links && breadcrumbs) {
            if (window.pageYOffset > 0) {
                header.classList.add('scroll-nav__header');
                brand.classList.add('scroll-nav__brand');
                links.classList.add('scroll-nav__links');
                breadcrumbs.classList.add('scroll-nav__breadcrumbs');
            } else {
                header.classList.remove('scroll-nav__header');
                brand.classList.remove('scroll-nav__brand');
                links.classList.remove('scroll-nav__links');
                breadcrumbs.classList.remove('scroll-nav__breadcrumbs');
            }
        }
    });
}