/* menu */
const menuButton = document.querySelector('.menu-button');
const sideBar = document.querySelector('.side-bar');
const main = document.querySelector('.main');

/* add input */
const addButton = document.querySelector('.add-button');
const modal = document.querySelector('.modal');

/* update input */
const updateInputButton = document.querySelector('.update-input-btn')

/* input cards */
const inputCards = document.querySelectorAll('.input-card');
const cardExpand = document.querySelector('.card-expand');

/* functions */
function openModal() {
    modal.classList.remove('off');
}

function expandCard() {
    cardExpand.classList.remove('off');
}

/* event listeners */
menuButton.addEventListener('click', () => {
    sideBar.classList.toggle('open');
    sideBar.classList.toggle('side-bar-close');
    main.classList.toggle('main-shift');
    main.classList.toggle('main-full')
})

addButton.addEventListener('click', () => {
    location.assign('./create-input-form.html')
});

inputCards.forEach((input) => {
    input.addEventListener('click', () => {
        openModal();
        expandCard();
    })
})

modal.addEventListener('click', (e) => {
    modal.classList.add('off');
})

updateInputButton.addEventListener('click', () => {
    location.assign('./update-input-form.html')
})
