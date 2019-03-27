/* menu */
const menuButton = document.querySelector('.menu-button');
const sideBar = document.querySelector('.side-bar');
const main = document.querySelector('.main');

/* event listeners */
menuButton.addEventListener('click', () => {
  sideBar.classList.toggle('open');
  sideBar.classList.toggle('side-bar-close');
  main.classList.toggle('main-shift');
  main.classList.toggle('main-full');
});
