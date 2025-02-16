import {
    findProductInProductDataById,
    findProductInProductDataByName,
    getFromLS,
    storeInLS,
} from "../utilities/localStorage.js";

export function createLogInModal() {
    const modalLogInEl = document.createElement('div');
    modalLogInEl.classList.add('modal-logIn');
    modalLogInEl.innerHTML = `
        <div class="modal-logIn__content">
            <header>
                <h1>Log In</h1>
                <button data-btn="close-modal" class="close-modal-btn">
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g stroke-width="0"></g>
  <g stroke-linecap="round" stroke-linejoin="round"></g>
  <g>
    <path d="M19 5L5 19M5.00001 5L19 19" 
      stroke-width="1.5" 
      stroke-linecap="round" 
      stroke-linejoin="round">
    </path>
  </g>
</svg>
            </header>
            <form >
                <div class="form-control">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username">
                </div>
                <div class="form-control">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password">
                </div>
                <div class="form-control form-btns">
                    <button type=button disabled>Register</button>
                    <button data-btn="logIn" type="submit" class="log-in-btn" >Log in</button>
                </div>
            </form>
        </div>
    `;
    return modalLogInEl;
}

export function loadLogInModal() {
    const bodyEl = document.querySelector('body');
    bodyEl.appendChild(createLogInModal());
}
export function closeLogInModal() {
    const modalEl = document.querySelector('.modal-logIn');
    modalEl.remove();
}

export function adminLogInIsValidated(logInInput) {
    const adminAccountData = getFromLS('accountData').admin;
    const adminUserNameValidated = adminAccountData.user === logInInput.user;
    const adminPasswordValidated = adminAccountData.password === logInInput.password;
    if (adminUserNameValidated && adminPasswordValidated) {
        return true;
    }
    return false;
}

export function getLogInInput() {
    const modalLogIn = document.querySelector('.modal-logIn');
    const userName = modalLogIn.querySelector('#username').value;
    const userPassword = modalLogIn.querySelector('#password').value;
    return {
        user: userName,
        password: userPassword,
    };
}

export function createAddNewProductModal() {
    const modalLogInEl = document.createElement('div');
    modalLogInEl.classList.add('modal-addProduct');
    modalLogInEl.innerHTML = `
        <div class="modal-addProduct__content">
            <header>
                <h1>Add Product</h1>
                <button data-btn="close-modal" class="close-modal-btn">
                    <svg 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <g stroke-width="0">
                        </g>
                        <g 
                            stroke-linecap="round" stroke-linejoin="round">
                        </g>
                        <g> 
                            <path d="M19 5L5 19M5.00001 5L19 19" 
                                stroke-width="1.5" 
                                stroke-linecap="round" 
                                stroke-linejoin="round">
                            </path> 
                        </g>
                    </svg>
                </button>
            </header>
            <form action="" class="">
                <div class="form-control">
                    <label for="">ID</label>
                    <input type="text" data-type="id" type="text">
                </div>
                <div class="form-control">
                    <label for="">Name</label>
                    <input type="text" data-type="name" type="text">
                </div>
                <div class="form-control">
                    <label for="">Brand</label>
                    <input type="text" data-type="brand" type="text">
                </div>
                <div class="form-control">
                    <label for="">Price</label>
                    <input type="number" data-type="price" type="text">
                </div>
                <div class="form-control">
                    <label for="">Quantity</label>
                    <input type="number" data-type="quantity" type="text">
                </div>
                <div class="form-control">
                    <label for="">Gender</label>
                    <select data-type="gender" name="select-gender">
                        <option selected disabled>Select gender</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="unisex">Unisex</option>
                    </select>
                </div>
                <div class="form-control">
                    <label for="">Category</label>
                    <select data-type="category" name="select-category">
                        <option selected disabled>Select category</option>
                        <option value="jackets">Jackets</option>
                        <option value="pants">Pants</option>
                        <option value="sweaters">Sweaters</option>
                        <option value="shirts">Shirts</option>
                        <option value="accessories">Accessories</option>
                    </select>
                </div>
                <div class="form-control">
                    <label for="">Image</label>
                    <input type="text" data-type="image" type="text">
                </div>
                <div class="form-control">
                    <button 
                        data-btn="add-product" 
                        class="add-product-btn">Add Item
                    </button>
                </div>
            </form>
        </div>
    `;
    return modalLogInEl;
}

export function loadAddNewProductModal() {
    const bodyEL = document.querySelector('body');
    bodyEL.appendChild(createAddNewProductModal());
}

export function closeAddNewProductModal() {
    const modalEl = document.querySelector('.modal-addProduct');
    if (modalEl) {
        modalEl.remove();
    }
}

export function getAddNewProductFormInputElements() {
    const newProductFormData = {
        id: document.querySelector('.modal-addProduct [data-type="id"]'),
        name: document.querySelector('.modal-addProduct [data-type="name"]'),
        brand: document.querySelector('.modal-addProduct [data-type="brand"]'),
        price: document.querySelector('.modal-addProduct [data-type="price"]'),
        quantity: document.querySelector('.modal-addProduct [data-type="quantity"]'),
        gender: document.querySelector('.modal-addProduct [data-type="gender"]'),
        category: document.querySelector('.modal-addProduct [data-type="category"]'),
        image: document.querySelector('.modal-addProduct [data-type="image"]'),
    };
    return newProductFormData;
}

export function storeNewProductInLS() {
    const addNewProductFormInputElements = getAddNewProductFormInputElements();
    const productGender = addNewProductFormInputElements.gender.value;
    const productCategory = addNewProductFormInputElements.category.value;
    const productData = getFromLS('productData');
    const newProductData = {
        id: addNewProductFormInputElements.id.value,
        name: addNewProductFormInputElements.name.value,
        brand: addNewProductFormInputElements.brand.value,
        category: addNewProductFormInputElements.category.value,
        price: addNewProductFormInputElements.price.value,
        image: addNewProductFormInputElements.image.value,
        quantity: addNewProductFormInputElements.quantity.value,
    };
    productData[productGender][productCategory].push(newProductData);
    storeInLS('productData', productData);
}

export function validateAddNewProductForm() {
    const addNewProductFormInputElements = getAddNewProductFormInputElements();
    let allFieldsValidated = true;
    Object.values(addNewProductFormInputElements).forEach(inputField => {
        if (!inputField.value) {
            allFieldsValidated = false;
        }
        if (!inputField.value || inputField.value.includes('Select')) {
            inputField.classList.add('warning');
        } else {
            inputField.classList.remove('warning');
        }
        if (inputField.dataset.type === "id") {
            if (findProductInProductDataById(inputField.value)) {
                inputField.classList.add('warning');
                alert("ID is already in use, please choose another");
            }
        }
        if (inputField.dataset.type === "name") {
            if (findProductInProductDataByName(inputField.value)) {
                inputField.classList.add('warning');
                alert("Prodct name is already in use, please choose another");
            }
        }
    });
    return allFieldsValidated;
}