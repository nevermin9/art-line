import { RouteLocationNormalized, RouteLocationRaw  } from "vue-router";

export function rememberDefaultRoute(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
): void | RouteLocationRaw {
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
