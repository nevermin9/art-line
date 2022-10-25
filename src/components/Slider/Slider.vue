<script lang="ts" setup>
import { ref, onMounted } from 'vue';

defineProps({
    height: {
        type: String,
        default: "420px",
    },
})
const slider = ref<HTMLElement | null>(null)
const width = ref<string>("");

onMounted(() => {
    width.value = `${slider.value?.getBoundingClientRect().width}px;`
})


</script>
<template>
    <section class="slider" ref="slider">
        <article class="slider__item slider__item--red"></article>
        <article class="slider__item slider__item--green"></article>
        <article class="slider__item slider__item--blue"></article>
    </section>
</template>

<style lang="scss">
.slider {
    display: flex;
    height: 100%;
    // height: v-bind("$props.height");
    width: 100%;
    background-color: black;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    overflow-y: hidden;
    // hide scrollbars mixin
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
    // overflow: hidden;

    &__item {
        height: 100%;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 100%;
        scroll-snap-align: center;

        &--green {
            background-color: green;
        }

        &--red {
            background-color: red;
        }

        &--blue {
            background-color: blue;
        }
    }
}
</style>