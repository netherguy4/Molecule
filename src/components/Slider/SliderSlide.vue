<script setup>
import CIcon from '../CIcon.vue'

const props = defineProps({
  logo: String,
  title: String,
  imageUrl: String,
  name: String,
  occupation: String,
})
</script>

<template>
  <div class="slide">
    <div class="slide__container">
      <CIcon :name="props.logo" class="slide__logo" />
      <p class="slide__caption">{{ title }}</p>
      <figure class="slide__figure">
        <img class="slide__image" :src="props.imageUrl" />
        <figcaption>{{ name }}</figcaption>
        <figcaption>{{ occupation }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slide {
  &__container {
    max-width: toem(780);
    padding: 0 toem(30);
    margin: 0 auto toem(75);
    text-align: center;
  }
  &__logo {
    margin: 0 0 toem(34) 0;
  }
  &__caption {
    font-size: toem(24);
    line-height: 140%;
    margin: 0 0 em(28, 24) 0;
  }
  &__figure {
    display: flex;
    flex-direction: column;
    gap: toem(10);
    align-items: center;
  }
  &__image {
    width: toem(80);
    height: toem(80);
    margin: 0 0 toem(5) 0;
  }
}
</style>
