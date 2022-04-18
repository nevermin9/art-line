import { NavigationGuardWithThis } from "vue-router";

export type GlobalHooksNames = "beforeEach" | "beforeResolve";

export type GlobalHooksDict = {
    [key in GlobalHooksNames]?: NavigationGuardWithThis<undefined>;
};