<script lang="ts" setup>
import VLink from "@/components/VLink/index.vue";
import routesNames from "@/router/routesNames";
import { useUserStore } from "@/store/user";

const userStore = useUserStore();

function signOut(_: Event) {
    userStore.$reset();
}

</script>

<template>
    <section class="home">
        <div class="home__box home__box--first">
            <VLink
                :path="{ name: 'Gallery' }"
                bold
                uppercase
                :font-size="'24px'"
                letter-spacing="2px"
            >
                GO TO GALLERY
            </VLink>
        </div>

        <div class="home__box home__box--second">
            <transition name="fade" mode="out-in">
                <VLink
                    v-if="!userStore.isLogged"
                    :path="{ name: routesNames.signUp }"
                    bold
                    uppercase
                    :font-size="'24px'"
                    letter-spacing="2px"
                >
                    Sign up
                </VLink>

                <VLink
                    v-else
                    @click="signOut"
                    bold
                    uppercase
                    :font-size="'24px'"
                    letter-spacing="2px"
                >
                    Sign out
                </VLink>
            </transition>
        </div>
    </section>
</template>

<style lang="scss">
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @include media("L") {
        flex-direction: row;
        justify-content: center;
    }
}
</style>