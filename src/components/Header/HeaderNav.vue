<script setup></script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__li"><a href="#" class="nav__link _active">Home</a></li>
      <li class="nav__li"><a href="#" class="nav__link">About</a></li>
      <li class="nav__li"><a href="#" class="nav__link">Pricing</a></li>
      <li class="nav__li"><a href="#" class="nav__link">Open positions</a></li>
      <li class="nav__li"><a href="#" class="nav__link">Blog</a></li>
      <li class="nav__li"><a href="#" class="nav__link">Template</a></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  flex-shrink: 0;
  &__list {
    display: flex;
    align-items: center;
    gap: 2em;
    flex-direction: column;
    @media (min-width: $L) {
      flex-direction: row;
    }
  }
  &__li {
    display: flex;
    flex-shrink: 0;
    transition: 0.3s;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      transition: 0.3s ease-in-out;
      width: 0%;
      height: 1.5px;
      background: #794eff;
      bottom: -3px;
      left: 50%;
      translate: -50% 0;
      opacity: 0.7;
    }
    @include hover {
      &::after {
        width: 100%;
      }
    }
  }
  &__link {
    flex-shrink: 0;
    color: #1e313b;
    &:visited {
      color: #1e313b;
    }
    &._active {
      color: #794eff;
    }
  }
}
</style>
