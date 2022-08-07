import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import DevUI from 'vue-devui';
import router from './router';
import 'vue-devui/style.css';
import '@devui-design/icons/icomoon/devui-icon.css';
import './mock/home/index.ts';

createApp(App).use(DevUI).use(router).mount('#app');
