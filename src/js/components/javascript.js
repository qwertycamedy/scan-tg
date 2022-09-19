import Swiper, { Navigation } from "swiper";
import AOS from 'aos'
import _vars from '../_vars'

headerScroll(_vars.header)
linkScroll()

function headerScroll(header) {
  let scrollpos = window.scrollY

  const scrollChange = 1

  const add_class_on_scroll = () => header.classList.add("active")
  const remove_class_on_scroll = () => header.classList.remove("active")

  window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    if (scrollpos >= scrollChange) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

  })
}

function linkScroll() {
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}

const tarrifs = new Swiper('.tarrifs__slider', {
  modules: [Navigation],

  navigation: {
    nextEl: '.tarrifs__slider-next',
    prevEl: '.tarrifs__slider-prev',
  },


  breakpoints: {
    320: {
      slidesPerView: "auto",
      spaceBetween: 30,
      initialSlide: 1,
      centeredSlides: true,
    },

    1169: {
      slidesPerView: 3,
      spaceBetween: 30,
      initialSlide: 2,
    }
  }
})
const reviews = new Swiper('.reviews__slider', {
  modules: [Navigation],

  navigation: {
    nextEl: '.reviews__slider-next',
    prevEl: '.reviews__slider-prev',
  },


  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1169: {
      slidesPerView: 3,
      spaceBetween: 36
    },
  }
})

AOS.init({
  duration: 1000,
})

var sceneHero = document.getElementById('scene-1');
var scenePlatform = document.getElementById('scene-2');
var parallaxHero = new Parallax(sceneHero);
var parallaxPlatform = new Parallax(scenePlatform);
