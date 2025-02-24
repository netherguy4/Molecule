import './assets/nullstyle.css'
import 'animate.css'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { plugin, defaultConfig } from '@formkit/vue'
import Toast from 'vue-toastification'
import CIcon from '@/components/CIcon.vue'

import App from './App.vue'

const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(plugin, defaultConfig())
app.use(Toast)
app.component('CIcon', CIcon)
app.mount('#app')
