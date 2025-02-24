<script setup>
import features1 from '@/assets/svg/features1.svg'
import features2 from '@/assets/svg/features2.svg'
import features3 from '@/assets/svg/features3.svg'
import features4 from '@/assets/svg/features4.svg'
</script>

<template>
  <section class="section">
    <div class="container section__container">
      <div class="section__images-container">
        <img src="/img/features-1.jpg" alt="" class="section__image" />
        <img src="/img/features-2.jpg" alt="" class="section__image" />
      </div>
      <div class="section__content">
        <h2 class="section__buble">Features</h2>
        <p class="section__subtitle">
          See how easy it is to <span class="section__accent">edit Molecule</span> to your liking.
        </p>
        <p class="section__caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
          elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
          commodo diam libero vitae erat.
        </p>
        <div class="section__grid-cards">
          <div class="card">
            <component :is="features1" class="card__image" />
            <div class="card__container">
              <div class="card__title">Pages you'll use</div>
              <div class="card__caption">
                Molecule doesn't come with 200+ page layout — it comes with the pages yo'll actually
                use.
              </div>
            </div>
          </div>
          <div class="card">
            <component :is="features2" class="card__image" />
            <div class="card__container">
              <div class="card__title">Native image effects</div>
              <div class="card__caption">
                Instead of having to add effects to images in an image editor, simply replace the
                existing images and all effects will appear.
              </div>
            </div>
          </div>
          <div class="card">
            <component :is="features3" class="card__image" />
            <div class="card__container">
              <div class="card__title">Global typography</div>
              <div class="card__caption">
                Change the body font once and every single line of text on the page will change.
              </div>
            </div>
          </div>
          <div class="card">
            <component :is="features4" class="card__image" />
            <div class="card__container">
              <div class="card__title">Global colors</div>
              <div class="card__caption">
                Change the global color swatches and see your colors change everywhere.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$accent-color: #ffc147;
$accent-bg: rgba(255, 193, 71, 0.6);
.section {
  &__container {
    gap: toem(80);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap-reverse;
    @media (min-width: $L) {
      flex-wrap: nowrap;
    }
  }
  &__images-container {
    flex: 0 1 600px;
    // min-width: 500px;
    position: relative;
    margin: 20% 0 30%;
    @media (min-width: $L) {
      margin: 0;
    }
  }
  &__image {
    width: percent(327, 600);
    border-radius: 16px;
    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    &:first-child {
      bottom: 0;
      left: 0;
      translate: 0 40%;
    }
    &:last-child {
      top: 0;
      left: calc(50% - (27 / 600 * 100%));
    }
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
    margin: 0 0 em(18, 32) 0;
  }
  &__accent {
    color: $accent-color;
  }
  &__caption {
    line-height: 150%;
    margin: 0 0 3em 0;
  }
  &__grid-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 1fr;
    font-size: toem(14);
    gap: em(24, 14);
    flex-wrap: wrap;
  }
}
.card {
  position: relative;
  &__image {
    position: absolute;
    top: em(8, 14);
    left: 0;
  }
  &__container {
    padding: em(8, 14) 0 em(8, 14) em(40, 14);
  }
  &__title {
    color: $accent-color;
    font-size: em(18, 14);
    line-height: 133.333333%;
    margin: 0 0 em(12, 18) 0;
  }
  &__caption {
    line-height: 150%;
  }
}
</style>
