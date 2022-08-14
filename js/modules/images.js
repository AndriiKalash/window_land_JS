const images = () => {
    const containerImg = document.querySelectorAll('.wow'),
        prevImg = document.querySelectorAll('.preview'),
        big = document.createElement('div'),
        background = document.createElement('div');

    background.classList.add('underBigImg');
    background.style.cssText = 'display:none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index:9; background-color:rgba(0, 0, 0, 0.5) ';
    document.body.append(background);

    const bigImg = [
        "assets/img/our_works/big_img/1.png",
        "assets/img/our_works/big_img/2.png",
        "assets/img/our_works/big_img/3.png",
        "assets/img/our_works/big_img/4.png",
        "assets/img/our_works/big_img/5.png",
        "assets/img/our_works/big_img/6.png",
        "assets/img/our_works/big_img/7.png",
        "assets/img/our_works/big_img/8.png"
    ]

    function addSelect(i) {
        big.style.textAlign = 'center';
        big.innerHTML = `<img src="${bigImg[i]}">`
        background.append(big);
        background.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function emptySelect() {
        big.innerHTML = '';
        background.style.display = 'none';
        document.body.style.overflow = '';

    }

    background.addEventListener('click', (e) => {
        const target = e.target;
        if (target && (target.classList.contains('underBigImg') ||
            target.parentNode.classList.contains('underBigImg'))) {
            emptySelect();
        }
    })

    prevImg.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            addSelect(i);
        });
    });


}

export default images;