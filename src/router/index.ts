import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router"
import routesNames from "./routesNames";

const Home = () => import("@/pages/Home/index.vue")

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
            modal: () => import("@/pages/ModalRoute/index.vue"),
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
        beforeEnter: ((to, from) => {
            if (from.matched.length > 0) {
                to.matched[0].components.default = from.matched[0].components.default;
            }
        })
    },
    {
        path: "/sign-up",
        name: routesNames.signUp,
        components: {
            default: Home,
            modal: () => import("@/pages/ModalRoute/index.vue"),
        }, 
        props: {
            modal: {
                componentName: routesNames.signUp,
            }
        },
        meta: {
            isModal: true,
            lastNotModalRoute: null,
        }
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

function remember(to: any, from: any) {
    if (!from?.meta?.isModal && to.meta.isModal && !to.meta.lastNotModalRoute) {
        to.meta.lastNotModalRoute = {
            path: from.path,
            hash: from.hash,
            query: from.query,
        };
    }

    if (from.meta.isModal && to.meta.isModal) {
        to.meta.lastNotModalRoute = from.meta.lastNotModalRoute;
    }

    if (from.meta.isModal && !to?.meta?.isModal && to.meta.lastNotModalRoute) {
        to.meta.lastNotModalRoute = null;
    }
}


router.beforeResolve(remember);

export default router;

