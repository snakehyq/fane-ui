import { createApp } from 'vue'
import App  from './app.vue'
import { FaneButton } from 'fane-ui'
const app = createApp(App)
app.use(FaneButton)

app.mount('#app')
