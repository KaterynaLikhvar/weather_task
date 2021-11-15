console.log('file 1');
const daysBtn = document.getElementById('days__list');
const daysList = document.querySelector('.days__list-items');
const click = document.getElementById("list-items");
const burgerBtn = document.querySelector('.header__menu');
const sidebar = document.querySelector('.sidebar');
const lang = document.querySelector('.lang-container');
const langMenu = document.getElementById('lang__list-items');
const vectorDown = document.querySelector('.vector-down');
const vectorSidebar = document.querySelector('.arrow-up');
const coverElem = document.getElementById('cover');
const closeBtn = document.querySelector('.sidebar__close-btn');
console.log(vectorSidebar)

burgerBtn.addEventListener('click', () => {
  document.body.classList.add('notScrollable');
  coverElem.classList.remove('hidden');
  sidebar.classList.remove('hidden');
});

coverElem.addEventListener('click', () => {
  document.body.classList.remove('notScrollable');
  coverElem.classList.add('hidden');
  sidebar.classList.add('hidden');
});
closeBtn.addEventListener('click', () => {
  document.body.classList.remove('notScrollable');
  coverElem.classList.add('hidden');
  sidebar.classList.add('hidden');
});

lang.addEventListener('click', () => {
  if(langMenu.classList.contains('hidden')) {
    langMenu.classList.remove('hidden');
    vectorDown.classList.add('vector-up');
 } else {
  langMenu.classList.add('hidden');
  vectorDown.classList.remove('vector-up');
 }
});

daysBtn.addEventListener('click', () => {
  if(daysList.classList.contains('hidden')) {
    daysList.classList.remove('hidden');
    vectorSidebar.classList.add('vector-up');
    daysBtn.style.marginBottom = "212px";
 } else {
  daysList.classList.add('hidden');
  vectorSidebar.classList.remove('vector-up');
  daysBtn.style.marginBottom = "0";
 }
});


