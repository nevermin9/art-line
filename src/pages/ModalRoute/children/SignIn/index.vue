<script lang="ts" setup>
import VInput from "@/components/VInput/index.vue"
import VButton from "@/components/VButton/index.vue"
import Loader from "@/components/Loader/index.vue";

import { AnimationEndResult } from "@/types/Loader";
import { ServerSignInErrorCode } from "@/types/Validation";
import { computed, ref } from "vue"
import routesNames from "@/router/routesNames";
import { useLoader } from "@/composition/loader";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";
import { useValidation } from "@/composition/validation";
import { AuthError } from "firebase/auth";

const {
    startLoading,
    successfulFinishLoading,
    failedFinishLoading,
} = useLoader();

const userStore = useUserStore();

const router = useRouter();

const {
    serverSignInErrorCodes,
    serverSignInErrors,
} = useValidation();

const email = ref("");
const password = ref("");

const isFormFilled = computed(() => {
    return email.value.length > 0 && password.value.length > 0;
})

function onSubmit(e: Event) {
    if (!isFormFilled.value) {
        return;
    }

    startLoading();
    userStore.signIn(email.value, password.value)
        .then(() => {
            successfulFinishLoading();
        })
        .catch((error: AuthError) => {
            serverSignInErrorCodes.push(error.code as ServerSignInErrorCode);
            failedFinishLoading();
        })
}

function onAnimationEnd(result: AnimationEndResult ) {
    if (result.isSuccess) {
        router.push({ name: routesNames.gallery });
    }
}

</script>

<template>
    <div class="auth-box">
        <Loader @animation-end="onAnimationEnd" />

        <h2 class="auth-box__headline">
            Sign in
        </h2>

        <form
            class="auth-box__form"
            @submit.prevent="onSubmit"
        >
            <VInput
                class="auth-box__input auth-box__input--email"
                v-model="email"
                label="Email"
                placeholder="your_email@emailbox.com"
                type="email"
                :errors="serverSignInErrors"
            />

            <VInput
                class="auth-box__input auth-box__input--password"
                v-model="password"
                label="Password"
                placeholder="*********"
                type="password"
            />

            <VButton
                class="auth-box__btn"
                btn-type="submit"
                :disabled="!isFormFilled"
            >
                <template #text>
                    Sign in
                </template>
            </VButton>

            <p class="auth-box__suggest-box">
                <div class="auth-box__decor-line auth-box__decor-line--left"></div>

                <span class="auth-box__suggest-text">
                    or
                </span>

                <div class="auth-box__decor-line auth-box__decor-line--right"></div>
            </p>

<!-- should be link -->
            <VButton
                class="auth-box__btn"
                design="second"
                :path="{ name: routesNames.signUp }"
            >
                <template #text>
                    Sign up
                </template>
            </VButton>
        </form>
    </div>
</template>

<style lang="scss">
@import "@/styles/pages/ModalRoute/children/AuthBox";
</style>



