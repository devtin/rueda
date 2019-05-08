(function () {
  'use strict';

  function scrollTo (element, to, duration, scroll = 'scrollTop') {
    const
      start = element[scroll],
      change = to - start,
      startDate = Date.now(),
      // t = current time
      // b = start value
      // c = change in value
      // d = duration
      easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b
      },
      animateScroll = function () {
        const currentDate = Date.now();
        const currentTime = currentDate - startDate;
        element[scroll] = parseInt(easeInOutQuad(currentTime, start, change, duration));
        if (currentTime < duration) {
          requestAnimationFrame(animateScroll);
        } else {
          element[scroll] = to;
        }
      };
    animateScroll();
  }

  function scrollLeftTo (ele, to, duration = 300) {
    return scrollTo(ele, to, duration, 'scrollLeft')
  }

  let lastOpened;

  const ruedaContainer = document.querySelector('.rueda-container');
  const ruedaScroll = document.querySelector('.rueda-scroll');

  const getCombo = feature => {
    const info = document.querySelector(`.rueda .info.${ lastOpened }`);
    const path = document.querySelector(`.svg path.${ lastOpened }`);

    return { info, path }
  };

  function centerRueda (time = 300) {
    const diff = ruedaScroll.offsetWidth - ruedaContainer.offsetWidth;
    if (diff > 0) {
      scrollLeftTo(ruedaContainer, diff / 2, time);
    }
  }

  function closeLastOpened () {
    if (!lastOpened) {
      return
    }

    const { info, path } = getCombo(lastOpened);

    info.classList.remove('on');
    path.classList.remove('on');

    const closed = lastOpened;
    lastOpened = null;

    return closed
  }

  ['i-evidencia-clinica', 'i-reduccion-costo', 'i-mejor-dispositivo', 'i-gold', 'i-costo-efectividad'].forEach(feature => {
    document.querySelector(`.svg path.${ feature }`).onclick = function () {
      if (closeLastOpened() === feature) {
        centerRueda();
        return
      }

      lastOpened = feature;

      const { info, path } = getCombo(feature);

      info.classList.add('on');
      path.classList.add('on');

      const { width } = info.getBoundingClientRect();
      const childOffset = {
        top: info.offsetTop - ruedaScroll.offsetTop,
        left: info.offsetLeft - ruedaScroll.offsetLeft
      };

      console.log({ childOffset });
      console.log(`info.offsetWidth`, info.offsetWidth);
      console.log(`window.screen.width`, window.screen.width);
      console.log(`ruedaContainer.scrollLeft`, ruedaContainer.scrollLeft);

      let _scrollLeftTo = childOffset.left;
      console.log({ _scrollLeftTo });

      if (info.classList.contains('inv')) {
        _scrollLeftTo -= width;
      }

      console.log({ _scrollLeftTo });

      // scroll handheld rueda
      // scrollLeftTo(ruedaContainer, _scrollLeftTo)
    };
  });

  centerRueda(0);

}());
