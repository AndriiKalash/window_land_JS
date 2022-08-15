import { calcScroll } from './modals'

const images = () => {

    const workSaction = document.querySelector('.works'),
        bigImg = document.createElement('img'),
        imgPopup = document.createElement('div'),
        scroll = calcScroll();

    imgPopup.classList.add('popup');
    imgPopup.style.cssText = 'display:none; align-items: center; justify-content: center';
    workSaction.append(imgPopup);
    imgPopup.append(bigImg);

    workSaction.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href'); //получил значение атрибута(путь) из html
            bigImg.setAttribute('src', path);// установил путь на созданный img
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }
        if (target && target.classList.contains('popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    });




}

export default images;