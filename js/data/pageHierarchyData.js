import { storeInLS, getFromLS } from "../utilities/localStorage.js";

export default async function storePageHierarchyDataInLS() {
    return new Promise((resolve, reject) => {
        if (!getFromLS('pageHierarchyData')) {
            fetch('../json/pageHierarchy.json')
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
