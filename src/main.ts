import { createApp } from "vue";
import router from "@/router";
import App from "@/App.vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { VueQueryPlugin } from "vue-query"

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App).use(VueQueryPlugin).use(pinia).use(router).mount("#app");
