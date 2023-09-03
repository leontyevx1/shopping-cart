window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
        if (window.window.screen.width >= 641) {
            event.target.closest('.list-item__wrap').remove()
        } else {
            event.target.closest('.item_mobile').remove();
        }
    }
})

function deleteItem (id) {

    const deliveryItem = document.getElementById(`delivery-product-${id}`)
    const deliveryItemSecond = document.getElementById(`delivery-late-${id}`)

    if (window.window.screen.width >= 641) {
        deliveryItem.remove()
        if (deliveryItemSecond) {
            deliveryItemSecond.remove()
        }
    } else {
        id.closest('.item_mobile').remove();
    }
}