<script lang="ts" setup>
import VLink from "@/components/VLink/index.vue";
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

        <!-- v-if isLogged === false -->
        <div class="home__box home__box--second">
            <VLink
                :path="{ name: 'Sign In' }"
                bold
                uppercase
                :font-size="'24px'"
                letter-spacing="2px"
            >
                Sign in
            </VLink>
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