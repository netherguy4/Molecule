<script setup>
import logoNoText from '@/assets/svg/logo-no-text.svg'
</script>

<template>
  <section class="section">
    <div class="container">
      <component id="infoLogo" :is="logoNoText" class="section__image" />
      <div class="section__title">Think you've seen enough?</div>
      <p class="section__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
        elementum tristique.
      </p>
      <div class="section__buttons">
        <button class="section__button">Buy molecule</button>
        <button class="section__button">Read more</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  // font-size: 1rem;
  color: #fff;
  text-align: center;
  &__image {
    width: toem(160);
    height: toem(160);
    margin: 0 0 toem(19) 0;
  }
  &__title {
    line-height: 110%;
    font-size: 2em;
    margin: 0 0 toem(19) 0;
  }
  &__subtitle {
    font-size: toem(18);
    line-height: 150%;
    margin: 0 0 em(29, 18) 0;
  }
  &__buttons {
    display: inline-flex;
    gap: 1em;
  }
  &__button {
    font-size: 1em;
    color: #1e313b;
    padding: toem(9) toem(15);
    border-radius: 6px;
    background: #fff;
    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.05);
    &:first-child {
      color: #fff;
      background: #794eff;
    }
  }
}
</style>
