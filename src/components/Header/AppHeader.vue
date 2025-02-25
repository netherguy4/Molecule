<script setup>
import { inject } from 'vue'
import HeaderNav from './HeaderNav.vue'
import logo from '@/assets/svg/logo.svg'

const drawerOpened = inject('drawerOpened')
const lenis = inject('lenis')
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <a
        href="#"
        @click="
          (e) => {
            e.preventDefault()
            lenis.scrollTo(0)
          }
        "
      >
        <component data-animated-logo class="header__logo" :is="logo" />
      </a>
      <HeaderNav class="header__nav" />
      <div class="header__buttons">
        <button class="header__button">Buy now</button>
        <button
          class="header__button _burger"
          :class="drawerOpened ? '_active' : null"
          @click="
            () => {
              drawerOpened = !drawerOpened
            }
          "
        >
          <div class="header__burger-line"></div>
          <div class="header__burger-line"></div>
          <div class="header__burger-line"></div>
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  &__logo {
    width: 10em;
  }
  &__container {
    position: relative;
    height: toem(72);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__nav {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    @media (min-width: $L) {
      display: inherit;
    }
  }
  &__buttons {
    display: flex;
    gap: 1em;
  }
  &__button {
    font-size: 1rem;
    flex-shrink: 0;
    padding: toem(9) toem(15);
    color: #fff;
    border-radius: 6px;
    background: #1e313b;
    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.05);
    transition: $hoverTime;
    &._burger {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      @media (min-width: $L) {
        display: none;
      }
      &._active .header__burger-line {
        scale: 1.29 1;
        &:first-child {
          rotate: 38deg;
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:last-child {
          rotate: -38deg;
        }
      }
    }
  }
  &__burger-line {
    transition: $trTime;
    transform-origin: left center;
    width: 1em;
    border: solid toem(1) #fff;
    border-radius: toem(4);
  }
}
</style>
