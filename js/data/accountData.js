import { storeInLS, getFromLS } from "../utilities/localStorage.js";

export default async function storeAccountDataInLS() {
    return new Promise((resolve, reject) => {
        if (!getFromLS('accountData')) {
            fetch('http://127.0.0.1:5500/frontend/projects/The-Webshop-18c967ec0c07-dd3cc2fac30e/json/accounts.json')
                .then(response => response.json())
                .then(json => {
                    storeInLS('accountData', json);
                    resolve();
                })
                .catch(error => {
                    console.error(error);
                    reject();
                });
        } else {
            resolve();
        }
    });
}