import { storeInLS, getFromLS } from "../utilities/localStorage.js";

export default async function storeAccountDataInLS() {
    return new Promise((resolve, reject) => {
        if (!getFromLS('accountData')) {
            fetch('./json/accounts.json')
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
