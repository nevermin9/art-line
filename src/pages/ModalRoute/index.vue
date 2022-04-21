<script lang="ts" setup>
import { defineAsyncComponent } from "vue"
import { Close } from "@vicons/ionicons5"
import { Icon } from "@vicons/utils"
import { useRouter, useRoute, RouteLocationRaw } from "vue-router";

const props = defineProps({
    componentName: {
        type: String,
        required: true,
    },
});

const router = useRouter();
const route = useRoute();

function closeModalRoute(e: Event) {
    const { lastNotModalRoute } = route.meta;
    router.push(lastNotModalRoute as RouteLocationRaw);
}

const Component = defineAsyncComponent(() => {
    return import(`./children/${props.componentName.replace(/\s+/g, '')}/index.vue`)
});
</script>

<template>
    <div class="modal-route" @click.self="closeModalRoute">
        <div class="modal-route__content">
            <div class="modal-route__close-box">
                <button
                    @click="closeModalRoute"
                    class="modal-route__close-btn"
                    type="button"
                >
                    <Icon class="modal-route__close-ico" size="24">
                        <Close />
                    </Icon>
                </button>
            </div>

            <div class="modal-route__component-box">
                <component :is="Component" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.modal-route {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background-color: rgba($color: #000000, $alpha: .4);

    &__content {
        position: relative;
        width: 100%;
        max-width: 450px;
        background-color: $second-color;
        border-radius: $border-radius;
        opacity: 0;
        transform: translateY(100px);

        animation-name: modal-up;
        animation-duration: $animation-duration;
        animation-delay: .1s;
        animation-fill-mode: forwards;
    }

    &__close-box {
        position: absolute;
        right: 10px;
        top: 10px;
    }

    &__close-btn {
        border: none;
        background-color: transparent;

        @include device-with-hover {
            &:hover {
                cursor: pointer;
            }
        }
    }

    &__close-ico {
        color: $font-passive;
        transition: all $animation-duration;

        &:hover,
        &:active {
            color: $font-general;
        }

        &:active {
            transform: translateY(3px);
        }
    }
}

@keyframes modal-up {
    0% {
        opacity: 0;
        transform: translateY(100px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>