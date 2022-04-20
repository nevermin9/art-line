import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import routesNames from "./routesNames";
import { registerGlobalHooks } from "./guards/global";
import { setDefaultViewComponent } from "./guards/per-route";

const Home = () => import("@/pages/Home/index.vue");
const ModalRoute = () => import("@/pages/ModalRoute/index.vue");
const Gallery = () => import("@/pages/Gallery/index.vue");

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: routesNames.home,
        component: Home,
    },
    {
        path: "/sign-in",
        name: routesNames.signIn,
        components: {
            default: Home,
            modal: ModalRoute,
        }, 
        props: {
            modal: {
                componentName: routesNames.signIn,
            }
        },
        meta: {
            isModal: true,
            lastNotModalRoute: null,
        },
        beforeEnter: setDefaultViewComponent,
    },
    {
        path: "/sign-up",
        name: routesNames.signUp,
        components: {
            default: Home,
            modal: ModalRoute,
        }, 
        props: {
            modal: {
                componentName: routesNames.signUp,
            }
        },
        meta: {
            isModal: true,
            lastNotModalRoute: null,
        },
        beforeEnter: setDefaultViewComponent,
    },
    {
        path: "/gallery",
        name: routesNames.gallery,
        component: Gallery,
        meta: {
            forLogged: true,
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

registerGlobalHooks(router);

export default router;

