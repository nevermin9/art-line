<script lang="ts" setup>
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
        <router-link :to="{ name: 'Gallery' }">
            to gallery
        </router-link>
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