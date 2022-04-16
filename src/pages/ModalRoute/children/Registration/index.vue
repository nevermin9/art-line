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
        <h2 class="auth-box__headline">
            Registration
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

            <VInput
                class="auth-box__input auth-box__input--last-input"
                v-model="repeatPassword"
                label="Repeat password"
                placeholder="*********"
                type="password"
            />

            <VButton
                class="auth-box__btn"
                type="submit"
            >
                <template #text>
                    Register
                </template>
            </VButton>

<!-- should be link -->
            <VButton
                class="auth-box__btn"
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
.auth-box {
    $root: &;

    padding: 42px 20px 32px;

    &__headline {
        margin-bottom: 16px;
        text-align: center;
        font-size: 24px;
    }

    &__input {
        margin-bottom: 8px;

        &#{ $root }__input--last-input {
            margin-bottom: 16px;
        }
    }

    &__btn:not(:last-child) {
        margin-bottom: 16px;
    }
}
</style>



