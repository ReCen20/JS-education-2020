let body = document.querySelector('body');
let menu = document.querySelector('.menu');
let menuItems = document.querySelectorAll('.menu-item');
let title = document.querySelector('.title')
let advertisment = document.querySelector('.adv');
let column = document.querySelectorAll('.column')[1];
let promptEl = column.querySelector('.prompt');

let deletedElement = menu.removeChild(menuItems[1]);
menu.insertBefore(deletedElement, menuItems[3]);
let fifthElement = document.createElement('div');
fifthElement.textContent = "Пятый элемент";
fifthElement.classList.add('menu-item');
menu.appendChild(fifthElement);

body.style.background = "url(img/apple_true.jpg) center no-repeat";
body.style.backgroundSize = "cover";

title.textContent = "Мы продаем только подлинную технику Apple";
column.removeChild(advertisment);
promptEl.textContent = prompt("Каково ваше отношение к технике Apple?");

