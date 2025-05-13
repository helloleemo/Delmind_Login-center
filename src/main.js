// Vue 3
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Styles
import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// define
const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
})

// usages
app.use(router)
app.use(vuetify)

app.mount('#app')
