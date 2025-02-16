import { storeInLS, getFromLS } from "../utilities/localStorage.js";

export default async function storeProductDataInLS() {
    return new Promise((resolve, reject) => {
        if (!getFromLS('productData')) {
            fetch('http://127.0.0.1:5500/frontend/projects/The-Webshop-18c967ec0c07-dd3cc2fac30e/json/products.json')
                .then(response => response.json())
                .then(json => {
                    storeInLS('productData', json);
                    resolve();
                })
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        } else {
            resolve();
        }
    });
}
