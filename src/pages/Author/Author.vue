<script lang="ts" setup>
import Slider from "@/components/Slider/Slider.vue";

</script>

<template>
    <section class="author">
        <div class="author__slider">
            <Slider class="author__slider" />
        </div>
    </section>
</template>

<style lang="scss">
.author {
    &__slider {
        height: 420px;
        width: 100%;
    }
}
</style>