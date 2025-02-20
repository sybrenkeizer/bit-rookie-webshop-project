import { storeInLS, getFromLS } from "../utilities/localStorage.js";

export default async function storeProductDataInLS() {
    return new Promise((resolve, reject) => {
        if (!getFromLS('productData')) {
            fetch('../json/products.json')
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
