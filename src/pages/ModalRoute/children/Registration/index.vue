<script lang="ts" setup>
import { ref } from "vue"
import VInput from "@/components/VInput/index.vue"
import VButton from "@/components/VButton/index.vue"
import useAuth from "@/composition/auth";

const email = ref("");
const password = ref("");
const repeatPassword = ref("");
const { registerUser } = useAuth();

function onSubmit(e: Event) {
    console.log("aaaaaa", e)
    registerUser(email.value, password.value);
}

</script>

<template>
    <div class="auth-box">
        <form
            class="auth-box__form"
            @submit.prevent="onSubmit"
        >
            <VInput
                class="auth__input auth__input--email"
                v-model="email"
                label="Email"
                placeholder="your_email@emailbox.com"
                type="email"
            />

            <VInput
                class="auth__input auth__input--password"
                v-model="password"
                label="Password"
                placeholder="*********"
                type="password"
            />

            <VInput
                class="auth__input auth__input--repeat-password"
                v-model="repeatPassword"
                label="Repeat password"
                placeholder="*********"
                type="password"
            />

            <VButton
                class="auth__btn"
                type="submit"
            >
                <template #text>
                    Register
                </template>
            </VButton>

<!-- should be link -->
            <VButton
                class="auth__btn"
                design="second"
                type="button"
            >
                <template #text>
                    Login
                </template>
            </VButton>
        </form>
    </div>
</template>

<style lang="scss">
</style>



