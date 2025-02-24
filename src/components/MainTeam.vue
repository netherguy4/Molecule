<script setup></script>

<template>
  <section class="section">
    <div class="container section__container">
      <div class="section__images-container">
        <img src="/img/team-1.jpg" alt="" class="section__image" />
        <img src="/img/team-2.jpg" alt="" class="section__image" />
        <img src="/img/team-3.jpg" alt="" class="section__image" />
      </div>
      <div class="section__content">
        <h2 class="section__buble">Team</h2>
        <p class="section__subtitle">
          Meet the <span class="section__accent">talented team</span> behind the molecule SaaS
          template.
        </p>
        <p class="section__caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
          elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
          commodo diam libero vitae erat.
        </p>
        <button class="section__button">Meet the team</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$accent-color: #794eff;
$accent-bg: rgba(121, 78, 255, 0.8);

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
  &__images-container {
    flex: 0 1 600px;
    display: grid;
    column-gap: toem(20);
    row-gap: 1em;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
  &__image {
    border-radius: 16px;
    width: percent(288, 300);
    aspect-ratio: 1;
    flex-shrink: 0;
    &:nth-child(2) {
      grid-row: span 2;
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
    color: #fff;
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
  &__button {
    color: #fff;
    border-radius: 6px;
    background: $accent-color;
    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.05);
    padding: toem(8) toem(15) toem(10);
    line-height: 150%;
  }
}
</style>
