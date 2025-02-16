export default function toggleTabs(tabs) {
    if (!tabs || !tabs.length) return;
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(tabToRemove => {
                tabToRemove.classList.remove('expanded');
                tabToRemove.querySelector('.toggle-icon > span:last-child').classList.remove('open');
            });
            tab.classList.add('expanded');
            const icon = tab.querySelector('.toggle-icon > span:last-child');
            icon.classList.add('open');
        });
    });
}