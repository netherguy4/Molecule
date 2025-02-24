<script setup>
const props = defineProps({
  title: String,
  Subtitle: String,
  imageUrl: String,
  author: Object,
})
</script>

<template>
  <li class="article">
    <a href="" class="article__link"></a>
    <div class="article__image-wrapper">
      <img :src="props.imageUrl" :alt="props.title" class="article__image" />
    </div>
    <h6 class="article__title">{{ title }}</h6>
    <p class="article__subtitle">{{ Subtitle }}</p>
    <figure class="author">
      <img :src="props.author.imageUrl" alt="Dwight Schrute" class="author__image" />
      <figcaption class="author__name">{{ author.name }}</figcaption>
      <div class="author__date">{{ author.date }}</div>
      <div class="author__time">{{ author.time }} min read</div>
    </figure>
  </li>
</template>

<style lang="scss" scoped>
.article {
  position: relative;
  overflow: hidden;
  margin: -10px;
  padding: 10px;
  border-radius: 20px 20px 20px 0;
  transition: $trTime;
  @include hover {
    transition: $hoverTime;
    box-shadow: 0px 3px 15px 1px rgba(0, 0, 0, 0.05);
  }
  &__link {
    @include absolute-link;
    z-index: 5;
  }
  &__image-wrapper {
    position: relative;
    padding: 0 0 percent(268, 405);
    margin: 0 0 toem(43) 0;
  }
  &__image {
    position: absolute;
    border-radius: 16px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__title {
    font-size: toem(24);
    line-height: 140%;
    margin: 0 0 em(11, 24) 0;
  }
  &__subtitle {
    line-height: 150%;
    margin: 0 0 toem(14) 0;
  }
}
.author {
  display: grid;
  align-items: center;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: repeat(2, 1fr);
  font-size: toem(14);
  &__image {
    grid-row: span 2;
    width: 48px;
    height: 48px;
    margin: 0 16px 0 0;
  }
  &__name {
    grid-column: span 2;
  }
  &__date {
    display: inline-flex;
    align-items: flex-end;
    &::after {
      content: '.';
      margin: 0 em(6, 32) 0 em(14, 32);
      font-size: 2rem;
      scale: 1 -1;
      line-height: 0%;
    }
  }
  // &__time {
  // }
}
</style>
