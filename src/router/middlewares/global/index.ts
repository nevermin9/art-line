import { Router } from "vue-router"
import { GlobalHooksDict, GlobalHooksNames } from "@/types/VRouter";
import { rememberDefaultRoute } from "./rememberDefaultRoute";

const hooksDict: GlobalHooksDict = {
    "beforeEach": rememberDefaultRoute,
};

export function registerGlobalHooks(router: Router) {
    for (const hookName of Object.keys(hooksDict)) {
        router[hookName as GlobalHooksNames](hooksDict[hookName as GlobalHooksNames]!);
    }
}
