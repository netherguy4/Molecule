<script setup>
import company1 from '@/assets/svg/company1.svg'
import company2 from '@/assets/svg/company2.svg'
import company3 from '@/assets/svg/company3.svg'
import company4 from '@/assets/svg/company4.svg'
import company5 from '@/assets/svg/company5.svg'
import company6 from '@/assets/svg/company6.svg'
</script>

<template>
  <p data-animated-text class="hero__paragraph">Used by the leading SaaS companies of tomorrow.</p>
  <div class="hero__flex-companies">
    <component :is="company1" />
    <component :is="company2" />
    <component :is="company3" />
    <component :is="company4" />
    <component :is="company5" />
    <component :is="company6" />
  </div>
</template>

<style lang="scss" scoped>
.hero {
  &__paragraph {
    margin: 0 0 em(10, 18);
    text-align: center;
  }
  &__flex-companies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    column-gap: em(48, 18);
    row-gap: em(18, 18);
    padding: 0 0 em(80, 18);
  }
}
</style>
