<template>
    <section class="gallery" >
        <h1>
            i am gallery
        </h1>
        <router-link :to="{ name: 'Home' }">
            home
        </router-link>

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
    &__grid-box {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
        max-width: 700px;
    }
}
</style>