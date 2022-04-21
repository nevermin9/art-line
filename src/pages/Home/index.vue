<script lang="ts" setup>
import VLink from "@/components/VLink/index.vue";
</script>

<template>
    <h1>
        iam home
    </h1>
    <div>
        <router-link :to="{name: 'Sign In'}">
            sign in
        </router-link>
    </div>
    <div>
        <VLink
            :path="{ name: 'Gallery' }"
            bold
            uppercase
            :font-size="'18px'"
            letter-spacing="2px"
        >
            GO TO GALLERY
        </VLink>
    </div>

    <section class="home">
        <div class="home__logo-box">
        </div>
    </section>
</template>

<style lang="scss">
.home {
    &__logo-box {
        display: flex;
        justify-content: center;
    }
}

</style>