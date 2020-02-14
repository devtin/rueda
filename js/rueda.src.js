import { scrollLeftTo } from './lib/scroll-ele-to.src.js'

let lastOpened

let myWidth = getViewport().width;

function getViewport() {
  return {
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  }
}

const ruedaContainer = document.querySelector('.rueda-container')
const ruedaScroll = document.querySelector('.rueda-scroll')

const getCombo = (feature = lastOpened) => {
  const info = document.querySelector(`.rueda .info.${feature}`)
  const path = document.querySelector(`.svg path.${feature}`)

  return { info, path }
}

function restart() {
  closeLastOpened()
  centerRueda()
}

function centerRueda(time = 300) {
  const diff = ruedaScroll.offsetWidth - ruedaContainer.offsetWidth
  if (diff > 0) {
    scrollLeftTo(ruedaContainer, diff / 2, time)
  }
}

function closeLastOpened() {
  if (!lastOpened) {
    return
  }

  if (lastOpened === 'i-breezhaler') {
    $('html, body').animate({
      scrollTop: "0px"
    }, 0);
  }

  if (lastOpened === 'i-breezhaler') {
    if (myWidth >= 700 && myWidth <= 1024) {
      $('.rueda-container').css('height', '450px')
    } else if (myWidth <= 1024) {
      $('.rueda-container').css('height', '380px')
    } else {
      $('.rueda-container').css('height', '600px')
    }
  }

  const { info, path } = getCombo()

  info.classList.remove('on')
  path.classList.remove('on')

  const closed = lastOpened
  lastOpened = null

  return closed
}


['i-reduccion', 'i-evidencia-cardio', 'i-breezhaler', 'i-calidad-vida', 'i-guias-gold'].forEach(feature => {
  document.querySelector(`.svg path.${feature}`).onclick = function () {
    if (closeLastOpened() === feature) {
      centerRueda()
      return
    }

    lastOpened = feature

    const { info, path } = getCombo(feature)

    info.classList.add('on')
    path.classList.add('on')

    if (feature === 'i-breezhaler') {
      if (myWidth >= 700 && myWidth <= 1024) {
       console.log('1')
        $('.rueda-container').css('height', '740px')
      } else if (myWidth <= 1024) {
        console.log('2')
        $('.rueda-container').css('height', '600px')
      } else {
        console.log('3')
        $('.rueda-container').css('height', '1100px')
      }
    }

    let _infoMiddle = info.getBoundingClientRect().left + (info.getBoundingClientRect().width / 2)
    let _mustBe = getViewport().width / 2
    const moveTo = ruedaContainer.scrollLeft - (_mustBe - _infoMiddle)
    
    scrollLeftTo(ruedaContainer, moveTo)

    if (feature === 'i-breezhaler') {
      $('html, body').animate({
        scrollTop: ($('.info_st5').offset().top) - 230
      }, 300);
    }
  }
})

centerRueda(0)

window.onresize = () => {
  centerRueda()
}

$(document).ready(function () {

  let num = $('.hide').length;
  let i = num
  let x = 0
  $('.logo_rueda').click(function () {
    closeLastOpened();
    centerRueda();
    if (i == num) {
      $('.hide').each(function (index) {
        var e = $(this);

        if (x == 1) {
          e.toggle();
        } else {
          setTimeout(function () {
            $(e).toggle();
            i--;
            if(i==0) {
              i=num;
              x=1;
            }
          }, 200 * index)
        }
      });
      x=0;
    }
  });

});

window.onload = () => {
  // swipe
  const rueda = new Hammer(document.querySelector('.rueda-container'))
  rueda.on('swipe', function (ev) {
    restart()
  })
}

$(".refimg2").click(function () {

  $(".refsec").toggle();
  $(".ref_img img").toggleClass('color');
});
