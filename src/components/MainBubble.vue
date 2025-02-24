<script setup>
import EmailForm from './EmailForm.vue'
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section__flex-container">
        <div class="section__content">
          <div class="section__title">Don't miss out!</div>
          <p class="section__caption">
            Sign-up & we'll let you know as soon as we have something to show off.
          </p>
          <p class="section__caption">(Don't worry, we don't spam).</p>
        </div>
        <EmailForm class="section__form" button-style="background-color: #1E313B; color: #fff;" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  // font-size: 1rem;
  &__flex-container {
    border-radius: 48px;
    background: #fff;
    padding: tovw(96, 1440);
    display: flex;
    column-gap: toem(88);
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    @media (min-width: $L) {
      flex-wrap: nowrap;
    }
    @media (min-width: $XL) {
      padding: toem(96);
    }
  }
  &__content {
    padding: toem(19) 0;
    flex: 0 1 600px;
  }
  &__form {
    flex: 0 1 600px;
  }
  &__title {
    font-size: 2em;
    margin: 0 0 em(12, 32) 0;
  }
  &__caption {
    line-height: 150%;
  }
}
</style>
