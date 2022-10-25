<script lang="ts" setup>
import VInput from "@/components/VInput/index.vue"
import VButton from "@/components/VButton/index.vue"
import Loader from "@/components/Loader/index.vue";

import { AnimationEndResult } from "@/types/Loader";
import routesNames from "@/router/routesNames";
import { computed } from "vue";
import { useValidation } from "@/composition/validation";
import { useLoader } from "@/composition/loader";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";

const {
    startLoading,
    successfulFinishLoading,
    failedFinishLoading,
} = useLoader();

const router = useRouter();

const userStore = useUserStore();

function actionSubscriber(obj: any) {
    console.log("actionSubscriber", obj);
}

userStore.$onAction(actionSubscriber);

const {
    email,
    emailErrors,
    password,
    repeatPassword,
    passwordErrors,
    repeatPasswordErrors,
} = useValidation();

const isValidForm = computed(() => {
    return emailErrors.value.length === 0 &&
        passwordErrors.value.length === 0 &&
        repeatPasswordErrors.value.length === 0;
});

function onSubmit(e: Event) {
    if (!isValidForm.value) {
        return;
    }

    startLoading();

    userStore.signUp(email.value, password.value)
        .then(() => {
            successfulFinishLoading();
        })
        .catch(() => {
            failedFinishLoading();
        });
}

function onAnimationEnd(result: AnimationEndResult) {
    if (result.isSuccess) {
        router.push({ name: routesNames.gallery });
    }
}

</script>

<template>
    <div class="auth-box">
        <Loader @animation-end="onAnimationEnd" />

        <h2 class="auth-box__headline">
            Sign up
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
                :errors="emailErrors"
            />

            <VInput
                class="auth-box__input auth-box__input--password"
                v-model="password"
                label="Password"
                placeholder="*********"
                type="password"
                :errors="passwordErrors"
            />

            <VInput
                class="auth-box__input auth-box__input--last-input"
                v-model="repeatPassword"
                label="Repeat password"
                placeholder="*********"
                type="password"
                :errors="repeatPasswordErrors"
            />

            <VButton
                class="auth-box__btn"
                btn-type="submit"
                :disabled="!isValidForm"
            >
                <template #text>
                    Sign up
                </template>
            </VButton>

            <p class="auth-box__suggest-box">
                <div class="auth-box__decor-line auth-box__decor-line--left"></div>

                <span class="auth-box__suggest-text">
                    or
                </span>

                <div class="auth-box__decor-line auth-box__decor-line--right"></div>
            </p>

            <VButton
                class="auth-box__btn"
                design="second"
                :path="{ name: routesNames.signIn }"
            >
                <template #text>
                    Sign in
                </template>
            </VButton>
        </form>
    </div>
</template>

<style lang="scss">
@import "@/styles/pages/ModalRoute/children/AuthBox";
</style>



