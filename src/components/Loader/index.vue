<script lang="ts" setup>
import { computed, watch } from "vue";
import { useLoader } from "@/composition/loader";
import { AnimationEndResult } from "@/types/Loader";

const emit = defineEmits<{
    (e: "animation-end", result: AnimationEndResult): void
}>();

const { isLoading, isSuccess, isFail, showLoaderScreen, resetFlags } = useLoader();

const RESULT_ANIMATION_NAME = "show-result";
const RESULT_ANIMATION_DUR = 500;
const ROTATE_ANIMATION_NAME = "rotate";
const Y_POINT_IN_STASH = "90%";
const Y_POINT_IN_MIDDLE = "-50%";
const DURATION_TO_HIDE_OBJ = 500;

const textY = Y_POINT_IN_STASH;
const textAnimationDuration = RESULT_ANIMATION_DUR / 1000 + "s";
const durationOfHiding = DURATION_TO_HIDE_OBJ / 1000 + "s";

const circleY = computed(() => {
    if (isLoading.value) {
        return Y_POINT_IN_MIDDLE;
    }

    return Y_POINT_IN_STASH;
});

const circleAnimationName = computed(() => {
    if (isLoading.value) {
        return ROTATE_ANIMATION_NAME;
    }

    return "";
});

const successTextAnimationName = computed(() => {
    if (!isSuccess.value) {
        return "";
    }

    return RESULT_ANIMATION_NAME;
});

const failTextAnimationName = computed(() => {
    if (!isFail.value) {
        return "";
    }

    return RESULT_ANIMATION_NAME;
});

// to give user time to understand what did happen I add 500ms
const timeToCompleteAnimation = RESULT_ANIMATION_DUR + DURATION_TO_HIDE_OBJ + 500;
function emitAnimationEnd() {
    const result: AnimationEndResult = {
        isSuccess: isSuccess.value,
        isFail: isFail.value,
    };

    resetFlags();
    emit("animation-end", result)
}

watch([isSuccess, isFail], ([newSuccess, newFail]) => {
    if (newSuccess || newFail) {
        setTimeout(emitAnimationEnd, timeToCompleteAnimation);
    }
});
</script>

<template>
    <transition name="loader-component">
        <div
            v-if="showLoaderScreen"
            class="loader"
        >
            <div class="loader__circle  loader__circle--white"></div>

            <div class="loader__circle  loader__circle--transparent"></div>

            <h3 class="loader__text loader__text--success">
                Success!
            </h3>

            <h3 class="loader__text loader__text--fail">
                Fail :(
            </h3>

            <div class="loader__stash"></div>
        </div>
    </transition>
</template>

<style lang="scss">
$circle-diameter: 50px;

.loader {
    $root: &;

    position: absolute;
    z-index: $z-index-over-everything;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: $second-color;
    border-radius: $border-radius;

    &__circle {
        position: absolute;
        top: 50%;
        left: 50%;
        width: $circle-diameter;
        height: $circle-diameter;
        transform: translate(-50%, v-bind(circleY));
        border-style: solid;
        border-width: 8px;
        border-radius: 50%;
        transition: transform v-bind(durationOfHiding);

        &#{ $root }__circle--white {
            border-color: $fourth-color;
        }

        &#{ $root }__circle--transparent {
            animation-name: v-bind(circleAnimationName);
            animation-timing-function: linear;
            animation-duration: 1s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;

            &::after {
                content: "";
                position: absolute;
                top: -3.5px;
                left: -3.5px;
                width: 11px;
                height: 11px;
                border-radius: 50%;
                background-color: $first-color;
            }
        }
    }

    &__text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, v-bind(textY));
        text-align: center;
        color: $font-general;
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 2px;

        animation-timing-function: cubic-bezier(0.76, 0, 0.24, 1);
        animation-duration: v-bind(textAnimationDuration);
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-delay: v-bind(durationOfHiding);

        &#{ $root }__text--success {
            animation-name: v-bind(successTextAnimationName);
        }

        &#{ $root }__text--fail {
            animation-name: v-bind(failTextAnimationName);
        }
    }

    &__stash {
        position: absolute;
        width: 100%;
        height: calc(50% - calc($circle-diameter / 2 + 1px));
        bottom: 0;
        z-index: $z-index-over-everything;
        background-color: $second-color;
    }
}

@keyframes rotate {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

@keyframes show-result {
    0% {
        transform: translate(-50%, 90%);
    }

    100% {
        transform: translate(-50%, -50%);
    }
}
</style>
