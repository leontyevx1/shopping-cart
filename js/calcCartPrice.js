function calcCartPrice () {
    const cartItems = document.querySelectorAll('.list-item__wrap');
    const totalPriceValueEl = document.querySelector('.count-total__value');
    const btnTotalValue = document.querySelector('.button-total__value')
    const countValueEl = document.querySelector('.count__value');
    const discountEl = document.querySelector('.discount__value');
    const quantityEl = document.querySelector('.quantity-goods');
    const cartItemsEl = document.querySelector('[data-cart-items]')
    const cartItemsMobEl = document.querySelector('[data-cart-items-mob]')

    let totalPrice = [];
    let discountValue = 0;
    let countValueWithoutDiscount = [];
    let amountQuantity = [];

    let transformWithoutDiscount = parseInt(countValueEl.innerText.replace(/\s/g, ""))
    let transformTotalValue = parseInt(totalPriceValueEl.innerText.replace(/\s/g, ""))

    discountValue = (transformWithoutDiscount - transformTotalValue)


    cartItems.forEach(function (item) {

        let attributeNumber = item.getAttribute('data-id')

        readingFunction(attributeNumber);

        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('[data-price-new]');
        const priceOldEl = item.querySelector('.price-old__first');


        totalPrice.push(parseFloat(priceEl.innerText.replace(/\s/g, "")))
        countValueWithoutDiscount.push(parseFloat(priceOldEl.innerText.replace(/\s/g, "")))
        amountQuantity.push(parseInt(amountEl.innerText))
    })


    /*countValueEl - totalPriceValueEl*/

    const sumOfQuantityGoods = amountQuantity.reduce((acc, number) => acc + number, 0);
    const sumOfTotalCountWithoutDiscount = countValueWithoutDiscount.reduce((acc, number) => acc + number, 0);
    const sumTotalValue = totalPrice.reduce((acc, number) => acc + number, 0);

    totalPriceValueEl.innerText = sumTotalValue.toLocaleString();
    btnTotalValue.innerText = sumTotalValue.toLocaleString();
    countValueEl.innerText = sumOfTotalCountWithoutDiscount.toLocaleString();
    discountEl.innerText = ('\u2013 ') + discountValue.toLocaleString();
    quantityEl.innerText = sumOfQuantityGoods;
    cartItemsEl.innerText = sumOfQuantityGoods;
    cartItemsMobEl.innerText = sumOfQuantityGoods;

}


function calcProductPrice(productId, action) {
    const amountEl = document.getElementById(`product-counter-${productId}`);
    const remainsEl = document.getElementById(`product-remains-${productId}`)
    const countPlusAction = document.getElementById(`plus-${productId}`);
    const countMinusAction = document.getElementById(`minus-${productId}`);
    const deliveryNotify = document.querySelector(`[data-delivery-id='${productId}']`)

    let parseValueRemains = remainsEl ? parseInt(remainsEl.innerText) : null;
    let parseAmount = parseInt(amountEl.innerText)
    console.log(parseAmount)

    if (parseAmount >= 1) {
        countMinusAction.classList.remove('_disabled-btn-count')
    }

    if (action === 'minus') {
        parseAmount = parseAmount - 1;
        if (parseValueRemains || parseValueRemains === 0) {
            let remainsValue = ++parseValueRemains;
            remainsEl.innerText = remainsValue.toLocaleString();
        }

        if (parseValueRemains && parseValueRemains !== 0) {
            countPlusAction.classList.remove('_disabled-btn-count')
        }

        if (parseAmount === 1) {
            countMinusAction.classList.add('_disabled-btn-count')
            deliveryNotify.classList.add('_hidden')
        }
    }

    if (action === 'plus') {
        parseAmount = parseAmount + 1;
        if (parseValueRemains && parseValueRemains !== 0) {
            let remainsValue = --parseValueRemains;
            remainsEl.innerText = remainsValue.toLocaleString();
        }

        if (parseValueRemains === 0) {
            countPlusAction.classList.add('_disabled-btn-count')
            remainsEl.innerText.toLocaleString();
        }

        if (parseAmount >= 1) {
            deliveryNotify.classList.remove('_hidden')
        }
    }

    deliveryNotify.innerText = parseAmount

}

function readingFunction(idAttribute) {
    const amountEl = parseInt(document.getElementById(`product-counter-${idAttribute}`).innerText);
    const countMinusAction = document.getElementById(`minus-${idAttribute}`);


    if (amountEl === 1) {
        countMinusAction.classList.add('_disabled-btn-count')
    } else {
        countMinusAction.classList.remove('_disabled-btn-count')
    }
}