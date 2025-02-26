<script setup>
import { ref, onMounted, provide, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import Lenis from 'lenis'

import AppHeader from './components/Header/AppHeader.vue'
import AppDrawer from './components/AppDrawer.vue'
import MainHero from './components/Hero/MainHero.vue'
import MainFeatures from './components/MainFeatures.vue'
import MainStats from './components/MainStats.vue'
import MainTeam from './components/MainTeam.vue'
import MainInfo from './components/MainInfo.vue'
import MainProcess from './components/MainProcess.vue'
import MainSlider from './components/Slider/MainSlider.vue'
import MainBubble from './components/MainBubble.vue'
import MainBlog from './components/Blog/MainBlog.vue'
import MainInfo2 from './components/MainInfo2.vue'
import AppFooter from './components/Footer/AppFooter.vue'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

// *Scroll smoothing and triggers ----------------------------------------------------------------------------------------------

const lenis = new Lenis({
  lerp: 0.05,
})
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000) // Convert time from seconds to milliseconds
})
gsap.ticker.lagSmoothing(0)

provide('lenis', lenis)

// * ---------------------------------------------------------------------------------------------------------------------------

const drawerOpened = ref(false)
provide('drawerOpened', drawerOpened)

// *Animations -----------------------------------------------------------------------------------------------------------------

const main = ref(null)
const drawerAnimation = () => {
  let tl = gsap
    .timeline({ paused: true })
    .fromTo(
      '.drawer',
      { width: 0, autoAlpha: 0 },
      { width: 'auto', autoAlpha: 1, ease: 'power3.inOut' },
    )
    .fromTo('.drawer', { scaleX: 0 }, { scaleX: 1, ease: 'back.inOut(2)' }, '<')
    .fromTo('.drawer>*', { x: 100 }, { x: 0, ease: 'power1.inOut' }, '<0.15')
  watch(drawerOpened, () => {
    if (drawerOpened.value) {
      tl.play()
      lenis.stop()
    } else {
      tl.reverse()
      lenis.start()
    }
  })
  document.body.addEventListener('click', (e) =>
    e.target.closest('div') === document.querySelector('.drawer') ||
    e.target.closest('header') === document.querySelector('.header')
      ? null
      : (drawerOpened.value = false),
  )
}
const digitCounterAnimation = () => {
  gsap.from('[data-animated-counter]', {
    scrollTrigger: {
      trigger: `[data-animated-counter-container]`,
      start: 'top 90%',
      toggleActions: 'restart play play play',
    },
    textContent: 0,
    snap: {
      textContent: 1,
    },
    ease: 'power4.out',
    duration: 2,
  })
}
const sectionsAnimation = () => {
  let entries = [...main.value.children]
  entries.forEach((entry) => {
    if (entry.dataset.gsap === undefined) {
      return
    } else {
      const stagger = entry.dataset.stagger
      let tl = gsap.timeline()
      if (entry.dataset.gsap === 'scale') {
        tl.from(entry.children[0].children, {
          scrollTrigger: {
            trigger: entry,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1,
          },
          scale: 0.5,
          ease: 'sine',
          autoAlpha: 0,
          duration: 1,
          stagger: entry.dataset.stagger,
        })
      } else {
        tl.from(entry.children[0].children, {
          scrollTrigger: {
            trigger: entry,
            start: 'top 85%',
            end: 'top 40%',
            scrub: 1,
          },
          transformOrigin: 'bottom center',
          scale: 0.5,
          y: 300,
          ease: 'sine',
          autoAlpha: 0,
          duration: 1,
          stagger: entry.dataset.stagger,
        })
      }
      tl.from(
        entry,
        {
          scrollTrigger: {
            trigger: entry,
            start: 'top 90%',
            end: 'top center',
            scrub: 2,
          },
          ease: 'sine',
          background: 'transparent',
          duration: 0.5,
        },
        0,
      )
    }
  })
}
const companiesLogoAnimation = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.hero__flex-companies',
        start: 'center bottom',
        end: 'bottom top',
        toggleActions: 'play play restart play',
      },
    })
    .from('.hero__paragraph[data-animated-text]', {
      text: '',
      duration: 2.25,
      ease: 'sine',
    })
    .fromTo(
      '.hero__flex-companies svg',
      {
        strokeDasharray: 1800,
        strokeDashoffset: 3100,
        stroke: '#fff',
      },
      {
        duration: 1.5,
        strokeDashoffset: 3600,
        ease: 'power2',
        stagger: 0.25,
      },
      '<0.5',
    )
    .from('.hero__flex-companies svg', {
      fill: 'transparent',
      ease: 'power1.in',
    })
    .to(
      '.hero__flex-companies svg',
      {
        stroke: 'transparent',
        duration: 1,
      },
      '<',
    )
}
const heroImagesAnimation = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.hero__content',
        start: 'center bottom',
        end: 'bottom 15%',
        toggleActions: 'play play restart play',
      },
    })
    .from('.hero__images-content img', {
      scale: 0,
      autoAlpha: 0,
      stagger: 0.15,
      ease: 'back(2)',
    })
}
const teamImagesAnimation = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#team .section__images-container',
        start: 'top 115%',
        end: 'bottom 15%',
        toggleActions: 'restart reverse restart reverse',
      },
    })
    .from('#team .section__images-container img', {
      scale: 0,
      opacity: 0,
      stagger: 0.15,
      ease: 'back(2)',
    })
}
const infoLogoAnimation = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#infoLogo',
        start: 'top 120%',
        end: 'bottom center',
        scrub: 1,
      },
    })
    .set('#infoLogo', {
      overflow: 'visible',
    })
    .from('#infoLogo path', {
      rotate: 360,
      transformOrigin: 'center center',
      duration: 4,
      ease: 'linear',
    })
}
const logoHoverAnimation = () => {
  const logos = document.querySelectorAll('[data-animated-logo]')
  logos.forEach((logo) => {
    var colors = ['#794EFF', '#97E747', '#FFC147', '#794EFF', '#97E747', '#FFC147']
    let tl = gsap
      .timeline({ paused: true })
      .set(logo, {
        overflow: 'visible',
      })
      .from([...logo.children[0].children].slice(0, 3), {
        rotate: 360,
        transformOrigin: 'center center',
        duration: 2,
        ease: 'linear',
        repeat: -1,
      })
    tl.set([...logo.children[0].children].slice(3, 4), { fill: colors[0] }, '<')
    colors.push(colors.shift())
    tl.to(
      [...logo.children[0].children].slice(3, 4),
      {
        keyframes: colors.map((color) => ({ fill: color })),
        duration: 1 * colors.length,
        repeat: -1,
        yoyo: true,
      },
      '<',
    )
    logo.parentElement.addEventListener('mouseenter', () => tl.restart())
    logo.parentElement.addEventListener('mouseleave', () => {
      tl.pause()
      gsap.to([...logo.children[0].children].slice(0, 3), {
        rotate: 0,
        transformOrigin: 'center center',
      })
      gsap.to([...logo.children[0].children].slice(3, 4), { fill: '#794EFF' })
    })
  })
}

