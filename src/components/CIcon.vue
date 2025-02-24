<template>
  <component v-if="icon" class="c-icon" :class="`c-icon--${iconModifier}`" :is="icon" />
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'CIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      default: '',
    },
    modifier: {
      type: String,
      default: '',
    },
  },
  computed: {
    iconModifier() {
      let { path, modifier } = this
      if (path) path = `${path.split('/').join('-')}-`
      if (modifier) modifier = `-${modifier}`
      return `${path}${this.name}${modifier}`
    },
    iconPath() {
      return this.path && `${this.path}/`
    },
    icon() {
      try {
        return defineAsyncComponent(
          () => import(`@/assets/svg/${this.iconPath}${this.name}.svg?component`),
        )
      } catch {
        let errorMessage = `Icon "${this.name}" not found`
        if (this.path) errorMessage += ` in path "${this.path}"`
        console.error(errorMessage)
        return null
      }
    },
  },
}
</script>
