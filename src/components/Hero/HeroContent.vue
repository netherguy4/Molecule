<script setup>
import EmailForm from '../EmailForm.vue'
</script>

<template>
  <div class="hero__content">
    <div class="hero__text-content">
      <h1 class="hero__title">
        Molecule is a SaaS marketing template that's
        <span class="hero__purple">easy to modify</span>
        .
      </h1>
      <p class="hero__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
        elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
        commodo diam libero vitae erat.
      </p>
      <EmailForm class="hero__form" button-style="background-color: #f6f6f6" />
    </div>
    <div class="hero__images-content">
      <img class="hero__image _purple" src="/img/hero-purple.jpg" />
      <img class="hero__image _green" src="/img/hero-green.jpg" />
      <img class="hero__image _orange" src="/img/hero-orange.jpg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  &__content {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: $L) {
      flex-wrap: nowrap;
      padding: em(100, 18) 0;
    }
  }
  &__text-content {
    flex: 0 1 600px;
    padding: em(64, 18) 0 em(128, 18);
    @media (min-width: $M) {
      padding: em(128, 18) 0;
    }
  }
  &__title {
    font-size: em(38, 18);
    line-height: em(44, 38);
    margin: 0 0 em(13, 38);
  }
  &__purple {
    color: #794eff;
    padding: 0 0 0 1rem;
    flex-shrink: 0;
    // display: inline-flex;
  }
  &__paragraph {
    line-height: em(27, 18);
    margin: 0 0 em(29, 18) 0;
  }
  &__form {
    max-width: calc((88 + 376 + 16) / 18 * 1em);
  }
  &__images-content {
    position: relative;
    flex: 0 1 680px;
    // height: em(618, 18);
    margin: 30% 0 50%;
    @media (min-width: $M) {
      margin: 25% 0 50%;
    }
    @media (min-width: $L) {
      margin: 0;
    }
  }
  &__image {
    position: absolute;
    aspect-ratio: 350/300;
    width: percent(350, 680);
    border-radius: 16px;
    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.25);
    top: 0;
    right: 0;
    &._green {
      translate: -6% 0;
    }
    &._purple {
      translate: -80% -55%;
    }
    &._orange {
      translate: 0 -95%;
    }
  }
}
</style>