onMounted(() => {
  drawerAnimation()
  digitCounterAnimation()
  sectionsAnimation()
  companiesLogoAnimation()
  heroImagesAnimation()
  teamImagesAnimation()
  infoLogoAnimation()
  logoHoverAnimation()
})
</script>

<template>
  <AppHeader class="header" />
  <AppDrawer />
  <main ref="main" class="main">
    <MainHero class="main__hero" />
    <MainFeatures id="features" data-gsap class="main__section" />
    <MainStats data-gsap data-animated-counter-container class="main__section _gray" />
    <MainTeam id="team" data-gsap class="main__section" />
    <MainInfo data-gsap data-stagger="0.25" class="main__section _dark" />
    <MainProcess data-gsap class="main__section" />
    <MainSlider data-gsap class="main__section _gray" />
    <MainBubble data-gsap class="main__section _purple" />
    <MainBlog data-gsap class="main__section" />
    <MainInfo2 class="main__section _purple" />
  </main>
  <AppFooter />
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
}
.main {
  &__hero {
    margin: em(72, 18) 0 0;
  }
  &__section {
    overflow: hidden;
    padding: toem(64) 0;
    @media (min-width: $M) {
      padding: toem(128) 0;
    }
    &._gray {
      background: #f6f6f6;
    }
    &._dark {
      background: #1e313b;
    }
    &._purple {
      padding: toem(32) 0;
      background: #794eff;
      @media (min-width: $M) {
        padding: toem(64) 0;
      }
    }
  }
}
</style>

<style lang="scss">
html {
  font-size: 13px;
  @media (min-width: $M) {
    font-size: 16px;
  }
}
body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #1e313b;
  flex: 1 1 auto;
}
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.container {
  padding: 0 tovw(80, 1440);
  max-width: 1440px;
  margin: 0 auto;
  @media (min-width: $XL) {
    padding: 0 80px;
  }
}
</style>
