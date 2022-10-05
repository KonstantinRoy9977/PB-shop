// Анимация кнопки скролла
jQuery(($) => {
    $(".mybutton--animate-click-one, .mybutton--animate-click-two, .mybutton--animate-click-three")
        .click(function () {
            return _this = this,
                $(_this).stop().addClass("mybutton--click"), setTimeout(function () {
                    $(_this).removeClass("mybutton--click");
                }, 600);
        });
});

const myButton = document.querySelector('.mybutton')

myButton.onclick = function() {
      window.scrollTo(pageXOffset, 0);
      // после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
    };

    window.addEventListener('scroll', function() {
        myButton.hidden = (pageYOffset < document.documentElement.clientHeight);
    });