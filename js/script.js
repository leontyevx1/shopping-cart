window.onload = function () {

    const wrapper = document.querySelector('.accordion__body');
    const itemsWrapperMob = document.querySelector('.items-wrapper');
    const delWrapper = document.getElementById('delivery-items');
    const delLateWrap = document.getElementById('delivery-late-222');
    const bodyModal = document.querySelector('.modal__body');
    const bodyModalCard = document.querySelector('.modal__body-card');

    const products = [
        {
            id: '111',
            idMob: '1',
            imgSrc: 'assets/img/t-shirts.png',
            productName: 'Футболка UZcotton мужская',
            color: 'белый',
            size: '56',
            warehouse: 'Коледино WB',
            organization: 'OOO Вайлдберриз',
            price: 522,
            pricePerPiece: 522,
            pricePerPieceOld: 1051,
            oldPrice: 1051,
            remains: 2,
            counter: 1,
            ogrn: '1067746062449',
            addressOrganization: '142181, Московская область, г.о. Подольск, д Коледино, тер. Индустриальный Парк Коледино, д. 6, стр. 1',
        },
        {
            id: '222',
            idMob: '2',
            imgSrc: 'assets/img/safe-phone.png',
            productName: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
            color: 'прозрачный',
            warehouse: 'Коледино WB',
            organization: 'OOO Мегапрофстиль',
            price: 10500,
            pricePerPiece: 10500.235,
            oldPrice: 11500,
            pricePerPieceOld: 11500.235,
            counter: 200,
            firstDate: 184,
            secondDate: 16,
            ogrn: '5167746237148',
            addressOrganization: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34',
        },
        {
            id: '333',
            idMob: '3',
            imgSrc: 'assets/img/pencils.png',
            productName: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, </br> Faber-Castell',
            warehouse: 'Коледино WB',
            organization: 'OOO Вайлдберриз',
            price: 247,
            pricePerPiece: 247,
            pricePerPieceOld: 475,
            oldPrice: 475,
            remains: 2,
            counter: 2,
            ogrn: '1067746062449',
            addressOrganization: '142181, Московская область, г.о. Подольск, д Коледино, тер. Индустриальный Парк Коледино, д. 6, стр. 1',
        }
    ]

    const addresses = [
        {
            id: 11,
            address: 'Бишкек, улица Табышалиева, 57',
        },
        {
            id: 22,
            address: 'Бишкек, улица Жукеева-Пудовкина, 77/1',
            rating: 4.99,
        },
        {
            id: 33,
            address: 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1',
            rating: 4.99,
        }
    ]

    const cards = [
        {
            id: 1,
            number: '1234 56•• •••• 1234',
            imgCard: '_mir',
        },
        {
            id: 2,
            number: '5213 44•• •••• 7124',
            imgCard: '_visa',
        },
        {
            id: 3,
            number: '8934 90•• •••• 4684',
            imgCard: '_mastercard',
        },
        {
            id: 4,
            number: '6331 31•• •••• 9131',
            imgCard: '_maestro',
        }
    ]



    const writeProduct = () => {
        products.forEach(product => {

            let pricePer = (Math.ceil(product.pricePerPiece * product.counter)).toLocaleString()
            let pricePerOld = (Math.ceil(product.pricePerPieceOld * product.counter)).toLocaleString()

            const colorElement = product.color && product.size ? `<div class="good-info__properties" id="product-properties">
                                                            <div class="good-info__color-item">
                                                            <span class="good-info__color-title">Цвет:</span>
                                                                <span class="good-info__color">${product.color}</span>
                                                            </div>
                                                            <div class="good-info__size-item">
                                                                <span class="good-info__size-title">Размер:</span>
                                                                <span class="good-info__size-value">${product.size}</span>  
                                                            </div>
                                                        </div>` : '';

            const sizeElement = product.color ? `<div class="good-info__properties" id="product-properties">
                                                            <div class="good-info__color-item">
                                                            <span class="good-info__color-title">Цвет:</span>
                                                                <span class="good-info__color">${product.color}</span>
                                                            </div>                                                        
                                                        </div>` : '';

            const remainElement = product.remains ? `<div class="remains-item">
                                                        <span>Осталось <span data-counter class="remain-item__value" id="${'product-remains-' + product.id}">${product.remains}</span> шт.</span>
                                                    </div>` : '';


            const itemHTML = `<div class="list-item__wrap" data-id=${product.id}>
                                        <div class="list-item__goods-checkbox">
                                            <div class="goods_checkbox">
                                                <label class="accordion__checkbox checkbox-with-text">
                                                    <input type="checkbox" id="checkbox${product.id}">
                                                    <span class="checkbox-with-text__decor"></span>
                                                </label>
                                            </div>
                                            <div class="goods_image">
                                                <a href="" class="img-plug list-item__good-img">
                                                    <img src=${product.imgSrc} alt="Футболка UZcotton мужская">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="goods-card">
                                            <div class="goods-card_description">
                                                <div class="name-link">
                                                    <a href="" class="good-info__title">
                                                        <span class="good-info__good-name">${product.productName}</span>
                                                    </a>
                                                </div>
                                                 ${colorElement ? colorElement : sizeElement}                                            
                                                <div class="good-info__properties good-info__properties--variable">
                                                    <p class="good-info__store">
                                                                    <span class="good-info__item">
                                                                        ${product.warehouse}
                                                                    </span>
                                                    </p>
                                                    <p class="good-info__store">
                                                                    <span class="good-info__item">
                                                                        <span>${product.organization}</span>
                                                                        <span class="good-info__tool-btn _tooltip">
                                                                            <span class="good-info__tooltip">
                                                                                <span class="tooltip-title">${product.organization}</span>
                                                                                <span>ОГРН:${product.ogrn}</span>
                                                                                <span>${product.addressOrganization}</span>
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="goods-card_price _target-price">
                                                <div class="list-item__count count">
                                                    <div class="count__input-number">
                                                        <button onclick="calcProductPrice(${product.id}, 'minus')" class="count__minus _disabled-btn-count" id="${'minus-' + product.id}" data-action='minus'></button>
                                                        <div class="count_value" id="${'product-counter-' + product.id}" data-counter>${product.counter}</div>
                                                        <button onclick="calcProductPrice(${product.id}, 'plus')" class="count__plus" id="${'plus-' + product.id}" data-action='plus'></button>
                                                    </div>
                                                    ${remainElement}
                                                    <div class="list-item__btn btn">
                                                        <button type="button" class="btn__favorite btn__favorite__icon"></button>
                                                        <button data-cart type="button" class="btn__del btn__del__icon" onclick="deleteItem(${product.id})"></button>
                                                    </div>
                                                </div>
                                                <div class="list-item__price">
                                                    <div class="list-item__price-new">
                                                        <span class="price-new__first price_currency ${(product.pricePerPiece > 999) ? 'mini-size' : ''}" id="${'product-price-' + product.id}" data-price-new>${pricePer}</span>
                                                        <span class="list-item__currency">сом</span>
                                                        <p data-price style="display: none">${product.pricePerPiece}</p>
                                                        <p data-old style="display: none">${product.pricePerPieceOld}</p>
                                                    </div>
                                                    <div class="list-item__price-old _tooltip">
                                                        <span class="price-old__first" data-price-old>${pricePerOld}</span>
                                                        <span>сом</span>
                                                        <div class="tooltip-discount">
                                                            <div class="discount-tooltip">
                                                                <span>Скидка 55%</span>
                                                                <span class="com">−300 сом</span>
                                                            </div>
                                                            <div class="discount-tooltip">
                                                                <span>Скидка покупателя 10%</span>
                                                                <span class="com">−30 сом</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
            wrapper.insertAdjacentHTML('beforeend', itemHTML);
        })
        calcCartPrice ()
    }

    const writeProductMobile = () => {
        products.forEach(product => {

            let pricePer = (Math.ceil(product.pricePerPiece * product.counter)).toLocaleString()
            let pricePerOld = (Math.ceil(product.pricePerPieceOld * product.counter)).toLocaleString()


            const colorElement = product.color ? `<div class="goods-color__mobile">
                                            <span class="name-color__mobile">Цвет:</span>
                                            <span class="color__mobile">${product.color}</span>
                                        </div>` : '';

            const remainsElement = product.remains ? `<span class="remains__mobile">Осталось <span id="product-remains-${product.idMob}">${product.remains}</span> шт.</span>` : '';

            const sizeElement = product.size ? `<span class="card-size">${product.size}</span>` : '';

            const itemHTML = `<div class="item1__mobile item_mobile _target-price" data-id="${product.idMob}">
                                <div class="item-container__mobile _first">
                                    <div class="image-goods__mobile">
                                        <label class="accordion__checkbox checkbox-with-text">
                                            <input type="checkbox" id="mobileCheckbox${product.idMob}">
                                            <span class="checkbox-with-text__decor checkbox-card"></span>
                                        </label>
                                        <a href="" class="img-plug__mobile">
                                            <img src=${product.imgSrc} alt=''>
                                        </a>
                                        ${sizeElement}
                                    </div>
                                    <div class="item-description__mobile">
                                        <div class="price__mobile">
                                            <span class="price-new__mobile ${(product.pricePerPiece > 999) ? 'mini-size-mob' : ''}" data-price-new>${pricePer + ' '}сом</span>
                                            <span class="price-old__mobile" data-price-old>${pricePerOld + ' '}сом</span>
                                            <p data-price style="display: none">${product.pricePerPiece}</p>
                                            <p data-old style="display: none">${product.pricePerPieceOld}</p>
                                        </div>
                                        <span class="goods-name__mobile">${product.productName}</span>
                                        ${colorElement}
                                        <span class="warehouse__mobile">${product.warehouse}</span>
                                    </div>
                                </div>
                                <div class="footer-card__mobile">
                                    <div class="count__input-number__mobile count__input-number">
                                        <button onclick="calcProductPrice(${product.idMob}, 'minus')" class="count__minus" id="minus-${product.idMob}" data-action="minus"></button>
                                        <div class="count_value" id="product-counter-${product.idMob}" data-counter>${product.counter}</div>
                                        <button onclick="calcProductPrice(${product.idMob}, 'plus')" class="count__plus" id="plus-${product.idMob}" data-action="plus"></button>
                                    </div>
                                    ${remainsElement}
                                    <div class="list-item__btn__mobile">
                                        <button type="button" class="btn__favorite btn__favorite__icon"></button>
                                        <button data-cart type="button" class="btn__del btn__del__icon"></button>
                                    </div>
                                </div>
                            </div>`



            itemsWrapperMob.insertAdjacentHTML('beforeend', itemHTML);
        })
        calcCartPrice ()
    }


    const writeDeliveryItems = () => {
        products.forEach(product => {
            const deliveryItem = `<span class="pack" id="delivery-product-${product.id}">
                                            <img src=${product.imgSrc} alt=${product.productName.slice(0,20)}>
                                            <span class="actions-delivery__notify" data-delivery-id="${product.id}">${product.firstDate ? product.firstDate : product.counter}</span>
                                        </span>`

            const deliveryLateDate = product.secondDate ? `<div class="delivery-date__goods">
                                                                <img src="../assets/img/safe-phone.png" alt=${product.productName}>
                                                                <span class="actions-delivery__notify">${product.secondDate}</span>
                                                            </div>` : ''


            delWrapper.insertAdjacentHTML('beforeend', deliveryItem);
            delLateWrap.insertAdjacentHTML('beforeend', deliveryLateDate);
        })
    }

    const writeModal = () => {
        addresses.forEach(address => {

                const modalItems = `<div class="modal__address" id="address-item-${address.id}">
                    <div class="modal__address-item">
                        <div class="label-wrapper">
                            <input id="radio-${address.id}" type="radio" name="street" value="${address.address}">
                            <label class="radio" for="radio-${address.id}"></label>
                        </div>
                            <label for="radio-${address.id}" class="address-name">${address.address}</label>
                            <span onclick="deleteAddress(${address.id})" class="btn_del__modal">delete</span>
                        </div>
                        <div class="point-status modal-status">
                            <span class="rating__icon"></span>
                            ${address.rating ? `<span class="rating_modal">${address.rating}</span>` : ''}
                            <span class="point_modal">Пункт выдачи</span>
                        </div>
                </div>`

            bodyModal.insertAdjacentHTML('beforeend', modalItems);
            }
        )
    }


    const writeModalCard = () => {
        cards.forEach(card => {

                const modalCardItems = `<div class="card-item">
                                             <div class="label-wrapper">
                                                    <input ${card.id === 1 ? "checked" : ''} id="radio-${card.id}" type="radio" name="card" value="${card.number}">
                                                    <label class="radio card-radio" for="radio-${card.id}"></label>
                                            </div>
                                            <div class="card-modal-container">
                                                <span class="card-type__icon icon_mir__mobile ${card.imgCard}"></span>
                                            </div>
                                            <label for="radio-${card.id}" class="card_number-card">${card.number}</label>
                                    </div>`

            bodyModalCard.insertAdjacentHTML('beforeend', modalCardItems);
            }
        )
    }

    document.addEventListener('click', documentActions);

    let div = document.createElement('div');
    div.classList = 'overlay'

    function documentActions(e) {
        const targetElement = e.target;
        if (targetElement.classList.contains('search-form__icon')) {
            document.querySelector('.popup-search').classList.remove('popup_hidden')
            document.querySelector('.popup-search').classList.toggle('popup_show')
        } else if (targetElement.classList.contains('popup-search__cancel')) {
            document.querySelector('.popup-search').classList.remove('popup_show')
            document.querySelector('.popup-search').classList.toggle('popup_hidden')
        }
        if (targetElement.classList.contains('icon-menu')) {
            document.querySelector('.menu-burger').classList.toggle('_active-burger')
            document.querySelector(".wrapper").append(div);
        } else if (!targetElement.closest('.menu-burger') && document.querySelector('.menu-burger._active-burger')) {
            document.querySelector('.menu-burger').classList.remove('_active-burger')
            document.querySelector(".overlay").remove(div);
        }
        if (targetElement.classList.contains('navbar-mobile__icon--catalog')) {
            document.querySelector('.popup-search').classList.remove('popup_hidden')
            document.querySelector('.popup-search').classList.toggle('popup_show')
        }

    }

    writeProduct();
    writeProductMobile();
    writeDeliveryItems();
    calcCartPrice();
    writeModal();
    writeModalCard();
}

window.addEventListener(`resize`, event => {

    const submitButton = document.getElementById('submitButton')
    const form = document.getElementById('myForm')
    const formMob = document.getElementById('myFormMob')




    if (event.currentTarget.innerWidth <= 641) {
        document.querySelector('.item-wrap__mobile').classList.remove('_hidden')
        submitButton.setAttribute('form', 'myFormMob')
    } else {
        document.querySelector('.item-wrap__mobile').classList.add('_hidden')
    }
    if (event.currentTarget.innerWidth >= 642) {
        document.querySelector('.regular-screen').classList.remove('_hidden')
        submitButton.setAttribute('form', 'myForm')
    } else {
        document.querySelector('.regular-screen').classList.add('_hidden')
    }
}, false)
