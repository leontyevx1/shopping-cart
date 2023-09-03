const formMob = document.querySelector('#myFormMob');
const inputsMob = formMob.querySelectorAll('[data-input]');
const errorMessagesMob = formMob.querySelectorAll('._errorMob');
const submitButtonMob = document.querySelector('button[form="myForm"]');

submitButtonMob.addEventListener('click', function (event) {
    event.preventDefault()
    console.log(inputsMob)
    inputsMob.forEach(function (input, index) {

        validateInput(input, errorMessagesMob[index]);
    });
});

// Функция валидации

function validateInput(input, errorMessage) {

    if (input.value === '') {
        errorMessage.textContent = 'Поле должно быть заполнено'
        input.scrollIntoView({behavior: 'smooth', block: 'start'});
        input.focus();
    }
}

// Добавляем обработчик события на изменение значений полей

formMob.addEventListener('input', function (event) {

    let target = event.target;
    const validationText = /^[a-zA-Z\s]+$/;
    const validationEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    const validationPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;

    if (target.id === 'nameMob') {
        const errorMessage = document.getElementById("error-nameMob")

        if (!validationText.test(target.value)) {
            errorMessage.textContent = 'Укажите имя'
            event.target.offsetParent.classList.add('block-label-error')
        } else {
            errorMessage.textContent = ''
            event.target.offsetParent.classList.remove('block-label-error')
        }
        if (target.value === '') {
            errorMessage.textContent = ''
            event.target.offsetParent.classList.remove('block-label-error')
        }
    }
    if (target.id === 'surnameMob') {
        const errorMessage = document.getElementById("error-surnameMob")

        if (!validationText.test(target.value)) {
            errorMessage.textContent = 'Укажите фамилию'
            event.target.offsetParent.classList.add('block-label-error')
        } else {
            errorMessage.textContent = ''
            event.target.offsetParent.classList.remove('block-label-error')
        }
        if (target.value === '') {
            errorMessage.textContent = ''
            event.target.offsetParent.classList.remove('block-label-error')
        }
    }
    if (target.id === 'emailMob') {
        const errorMessage = document.getElementById("error-emailMob")

        if (!validationEmail.test(target.value)) {
            errorMessage.textContent = 'Укажите корректный email'
            event.target.offsetParent.classList.add('block-label-error')
        } else {
            errorMessage.textContent = ''
            event.target.offsetParent.classList.remove('block-label-error')
        }
        if (target.value === '') {
            errorMessage.textContent = ''
            event.target.offsetParent.classList.remove('block-label-error')
        }
    }
    if (target.id === 'phoneMob') {
        const errorMessage = document.getElementById("error-phoneMob")

        let test = target.value.replace(/\D/g, "");

        if (test.length > 0) {
            test = "+" + test;

            test = test.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3-$4-$5");
        }

        target.value = test

        if (!validationPhone.test(target.value)) {
            errorMessage.textContent = 'Неверный номер телефона'
            event.target.offsetParent.classList.add('block-label-error')
        } else {
            errorMessage.textContent = ''
            event.target.offsetParent.classList.remove('block-label-error')
        }
        if (target.value === '') {
            errorMessage.textContent = ''
            event.target.offsetParent.classList.remove('block-label-error')
        }
    }
});
