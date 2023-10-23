import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18next from 'i18next'
import I18NextVue from 'i18next-vue'

i18next.init({
  lng: 'de',
  interpolation: {
    escapeValue: false
  },
  fallbackLng: false,
  resources: {
    de: {
      translation: {
        welcome: 'Willkommen'
      }
    }
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(I18NextVue, { i18next })

app.mount('#app')
