<script setup>
import BlogArticle from './BlogArticle.vue'
import blog from '@/assets/data/blog.json'
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section__content">
        <h2 class="section__buble">Blog</h2>
        <p class="section__subtitle">
          The <span class="section__accent">latest news</span> from Molecule.
        </p>
        <p class="section__caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <button class="section__button">View all</button>
        </p>
        <ul class="section__articles">
          <BlogArticle
            v-for="article in blog.slice(0, 3)"
            :key="article.title"
            :title="article.title"
            :subtitle="article.Subtitle"
            :image-url="article.imageUrl"
            :author="article.author"
          />
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$accent-color: #794eff;
$accent-bg: rgba(121, 78, 255, 0.8);

.section {
  &__content {
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
    margin: 0 0 toem(30) 0;
  }
  &__subtitle {
    font-size: toem(32);
    font-weight: 700;
    line-height: 110%;
    margin: 0 0 em(6, 32) 0;
  }
  &__accent {
    color: $accent-color;
  }
  &__caption {
    line-height: 150%;
    margin: 0 0 toem(34) 0;
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__button {
    font-size: 1em;
    padding: toem(8) toem(15);
    border-radius: 6px;
    background: #1e313b;
    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.05);
    color: #fff;
  }
  &__articles {
    display: grid;
    align-self: stretch;
    grid-template-columns: repeat(auto-fit, minmax(em(250, 13), 1fr));
    gap: 32px;
    grid-auto-rows: 1fr;
  }
}
</style>
