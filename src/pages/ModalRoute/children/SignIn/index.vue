<script lang="ts" setup>
import { ref } from "vue"
import VInput from "@/components/VInput/index.vue"
import VButton from "@/components/VButton/index.vue"
import routesNames from "@/router/routesNames";

const email = ref("");
const password = ref("");

function onSubmit(e: Event) {
    console.log("submit success", e);
}

</script>

<template>
    <div class="auth-box">
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



