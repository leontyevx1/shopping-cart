const form = document.querySelector('#myForm');
const inputs = form.querySelectorAll('[data-input-form]');
const errorMessages = form.querySelectorAll('.error');
const submitButton = document.querySelector('button[form="myForm"]');

console.log(form)

submitButton.addEventListener('click', function (event) {
    event.preventDefault()
    inputs.forEach(function (input, index) {
        validateInput(input, errorMessages[index]);
    });
});

// Функция валидации

function validateInput(input, errorMessage) {

    if (input.value === '') {
        errorMessage.textContent = 'Поле должно быть заполнено'
        input.scrollIntoView({ behavior: 'smooth', block: 'start' });
        input.focus();
    }
}

// Добавляем обработчик события на изменение значений полей

form.addEventListener('input', function (event) {

    let target = event.target;
    const validationText = /^[a-zA-Z\s]+$/;
    const validationEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    const validationPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;

    if (target.id === 'name') {
        const errorMessage = document.getElementById("error-name")

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
    if (target.id === 'surname') {
        const errorMessage = document.getElementById("error-surname")

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
    if (target.id === 'email') {
        const errorMessage = document.getElementById("error-email")

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
    if (target.id === 'phone') {
        const errorMessage = document.getElementById("error-phone")

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
