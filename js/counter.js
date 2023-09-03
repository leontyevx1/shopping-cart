window.addEventListener('click', function (event) {

    let counter;
    let newPriceEl;
    let pricePerEl;
    let oldPriceEl;
    let pricePerOldEl;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.count__input-number');
        const goodsCard = event.target.closest('._target-price');
        counter = counterWrapper.querySelector('[data-counter]');
        newPriceEl = goodsCard.querySelector('[data-price-new]');
        let newPriceTransform = newPriceEl.innerText;
        oldPriceEl = goodsCard.querySelector('[data-price-old]');
        let oldPriceTransform = oldPriceEl.innerText;
        pricePerEl = goodsCard.querySelector('[data-price]').innerText;
        pricePerOldEl = goodsCard.querySelector('[data-old]').innerText;

        if (event.target.dataset.action === 'plus') {
            counter.innerText = ++counter.innerText

            let productNumbersNew = (parseFloat(pricePerEl.replace(/\s/g, "")) * parseInt(counter.innerText))
            newPriceEl.innerText = Math.ceil(productNumbersNew).toLocaleString()
            let productNumbersOld = (parseFloat(pricePerOldEl.replace(/\s/g, "")) * parseInt(counter.innerText))
            oldPriceEl.innerText = Math.ceil(productNumbersOld).toLocaleString()
            calcCartPrice()
        }
        if (event.target.dataset.action === 'minus') {

            if (parseInt(counter.innerText) > 1) {
                let productNumbersNew = (parseFloat(newPriceTransform.replace(/\s/g, ""))) - parseInt(pricePerEl.replace(/\s/g, ""))
                newPriceEl.innerText = Math.ceil(productNumbersNew).toLocaleString()
                let productNumbersOld = (parseFloat(oldPriceTransform.replace(/\s/g, ""))) - parseInt(pricePerOldEl.replace(/\s/g, ""))
                oldPriceEl.innerText = Math.ceil(productNumbersOld).toLocaleString()
                counter.innerText = --counter.innerText
                calcCartPrice()
            }
        }
    }
    toggleCartStatus()
})

