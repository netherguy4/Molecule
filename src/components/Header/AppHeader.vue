<script setup>
import { inject } from 'vue'
import HeaderNav from './HeaderNav.vue'
import logo from '@/assets/svg/logo.svg'

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
        <button class="header__button _burger">
          <svg
            class="header__burger"
            width="16"
            viewBox="0 0 600 468"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.3334 434H566.667"
              stroke="white"
              stroke-width="66.6667"
              stroke-linecap="round"
            />
            <path
              d="M33.3334 234H566.667"
              stroke="white"
              stroke-width="66.6667"
              stroke-linecap="round"
            />
            <path
              d="M33.3334 34H566.667"
              stroke="white"
              stroke-width="66.6667"
              stroke-linecap="round"
            />
          </svg>
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
      @media (min-width: $L) {
        display: none;
      }
      @include hover {
      }
    }
    & .header__burger {
      transition: $hoverTime;
    }
  }
}
</style>
