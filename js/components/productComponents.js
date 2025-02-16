import { getSelectionStateFromLS, getFromLS } from "../utilities/localStorage.js";

export function createProductItem() {
    const currentGender = getSelectionStateFromLS('genderState');
    const currentCategory = getSelectionStateFromLS('categoryState');
    const currentProduct = getSelectionStateFromLS('productState');
    const productData = getFromLS('productData');
    const categoryProducts = productData[currentGender][currentCategory];

    const productItemContainer = document.createElement('div');
    productItemContainer.classList.add('product-item-container');
    categoryProducts.forEach(product => {
        if (currentProduct !== product.id) return;

        productItemContainer.innerHTML = `
            <section class="hero-product" style="background-image: url(${product.image});">
                <img src="${product.image}" alt="">
            </section>
            <section class="product-info">
                <div class="product-info__primary">
                    <h5 class="product-name">${product.name}</h5>
                    <h6 class="product-brand">${product.brand}</h6>
                    <h6 class="product-price">$${product.price}</h6>
                    <button data-btn="add-to-cart" class="product-add-btn">Add to cart</button>
                </div>
                <div class="product-info__secondary">
                    <div class="tab general expanded">
                        <div class="tab-header">
                            <h5>General information</h5>
                            <div class="toggle-icon">
                                <span></span>
                                <span class="open"></span>
                            </div>
                        </div>
                        <ul>
                            <li><span>Free Shipping above $75</span></li>
                            <li><span>30 days return policy</span></li>
                            <li><span>Pay safe with Ideal, PayPal or Visa</span></li>
                            <li><span>Shipped within 1 day</span></li>
                        </ul>
                    </div>
                    <div class="tab details">
                        <div class="tab-header">
                            <h5>Product details</h5>
                            <div class="toggle-icon">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <ul>
                            <li><span>Fabrique: 80% cotton, 20% polyester</span></li>
                            <li><span>Size: Large</span></li>
                            <li><span>Color: Brown</span></li>
                            <li><span>Manufactured in: Bangladesh</span></li>
                        </ul>
                    </div>
                    <div class="tab shipping">
                        <div class="tab-header">
                            <h5>Shipping details</h5>
                            <div class="toggle-icon">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <ul>
                            <li><span>Shipped same day when ordered before 2 PM<span></li>
                            <li><span>Free shipping from $75<span></li>
                            <li><span>Shipping fees:<span>
                                <ul>
                                    <li><span>Arizona: $7.25<span></li>
                                    <li><span>USA: $14.85<span></li>
                                    <li><span>EU: $34.33<span></li>
                                </ul>
                            </li>
                            <li><span>Option to pick up order at store</span></li>
                        </ul>
                    </div>
                </div>
            </section>
        `;
    });
    return productItemContainer;
}

export function loadProductItem() {
    const mainEl = document.querySelector('main');
    mainEl.appendChild(createProductItem());
}