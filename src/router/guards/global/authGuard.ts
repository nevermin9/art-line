import { useUserStore } from "@/store/user";
import { RouteLocationNormalized, RouteLocationRaw  } from "vue-router";
import routesNames from "@/router/routesNames";

export function authGuard(
    to: RouteLocationNormalized,
): void | RouteLocationRaw {
    const userStore = useUserStore();

    if (to.meta?.forLogged && !userStore.isLogged) {
        return { name: routesNames.signIn };
    }
}
