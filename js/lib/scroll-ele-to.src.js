export function scrollTo (element, to, duration, scroll = 'scrollTop') {
  const
    start = element[scroll],
    change = to - start,
    startDate = Date.now(),
    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    easeInOutQuad = function (t, b, c, d) {
      t /= d / 2
      if (t < 1) return c / 2 * t * t + b
      t--
      return -c / 2 * (t * (t - 2) - 1) + b
    },
    animateScroll = function () {
      const currentDate = Date.now()
      const currentTime = currentDate - startDate
      element[scroll] = parseInt(easeInOutQuad(currentTime, start, change, duration))
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll)
      } else {
        element[scroll] = to
      }
    }
  animateScroll()
}

export function scrollLeftTo (ele, to, duration = 300) {
  return scrollTo(ele, to, duration, 'scrollLeft')
}

export function scrollEleToSrc (ele, to, duration = 300) {
  return scrollTo(ele, to, duration)
}
