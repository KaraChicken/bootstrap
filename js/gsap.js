// left to right
const LeftToRight = [
  '.section01', 
  '.section03', 
  '.section05', 
  '.section07', 
  '.section09', 
  '.section11'
]
// right to left
const RightToLeft = [
  '.section02', 
  '.section04', 
  '.section06', 
  '.section08', 
  '.section10', 
  '.section12'
]

const total = gsap.timeline({
  // 定義共同屬性
  duration: 1,
  ease: "power1.in"
})

const totalScrollTrigger = {
  // 定義共同屬性
  start: 'top center',
  end: 'center center',
  scrub: true,
  markers: true
}

LeftToRight.forEach((element, index) => {
  total.fromTo(element, {x: '0%'}, {
    x: '100%', 
    scrollTrigger: {
      trigger:element,
      // 物件展開
      ...totalScrollTrigger
    }
  })
})

RightToLeft.forEach((element, index) => {
  total.fromTo(element, {x: '0%'},{
    x: '-100%', 
    scrollTrigger: {
      trigger:element,
      // 物件展開
      ...totalScrollTrigger
    }
  })
})
