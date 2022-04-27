import { ref, computed } from "vue";

const isLoading = ref(false);
const isSuccess = ref(false);
const isFail = ref(false);

export function useLoader() {
    const showLoaderScreen = computed(() => {
        return isLoading.value || isSuccess.value || isFail.value;
    });

    function resetFlags() {
        isLoading.value = isSuccess.value = isFail.value = false;
    }

    function successfulFinishLoading() {
        isLoading.value = false;
        isSuccess.value = true;
    }

    function failedFinishLoading() {
        isLoading.value = false;
        isFail.value = true;
    }

    function startLoading() {
        isLoading.value = true;
    }

    return {
        isLoading,
        isSuccess,
        isFail,
        showLoaderScreen,
        startLoading,
        successfulFinishLoading,
        failedFinishLoading,
        resetFlags,
    };
}
