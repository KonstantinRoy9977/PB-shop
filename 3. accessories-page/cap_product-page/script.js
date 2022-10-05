$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var coatesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + coatesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});

const addToCartBtn = document.querySelector('.addtocart-btn');
const cartProductsQty = document.querySelector('.cartProductsQty');
const numbers = document.querySelector('.numbers');
numbers.textContent = 0;

addToCartBtn.addEventListener('click', (e) => {
  cartProductsQty.style.opacity=1;
  numbers.textContent++;
})
