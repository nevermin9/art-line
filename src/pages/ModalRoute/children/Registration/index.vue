<script lang="ts" setup>
import { ref } from "vue"
import VInput from "@/components/VInput/index.vue"
import VButton from "@/components/VButton/index.vue"

const email = ref("");
const password = ref("");
const repeatPassword = ref("");

</script>

<template>
    <div class="auth-box">
        <form class="auth-box__form">
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



