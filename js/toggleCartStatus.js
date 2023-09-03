function toggleCartStatus() {
    const cartWrapper = document.querySelector('.accordion__body')
    const cartEmptyBadge = document.querySelector('[data-cart-empty]')
    const mainContainer = document.querySelector('.main-basket__container')

    const observer = new MutationObserver(function(mutationsList, observer) {
        if (cartWrapper.children.length > 0) {
            cartEmptyBadge.classList.add('_hidden')
        } else {
            cartEmptyBadge.classList.remove('_hidden')
            mainContainer.classList.add('_hidden')
        }
    });

    observer.observe(cartWrapper, { childList: true });
}