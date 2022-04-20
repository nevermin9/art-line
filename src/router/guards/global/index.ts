import { Router } from "vue-router"
import { rememberDefaultRoute } from "./rememberDefaultRoute";
import { authGuard } from "./authGuard";

const beforeEachGuards = [
    rememberDefaultRoute,
    authGuard,
]

export function registerGlobalHooks(router: Router): void {
    for (const guard of beforeEachGuards) {
        router.beforeEach(guard);
    }
}
