<script setup>
import { inject } from 'vue'
import FooterNav from './FooterNav.vue'
import logo from '@/assets/svg/logo.svg'
import social1 from '@/assets/svg/social1.svg'
import social2 from '@/assets/svg/social2.svg'
import social3 from '@/assets/svg/social3.svg'

const lenis = inject('lenis')
</script>

<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__content">
        <a
          href="#"
          @click="
            (e) => {
              e.preventDefault()
              lenis.scrollTo(0)
            }
          "
        >
          <Component data-animated-logo class="footer__logo" :is="logo" />
        </a>
        <FooterNav class="footer__nav" />
        <ul class="footer__socials">
          <li>
            <a href="https://www.instagram.com" target="_blank">
              <Component class="footer__social" :is="social1" />
            </a>
          </li>
          <li>
            <a href="https://www.x.com" target="_blank">
              <Component class="footer__social" :is="social2" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank">
              <Component class="footer__social" :is="social3" />
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__content">
        <p class="footer__copy">
          © Molecule, LLC. All rights reserved. Powered by
          <a class="footer__accent" target="_blank" href="https://webflow.com/">Webflow</a> .
        </p>
        <ul class="footer__links">
          <li>
            <a
              class="footer__link"
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              >Licensing</a
            >
          </li>
          <li>
            <a
              class="footer__link"
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              >Privacy Policy</a
            >
          </li>
          <li>
            <a
              class="footer__link"
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              >Terms & conditions</a
            >
          </li>
          <li>
            <a
              class="footer__link"
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              >Cookie policy</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &__logo {
    width: toem(194);
  }
  &__container {
    margin: toem(80) auto;
    display: flex;
    flex-direction: column;
    gap: toem(32);
  }
  &__content {
    position: relative;
    display: flex;
    &:first-child {
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      flex-direction: row;
    }
    &:nth-child(2) {
      flex-direction: column-reverse;
      align-items: center;
      gap: 1em;
      @media (min-width: $L) {
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: row;
      }
    }
  }
  &__nav {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    display: none;
    @media (min-width: $L) {
      display: inherit;
    }
  }
  &__accent {
    margin: 0 0 0 1em;
    color: #794eff;
    transition: 0.3s;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      transition: 0.3s ease-in-out;
      width: 0%;
      height: 1.5px;
      background: #794eff;
      bottom: -3px;
      left: 50%;
      translate: -50% 0;
      // opacity: 0.7;
    }
    @include hover {
      &::after {
        width: 100%;
      }
    }
  }
  &__socials {
    display: flex;
    gap: toem(12);
  }
  &__social {
    transition: 0.3s;
    will-change: transform;
    @include hover {
      scale: 1.25;
    }
    &:active {
      scale: 0.95;
    }
  }
  &__copy {
    font-size: toem(14);
  }
  &__links {
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
  }
  &__link {
    font-size: toem(14);
    color: #794eff;
    transition: 0.3s;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      transition: 0.3s ease-in-out;
      width: 0%;
      height: 1.5px;
      background: #794eff;
      bottom: -3px;
      left: 50%;
      translate: -50% 0;
      opacity: 0.7;
    }
    @include hover {
      &::after {
        width: 100%;
      }
    }
  }
}
</style>
