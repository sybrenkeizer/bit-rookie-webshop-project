import {
    loadLogInModal,
    closeLogInModal,
    adminLogInIsValidated,
    getLogInInput,
} from "../components/modalComponents.js";
import { navigateToDashboardPage } from "../navigation/navigate.js";

export default function loadLogInView() {
    loadLogInModal();
    document.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;
        if (target.dataset.btn === 'close-modal') {
            closeLogInModal();
        }
        if (target.dataset.btn === 'logIn') {
            let logInInput = getLogInInput();
            if (adminLogInIsValidated(logInInput)) {
                closeLogInModal();
                navigateToDashboardPage();
            }
        }
    });
}