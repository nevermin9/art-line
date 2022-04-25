<script lang="ts" setup>
import { ref, computed } from "vue"
import VInput from "@/components/VInput/index.vue"
import VButton from "@/components/VButton/index.vue"
import routesNames from "@/router/routesNames";
import Loader from "@/components/Loader/index.vue";

const email = ref("");
const password = ref("");

function onSubmit(e: Event) {
    console.log("submit success", e);
}

const loading = ref(true);
const success = ref(false);
const fail = ref(false);
const animationFinishIn = ref(0);
const showLoader = ref(false)

setTimeout(() => {
    showLoader.value = true;
    // success.value = true;
    setTimeout(() => {
        loading.value = false;
        success.value = true;
    }, 2000);
}, 4000);

function onAnimationEnd(e: any) {
    console.log(e);
    showLoader.value = false;
}

</script>

<template>
    <div class="auth-box">
        <transition name="loader-component">
            <Loader
                v-if="showLoader"
                :is-loading="loading"
                :is-success="success"
                :is-fail="fail"
                @animation-end="onAnimationEnd"
            />
        </transition>

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



