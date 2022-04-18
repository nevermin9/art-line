<script lang="ts" setup>
import { defineAsyncComponent } from "vue"
import { Close } from "@vicons/ionicons5"
import { Icon } from "@vicons/utils"
import { useRouter, useRoute, RouteLocationRaw } from "vue-router";

const router = useRouter();
const route = useRoute();

function closeModalRoute(e: Event) {
    const { lastNotModalRoute } = route.meta;
    router.push(lastNotModalRoute as RouteLocationRaw);
}

const props = defineProps({
    componentName: {
        type: String,
        required: true,
    },
});

const Component = defineAsyncComponent(() => {
    return import(`./children/${props.componentName.replace(/\s+/g, '')}/index.vue`)
});



</script>

<template>
    <div class="modal-route">
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
    }

    &__close-box {
        position: absolute;
        right: 10px;
        top: 10px;
    }

    &__close-btn {
        border: none;
        background-color: transparent;
    }

    &__close-ico {
        color: $font-passive;
        transition: all .3s;

        &:hover,
        &:active {
            color: $font-general;
        }

        &:active {
            transform: translateY(3px);
        }
    }
}
</style>