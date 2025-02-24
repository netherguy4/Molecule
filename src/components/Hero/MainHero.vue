<script setup>
import HeroContent from './HeroContent.vue'
import HeroFooter from './HeroFooter.vue'
</script>

<template>
  <section class="hero">
    <div class="container">
      <HeroContent />
      <HeroFooter />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  background: #1e313b;
  color: #fff;
  font-size: toem(18);
}
</style>
