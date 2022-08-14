const modals = () => {

    function bindModal(trigerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

        const triger = document.querySelectorAll(trigerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]')

        triger.forEach(element => {
            element.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                clearInterval(showModalByTime);
            });
        });

        function modalClose() {
            windows.forEach(item => {
                item.style.display = 'none';
            });
            modal.style.display = "none";
            document.body.style.overflow = "";
        }

        close.addEventListener('click', modalClose);

        modal.addEventListener("click", (e) => {
            if (e.target == modal && closeClickOverlay) {
                modalClose();
            }
        })
    }

    const showModalByTime = setTimeout(() => {
        document.querySelector(".popup_engineer").style.display = "block";
        document.body.style.overflow = "hidden";
    }, 60000);

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);



};

export default modals;