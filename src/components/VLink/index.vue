<script lang="ts" setup>
import { RouteLocationRaw } from "vue-router"
import { toRefs, PropType, computed } from "vue";

const props = defineProps({
    path: {
        type: [String, Object] as PropType<RouteLocationRaw>,
        default: null,
    },
    fontSize: {
        type: String,
        default: "16px",
    },
    uppercase: {
        type: Boolean,
        default: false,
    },
    bold: {
        type: Boolean,
        default: false,
    },
    letterSpacing: {
        type: String,
        default: "normal"
    },
});

const componentType = computed(() => {
    return props.path ? "router-link" : "button";
});

const { fontSize, letterSpacing } = toRefs(props);

</script>

<template>
    <component :is="componentType"
        class="v-link"
        :to="path"
    >
        <span
            :class="{
                'v-link__text': true,
                'v-link__text--uppercase': uppercase,
                'v-link__text--bold': bold,
            }">
            <slot></slot>
        </span>

        <span class="v-link__decor-line"></span>
    </component>
</template>

<style lang="scss">
.v-link {
    $root: &;

    display: flex;
    flex-direction: column;
    width: min-content;
    text-decoration: none;
    white-space: nowrap;
    background-color: transparent;
    border: none;
    outline: none;

    @include device-with-hover {
        &:hover {
            cursor: pointer;
        }
    }

    &__text {
        font-size: v-bind(fontSize);
        letter-spacing: v-bind(letterSpacing);
        color: $font-general;
        transition: color $animation-duration;

        &#{ $root }__text--uppercase {
            text-transform: uppercase;
        }

        &#{ $root }__text--bold {
            font-weight: 700;
        }
    }

    &__decor-line {
        width: 100%;
        height: 5px;
        background-color: $font-general;
        transform: translateY(1px) rotate(2deg);
        opacity: 1;
        z-index: -1;

        @include media("L") {
            transform: translateY(5px);
            opacity: 0;
            transition: all $animation-duration;
        }
    }

    @include device-with-hover {
        &:hover {
            #{ $root }__text {
                color: $third-color;
            }

            #{$root}__decor-line {
                transform: translateY(1px) rotate(2deg);
                opacity: 1;
            }
        }
    }

    &:active {
        #{ $root }__text {
            color: $third-color;
            transform: translateY(2px);
        }

        #{$root}__decor-line {
            transform: translateY(1px);
            opacity: 1;
        }
    }
}

@keyframes underline {
    0% {
        opacity: 0;
        transform: translateY(5px);
    }

    100% {
        opacity: 1;
        transform: translateY(1px);
    }
}
</style>