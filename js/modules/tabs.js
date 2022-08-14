
const tabs = (tabHeaderSelector, tabsSelector, tabsContentSelector, activeClass, display = 'block') => {

    const headerTab = document.querySelector(tabHeaderSelector),
        tab = document.querySelectorAll(tabsSelector),
        content = document.querySelectorAll(tabsContentSelector);

    function hideTabContent() {
        tab.forEach(element => {
            element.classList.remove(activeClass);
        });
        content.forEach(element => {
            element.style.display = 'none'
        });

    }

    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hideTabContent()
    showTabContent()

    headerTab.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            (target.classList.contains(tabsSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabsSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });



};

export default tabs;

