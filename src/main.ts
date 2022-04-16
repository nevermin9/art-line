import { createApp } from "vue"
import router from "./router"
import App from "./App.vue"
// import { auth } from "./firebase";

createApp(App).use(router).mount('#app')
