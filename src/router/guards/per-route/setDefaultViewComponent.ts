import { RouteLocationNormalized } from "vue-router";

export function setDefaultViewComponent(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    if (from.matched.length > 0) {
        to.matched[0].components.default = from.matched[0].components.default;
    }
}
