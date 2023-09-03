function payNow() {
    const checkboxPay = document.getElementById('checkboxPay');
    const optionPay = document.querySelector('.options-span');
    const orderBtn = document.querySelector('.order');
    const payBlock = document.querySelector('.pay-style');

    if (checkboxPay.checked) {
        optionPay.classList.add('_hidden')
        orderBtn.classList.add('_hidden')
        payBlock.classList.remove('_hidden')
    } else {
        optionPay.classList.remove('_hidden')
        orderBtn.classList.remove('_hidden')
        payBlock.classList.add('_hidden')

    }
}