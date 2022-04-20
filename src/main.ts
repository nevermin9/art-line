import { createApp } from "vue"
import router from "./router"
import App from "./App.vue"
import { createPinia } from "pinia";

const pinia = createPinia();
console.log('🚀 ~ file: main.ts ~ line 7 ~ pinia', pinia.state);

createApp(App).use(pinia).use(router).mount('#app')
console.log('🚀 ~ file: main.ts ~ line 7 ~ pinia', pinia.state);
