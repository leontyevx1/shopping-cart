const arrow = document.getElementById('arrow');
const arrowMob = document.getElementById('arrow-mob');
const arrowAbs = document.getElementById('arrow-absence');
const arrowAbsMob = document.getElementById('arrow-absence-mob');
arrow.addEventListener('click', toggleBlock);
arrowMob.addEventListener('click', toggleBlock);
arrowAbs.addEventListener('click', toggleBlockAbs);
arrowAbsMob.addEventListener('click', toggleBlockAbs);


function toggleBlock() {
    const block = document.getElementById('block');
    const blockMob = document.getElementById('block-mob');
    const labelMob = document.getElementById('label-mob')
    const label = document.getElementById('label')
    const anotherHeaderMob = document.getElementById('another-header-mob')
    const anotherHeader = document.getElementById('another-header')


    if (block.classList.contains('active')) {
        block.classList.remove('active');
        arrow.classList.remove('count-absence__arrow-rotate')
        labelMob.classList.remove('_hidden')
        label.classList.remove('_hidden')
        anotherHeaderMob.classList.add('_hidden')
        anotherHeader.classList.add('_hidden')
    } else {
        block.classList.add('active');
        arrow.classList.add('count-absence__arrow-rotate')
        labelMob.classList.add('_hidden')
        label.classList.add('_hidden')
        anotherHeaderMob.classList.remove('_hidden')
        anotherHeader.classList.remove('_hidden')
    }
    if (blockMob.classList.contains('active')) {
        blockMob.classList.remove('active');
        arrowMob.classList.remove('count-absence__arrow-rotate')
    } else {
        blockMob.classList.add('active');
        arrowMob.classList.add('count-absence__arrow-rotate')
    }

}

function toggleBlockAbs() {
    const blockAbs = document.getElementById('block-absence');
    const blockAbsMob = document.getElementById('block-absence-mob');

    if (blockAbs.classList.contains('active')) {
        blockAbs.classList.remove('active');
        arrowAbs.classList.remove('count-absence__arrow-rotate')
    } else {
        blockAbs.classList.add('active');
        arrowAbs.classList.add('count-absence__arrow-rotate')
    }
    if (blockAbsMob.classList.contains('active')) {
        blockAbsMob.classList.remove('active');
        arrowAbsMob.classList.remove('count-absence__arrow-rotate')
    } else {
        blockAbsMob.classList.add('active');
        arrowAbsMob.classList.add('count-absence__arrow-rotate')
    }
}