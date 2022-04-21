import { computed } from "vue";

export function useDevice() {
    const mediaQuery = "(pointer: coarse)"

    const isMobile = computed<boolean>(() => {
        return window.matchMedia(mediaQuery).matches
    });

    return {
        isMobile,
    };
}
