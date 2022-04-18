<script lang="ts">
const vButtonDesigns = ["first", "second"] as const;
type ButtonDesign = typeof vButtonDesigns[number];

export default {
    inheritAttrs: false
}
</script>

<script setup lang="ts">
import { computed, PropType } from "vue"
import { RouteLocationRaw } from "vue-router"

const props = defineProps({
    design: {
        type: String as PropType<ButtonDesign>,
        default: vButtonDesigns[0],
        validator: (value: ButtonDesign) => {
            return vButtonDesigns.indexOf(value) !== -1;
        }
    },
    btnType: {
        type: String as PropType<"button" | "submit" | "reset">,
        default: "button"
    },
    path: {
        type: [String, Object] as PropType<RouteLocationRaw>,
        default: null,
    }
});

const componentType = computed(() => {
    return props.path ? "router-link" : "button";
});

const customAttrs = {
    class: {
        'v-button__button': true,
        [`v-button__button--${props.design}`]: Boolean(props.design),
    },
    [props.path ? "" : "type"]: props.btnType,
    [props.path ? "to" : ""]: props.path,
}

</script>

<template>
    <div
        class="v-button"
        v-bind="$attrs"
    >
        <!-- <component
            :is="componentType"
            :class="{
                'v-button__button': true,
                [`v-button__button--${design}`]: Boolean(design),
            }"
            :type="type"
            @click="$attrs.onClick"
            :to=""
        >
            <span
                class="v-button__text"
            >
                <slot name="text"></slot>
            </span>
        </component> -->
        <component
            :is="componentType"
            v-bind="customAttrs"
            @click="$attrs.onClick"
        >
            <span
                class="v-button__text"
            >
                <slot name="text"></slot>
            </span>
        </component>
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
        padding: 16px 20px;
        border: none;
        background-color: transparent;
        border-radius: $border-radius;
        transition: all .3s;
        text-decoration: none;

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
