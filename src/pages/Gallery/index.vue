<template>
    <section class="gallery" >
        <h1>
            i am gallery
        </h1>
        <router-link :to="{ name: 'Home' }">
            home
        </router-link>

        <!-- DENSE, squares of different sizes, with gaps, overlay for short description -->

        <article class="gallery__grid-box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </article>
    </section>
</template>

<style lang="scss">
.gallery {
    flex: 1;

    &__grid-box {
        display: grid;
        grid-template-rows: repeat(3, 300px);
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
        max-width: 700px;
        width: 100%;
        height: 100%;

        & > div {
            width: 100%;
            height: 100%;
            background-color: khaki;
        }
    }
}
</style>