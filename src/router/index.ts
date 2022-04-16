import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router"
import { routesNames } from "./routesNames";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: routesNames.home,
        component: () => import("@/pages/Home/index.vue"),
    },
    {
        path: "/login",
        name: routesNames.login,
        component: () => import("@/pages/ModalRoute/index.vue"),
        props: {
            componentName: routesNames.login,
        },
    },
    {
        path: "/registration",
        name: routesNames.registration,
        component: () => import("@/pages/ModalRoute/index.vue"),
        props: {
            componentName: routesNames.registration,
        },
    },
    {
        path: "/gallery",
        name: routesNames.gallery,
        component: () => import("@/pages/Gallery/index.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

