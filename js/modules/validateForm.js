
function validateForm(state) {
    const btnSubmitFirst = document.querySelector('.popup_calc_button'),
        btnSubmitSecond = document.querySelector('.popup_calc_profile_button');

    let stateArr = Object.keys(state);
    console.log(stateArr);
    stateArr.length < 3 ? btnSubmitFirst.disabled = true : btnSubmitFirst.disabled = false;
    stateArr.length < 5 ? btnSubmitSecond.disabled = true : btnSubmitSecond.disabled = false;

}

export default validateForm;