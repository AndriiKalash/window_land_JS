import checkNumInputs from './checkNumInputs'
import validateForm from './validateForm'

const forms = (state) => {

    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');
    // phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    checkNumInputs('input[name="user_phone"]');// вывел в отдельный модуль
    // phoneInputs.forEach(item => {
    //     item.addEventListener('input', () => {
    //         item.value = item.value.replace(/\D/, '');
    //     });
    // });

    const masage = {
        loading: "Загрузка...",
        success: "Спасибо мы с вами свяжемся",
        failuere: "Что-то пошло не так..."
    };

    const postData = async (url, data) => {
        document.querySelector(".status").textContent = masage.loading;
        let res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });
        return await res.json();
    };


    const clearInputs = () => {
        inputs.forEach(element => {
            element.value = '';
        });
    }

    form.forEach(element => {
        element.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMasage = document.createElement('div');
            statusMasage.classList.add("status");
            element.append(statusMasage);

            const formData = new FormData(element);
            //фильтр для окна доп. данными (чтоб подтягивались данные и state)
            if (element.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
                .then(res => {
                    console.log(res);
                    statusMasage.textContent = masage.success;
                })
                .catch(() => statusMasage.textContent = masage.failuere)
                .finally(() => {
                    clearInputs();
                    // state очищается после отправки:
                    let stateArr = Object.keys(state);
                    for (let i = 0; i < stateArr.length; i++) {
                        delete state[stateArr[i]];
                    }
                    validateForm(state);
                    setInterval(() => {
                        statusMasage.remove();
                    }, 5000);
                })


        });
    });
};





export default forms;