const cartBtn = document.querySelectorAll('.cart-btn');
const cartProductsList = document.querySelector('.cart-content__list');
const cart = document.querySelector('.cart');
const productQuantity = document.getElementById('productQuantity');
const productPrice = document.querySelector('.product-price');
const priceNumber = 18990;
const allQntPrice = document.querySelector('.allQntPrice');

productPrice.textContent = `Цена: ${priceNumber} руб.`;

allQntPrice.textContent = `Общая сумма: ${priceNumber * productQuantity.value} руб.`;


