import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import '@/style/index.scss';
import i18n from './locales';
import 'virtual:svg-icons-register';
import svgIcon from './components/SvgIcon.vue';

const app = createApp(App);
app.component('SvgIcon', svgIcon);
app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount('#app');
