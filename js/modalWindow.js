const body = document.body;
const btn = document.getElementById("btn");
const btnCard = document.getElementById("btn-card");
const btnBody = document.getElementById("btn-change");
const btnBodyMob = document.getElementById("btn-change-mob");
const btnBodyCard = document.getElementById("btn-change-card-body");
const btnClose = document.querySelector("#btn_close");
const btnCloseCard = document.querySelector("#btn_close-card");
const modalCard = document.getElementById('modal-card');
const modal = document.getElementById('modal');
const pointDeliveryPayment = document.querySelector(".point-delivery__address");
const cardPayment = document.querySelector(".card-number");
const bodyAddress = document.querySelector(".address");
const bodyAddressMob = document.querySelector(".name-point");
const cardBody = document.querySelector(".card-number-body");
const cardBodyMob = document.getElementById("card-body-number");
const cardBodyBtn = document.getElementById('btn-card-mob');


btn.addEventListener("click", btnHandler);
btnBody.addEventListener("click", btnHandler);
btnBodyMob.addEventListener("click", btnHandler);
btnClose.addEventListener("click", btnCloseHandler);
btnBodyCard.addEventListener("click", btnHandlerCard);
btnCard.addEventListener("click", btnHandlerCard);
btnCloseCard.addEventListener("click", btnCloseHandlerCard);
cardBodyBtn.addEventListener("click", btnHandlerCard);

function btnHandler(e) {
    e.preventDefault();
    body.classList.add("lock");
    modal.classList.add("modal--open");
}

function btnHandlerCard(e) {
    e.preventDefault();
    body.classList.add("lock");
    modalCard.classList.add("modal--open");
}

function btnCloseHandler(e) {
    e.preventDefault();
    body.classList.remove("lock");
    modal.classList.remove("modal--open");
}

function btnCloseHandlerCard(e) {
    e.preventDefault();
    body.classList.remove("lock");
    modalCard.classList.remove("modal--open");
}

window.addEventListener("click", function (e) {
    if (e.target == modal) {
        body.classList.remove("lock");
        modal.classList.remove("modal--open");
    }
    if (e.target == modalCard) {
        body.classList.remove("lock");
        modalCard.classList.remove("modal--open");
    }
});

function confirmSelection() {
    let selectedStreet = document.querySelector('input[name="street"]:checked').value;
    pointDeliveryPayment.innerText = selectedStreet;
    bodyAddress.innerText = selectedStreet;
    bodyAddressMob.innerText = selectedStreet;
    body.classList.remove("lock");
    modal.classList.remove("modal--open");
}

function confirmSelectionCard() {
    let selectedCard = document.querySelector('input[name="card"]:checked').value;
    cardPayment.innerText = selectedCard;
    cardBody.innerText = selectedCard;
    cardBodyMob.innerText = selectedCard;
    body.classList.remove("lock");
    modalCard.classList.remove("modal--open");
}

function deleteAddress(id) {
    const modalAddressItem = document.getElementById(`address-item-${id}`);
    modalAddressItem.remove()
}