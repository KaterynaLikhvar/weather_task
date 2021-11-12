console.log('file 1');
const daysBtn = document.querySelector('.days__button');
const click = document.getElementById("list-items");
const burgerBtn = document.querySelector('.header__menu');
const navbar = document.querySelector('.hamburger-menu');
const lang = document.querySelector('.lang-container');
const langMenu = document.getElementById('lang__list-items');
const vectorDown = document.querySelector('.vector-down');
//console.log(vectorUp)


daysBtn.addEventListener('click', event => {
  if(click.classList.contains('hide')) {
    click.classList.remove('hide');
    click.classList.add('show');
 } else {
   click.classList.add('hide');
 }
});

burgerBtn.addEventListener('click', () => {
  if(navbar.classList.contains('hide')) {
    navbar.classList.remove('hide');
    navbar.classList.add('show');
 } else {
   navbar.classList.add('hide');
 }
});

lang.addEventListener('click', () => {
  if(langMenu.classList.contains('hide')) {
    langMenu.classList.remove('hide');
    langMenu.classList.add('show');
    vectorDown.classList.add('vector-up');
 } else {
  langMenu.classList.remove('show');
  langMenu.classList.add('hide');
  vectorDown.classList.remove('vector-up');
 }
})

