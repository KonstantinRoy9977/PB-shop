// Всплывающее окно регистрации
const iconRegistr = document.querySelector('.iconRegistr');
const shellRegistrWindow = document.querySelector('.shellRegistrWindow');
const registrationWindow = document.querySelector('.registrationWindow');
const popupExitBtn = document.querySelector('.popupExit-btn');

iconRegistr.addEventListener('click', (e) => {
    shellRegistrWindow.style.opacity="1";
    shellRegistrWindow.style.visibility="visible";
})

popupExitBtn.addEventListener('click', (e) => {
    shellRegistrWindow.style.opacity="0";
    shellRegistrWindow.style.visibility="hidden";
})

const randomCloseActiveWindow = document.querySelector('.shellRegistrWindow');
randomCloseActiveWindow.addEventListener('click', (e) => {
    if(e.target == randomCloseActiveWindow) {
        randomCloseActiveWindow.style.opacity="0";
        randomCloseActiveWindow.style.visibility="hidden";
    }
})


// Всплывающее окно поиска
const iconSearchBtn = document.querySelector('.iconSearch');
const searchBlock = document.querySelector('.searchWindowBlock');
const searchPopup = document.querySelector('.searchWindow');
const searchWindowInput = document.querySelector('.searchWindow-input');
const dltBtn = document.querySelector('.delete-letter__btn');
const searchPopupExitBtn = document.querySelector('.searchWindowExitBtn__btn');

iconSearchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchPopup.style.top="0px";
    searchBlock.style.opacity="1";
    searchBlock.style.visibility="visible";
})

dltBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchWindowInput.value = '';
}
)

searchPopupExitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchPopup.style.top="-200px";
    searchBlock.style.opacity="0";
    searchBlock.style.visibility="hidden";
})

const randomExitSearchBlock = document.querySelector('.searchWindowBlock');
randomExitSearchBlock.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target == randomExitSearchBlock) {
        searchPopup.style.top="-200px";
        searchBlock.style.opacity="0";
        searchBlock.style.visibility="hidden";
    }
})


// Анимация главных фото
var imgs = ["img/94f72ae66762f594b31f9a5aeb5b9ffb.jpg",
"img/AN53423368Programme-Name-Pe.jpg","img/R03RxP5c--w.jpg"];
    
    var n = 0;
    time = 1200;
    play = setInterval("chgImg(0)", 5000);
    
    function chgImg(number) {
    if (number!=0) n = number - 2;
     $('#slide_show').fadeOut(time, function() {    //для картинок
      $(this).attr('src', imgs[n]).fadeIn(time);
     });

    n++;
    if (n>=imgs.length) n = 0;
    }

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