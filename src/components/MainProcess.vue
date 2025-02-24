<script setup>
import process1 from '@/assets/svg/process1.svg'
import process2 from '@/assets/svg/process2.svg'
import process3 from '@/assets/svg/process3.svg'
</script>

<template>
  <section class="section">
    <div class="container section__container">
      <div class="section__flex-cards">
        <div class="card">
          <div class="card__image-wrapper">
            <Component :is="process1" class="card__image" />
          </div>
          <div class="card__content">
            <div class="card__title">Get molecule</div>
            <p class="card__caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card__image-wrapper">
            <Component :is="process2" class="card__image" />
          </div>
          <div class="card__content">
            <div class="card__title">Edit fonts, colors, images & text</div>
            <p class="card__caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique.
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card__image-wrapper">
            <Component :is="process3" class="card__image" />
          </div>
          <div class="card__content">
            <div class="card__title">Publish!</div>
            <p class="card__caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
              eros elementum tristique.
            </p>
          </div>
        </div>
      </div>
      <div class="section__content">
        <h2 class="section__buble">Process</h2>
        <p class="section__subtitle">
          What steps are required to build a SaaS marketing site using the molecule template?
        </p>
        <button class="section__button">Get molecule</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$accent-color: #ffc147;
$accent-bg: rgba(255, 193, 71, 0.6);

.section {
  // font-size: 1rem;
  &__container {
    gap: toem(80);
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    flex-wrap: wrap-reverse;
    justify-content: center;
    @media (min-width: $L) {
      flex-wrap: nowrap;
    }
  }
  &__flex-cards {
    flex: 0 1 600px;
  }
  &__content {
    flex: 0 1 600px;
    padding: toem(10) 0 toem(8);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__buble {
    line-height: 150%;
    border-radius: 100px;
    border: 2px solid $accent-color;
    background: $accent-bg;
    padding: 0 toem(26);
    margin: 0 0 toem(29) 0;
  }
  &__subtitle {
    font-size: toem(32);
    font-weight: 700;
    line-height: 110%;
    margin: 0 0 em(48, 32) 0;
  }
  &__accent {
    color: $accent-color;
  }
  &__button {
    color: #fff;
    border-radius: 6px;
    background: #1e313b;
    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.05);
    padding: toem(8) toem(15) toem(10);
    line-height: 150%;
  }
}
.card {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 30px;
    width: 2px;
    height: 100%;
    flex-shrink: 0;
    background: rgba(0, 0, 0, 0.15);
  }
  &:first-child::before {
    top: toem(37.5);
    height: calc(100% - toem(37.5));
  }
  &:last-child::before {
    height: toem(37.5);
  }
  &__image-wrapper {
    position: absolute;
    background: $accent-color;
    padding: toem(18) toem(19);
    top: toem(23.5);
    left: 0;
  }
  &__image {
    width: 24px;
    height: 24px;
  }
  &__content {
    padding: toem(37.5) tovw(85, 1440) toem(47.5) toem(102);
    @media (min-width: $XL) {
      padding: toem(37.5) toem(85) toem(47.5) toem(102);
    }
  }
  &__title {
    font-size: toem(18);
    line-height: 133.333333%;
    margin: 0 0 em(12, 18) 0;
  }
  &__caption {
    line-height: 150%;
  }
}
</style>
