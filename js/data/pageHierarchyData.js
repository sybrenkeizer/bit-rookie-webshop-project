import { storeInLS, getFromLS } from "../utilities/localStorage.js";

export default async function storePageHierarchyDataInLS() {
    const url = 'http://127.0.0.1:5500/frontend/projects/The-Webshop-18c967ec0c07-dd3cc2fac30e/json/pageHierarchy.json';
    return new Promise((resolve, reject) => {
        if (!getFromLS('pageHierarchyData')) {
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    storeInLS('pageHierarchyData', json);
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