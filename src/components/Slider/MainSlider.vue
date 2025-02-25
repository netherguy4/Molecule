<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SliderSlide from './SliderSlide.vue'

import prevButton from '@/assets/svg/arrow-left.svg'
import nextButton from '@/assets/svg/arrow-right.svg'

const modules = [Navigation, Pagination, A11y]
</script>

<template>
  <section class="slider">
    <div class="container slider__container">
      <swiper
        :modules="modules"
        :navigation="{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }"
        :loop="true"
        :pagination="{ clickable: true }"
      >
        <swiper-slide v-for="n in 3" :key="n">
          <SliderSlide
            name="Mark Watney"
            occupation="Marketing Director, Chill Industries"
            title="Using molecule for our web was the best decision we made last year — and we made a ton of
            great decisions, trust me!"
            logo="slide1"
            image-url="./img/slide-1.jpg"
          />
        </swiper-slide>
        <button class="swiper-button-prev">
          <Component style="width: 16px; height: 16px" :is="prevButton"></Component>
        </button>
        <button class="swiper-button-next">
          <Component style="width: 16px; height: 16px" :is="nextButton"></Component>
        </button>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
.slider__container {
  position: relative;
}
.swiper-pagination-bullet {
  border-radius: 0%;
  background: rgba(34, 34, 34, 0.4);
  opacity: 1;
  transition: $hoverTime;
  @include hover {
    scale: 1.2;
  }
  &-active {
    background: #222;
  }
}
.swiper-button-prev,
.swiper-button-next {
  width: 24px;
  height: 24px;
  padding: 2px;
  transition: $hoverTime;
  @include hover {
    scale: 1.2;
  }
  &:active {
    scale: 0.9;
  }
}
.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}
</style>
