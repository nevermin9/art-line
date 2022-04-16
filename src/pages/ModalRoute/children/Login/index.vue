<script lang="ts" setup>
import { ref } from "vue"
import VInput from "@/components/VInput/index.vue"
import VButton from "@/components/VButton/index.vue"

const email = ref("");
const password = ref("");

</script>

<template>
    <div class="auth-box">
        <h2>
            Login

        </h2>
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

            <VButton
                class="auth__btn"
                type="submit"
            >
                <template #text>
                    Login
                </template>
            </VButton>

<!-- should be link -->
            <VButton
                class="auth__btn"
                design="second"
                type="button"
            >
                <template #text>
                    Register
                </template>
            </VButton>
        </form>
    </div>
</template>

<style lang="scss">
</style>



