<script setup></script>

<template>
  <section class="section">
    <div class="container section__container">
      <div class="section__content">
        <h2 class="section__buble">Stats</h2>
        <p class="section__subtitle">
          Teams all over the place have already used Molecule to get
          <span class="section__accent">stunning results</span>.
        </p>
      </div>
      <div class="section__content">
        <p class="section__caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
          elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
          commodo diam libero vitae erat.
        </p>
        <div class="section__flex-cards">
          <div class="card">
            <div class="card__container">
              <div class="card__title"><span data-animated-counter>87</span>%</div>
              <p class="card__caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="card">
            <div class="card__container">
              <div class="card__title"><span data-animated-counter>99</span>%</div>
              <p class="card__caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$accent-color: #97e747;
$accent-bg: rgba(151, 231, 71, 0.6);

.section {
  // font-size: 1rem;
  &__container {
    gap: toem(80);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media (min-width: $L) {
      flex-wrap: nowrap;
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
    line-height: 110%;
    margin: 0 0 em(18, 32) 0;
  }
  &__accent {
    color: $accent-color;
    margin: 0 0 0 1rem;
  }
  &__caption {
    font-size: toem(18);
    line-height: 150%;
    margin: 0 0 em(37, 18) 0;
  }
  &__flex-cards {
    display: flex;
  }
}
.card {
  flex: 1 1 50%;
  &__container {
    padding: 0 toem(82) 0 0;
  }
  &__title {
    font-size: 3em;
    color: $accent-color;
    line-height: 120%;
  }
  &__caption {
    line-height: 150%;
  }
}
</style>
