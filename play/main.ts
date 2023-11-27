import { createApp } from 'vue';
import App from './app.vue';
import faneUi from '@fane-ui/components';
const app = createApp(App);
app.use(faneUi);
app.mount('#app');
