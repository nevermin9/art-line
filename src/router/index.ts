import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router"
import { routesNames } from "./routesNames";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: routesNames.home,
        component: () => import("@/pages/Home/index.vue"),
        children: [
            {
                path: "",
                name: "Login",
                component: () => import("@/pages/Home/children/Login/index.vue"),
            },
            {
                path: "registration",
                name: routesNames.registration,
                component: () => import("@/pages/Home/children/Registration/index.vue"),
            }
        ]
    },
    {
        path: "/gallery",
        name: routesNames.gallery,
        component: () => import("@/pages/Gallery/index.vue"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

