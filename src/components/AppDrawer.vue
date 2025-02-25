<script setup>
import { inject } from 'vue'
import HeaderNav from './Header/HeaderNav.vue'
import logo from '@/assets/svg/logo.svg'

const drawerOpened = inject('drawerOpened')
</script>

<template>
  <div class="drawer">
    <HeaderNav class="drawer__nav" />
    <div class="drawer__logo-wrapper">
      <Component data-animated-logo class="drawer__logo" :is="logo" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drawer {
  transform-origin: right center;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: calc(4.5em);
  overflow: hidden;
  height: calc(100% - 4.5em);
  right: 0;
  z-index: 9;
  width: 0;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  @media (min-width: $L) {
    display: none;
  }
  &__nav {
    flex-grow: 1;
    flex-shrink: 0;
    padding: 3em;
    font-size: 1.7em;
  }
  &__logo-wrapper {
    margin: 2em 1em;
    flex-shrink: 0;
    min-width: 18em;
  }
}
</style>
