<script setup></script>

<template>
  <section class="section">
    <div class="container section__container">
      <div class="section__content">
        <p class="section__title">Ready to start designing?</p>
        <p class="section__caption">Molecule is available today!</p>
      </div>
      <div class="section__content">
        <button class="section__button">Get Molecule</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$accent-color: #794eff;
$accent-bg: rgba(121, 78, 255, 0.8);

.section {
  color: #fff;
  &__container {
    column-gap: toem(80);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    @media (min-width: $L) {
      flex-wrap: nowrap;
      text-align: left;
    }
  }
  &__content {
    flex: 1 1 auto;
    margin: toem(24.5) 0 0;
    display: flex;
    flex-direction: column;
  }
  &__title {
    font-size: toem(56);
    line-height: 110%;
    margin: 0 0 em(19, 56) 0;
  }
  &__caption {
    font-size: toem(18);
    line-height: 150%;
  }
  &__button {
    border-radius: 6px;
    background: #fff;
    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.05);
    padding: toem(13) toem(21) toem(15);
    font-size: toem(18);
    align-self: center;
    min-width: toem(140);
    @media (min-width: $L) {
      align-self: flex-end;
    }
  }
}
</style>
