<script lang="ts">
const vButtonDesigns = ["first", "second"] as const;
type ButtonDesign = typeof vButtonDesigns[number];

export default {
    inheritAttrs: false
}
</script>

<script setup lang="ts">
import { PropType } from "vue"

defineProps({
    design: {
        type: String as PropType<ButtonDesign>,
        default: vButtonDesigns[0],
        validator: (value: ButtonDesign) => {
            return vButtonDesigns.indexOf(value) !== -1;
        }
    },
    type: {
        type: String as PropType<"button" | "submit" | "reset">,
        default: "button"
    },
});

</script>

<template>
    <div
        class="v-button"
        v-bind="$attrs"
    >
        <button
            :class="{
                'v-button__button': true,
                [`v-button__button--${design}`]: Boolean(design),
            }"
            :type="type"
            @click="$attrs.onClick!"
        >
            <span
                class="v-button__text"
            >
                <slot name="text"></slot>
            </span>
        </button>
    </div>
</template>

<style lang="scss">
.v-button {
    $root: &;

    &__button {
        display: block;
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        padding: 12px 20px;
        border: none;
        background-color: transparent;
        border-radius: $border-radius;
        transition: all .3s;

        &#{ $root }__button--first {
            background-color: $third-color;
            color: $second-color;

            &:hover {
                background-color: $font-general;
            }

        }

        &#{ $root }__button--second {
            border-style: solid;
            border-width: 1px;
            border-color: $third-color;
            color: $third-color;

            &:hover {
                border-color: $font-general;
                color: $font-general;
            }
        }

        &:active {
            transform: translateY(5px);
        }
    }
}
</style>
