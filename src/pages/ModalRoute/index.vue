<script lang="ts" setup>
import { defineAsyncComponent } from "vue"
import { Close } from "@vicons/ionicons5"
import { Icon } from "@vicons/utils"

const props = defineProps({
    componentName: {
        type: String,
        required: true,
    },
});

const Component = defineAsyncComponent(() => {
    return import(`./children/${props.componentName}/index.vue`)
});

</script>

<template>
    <Teleport to="body">
        <div class="modal-route">
            <div class="modal-route__content">
                <div class="modal-route__close-box">
                    <Icon class="modal-route__close-ico" size="24">
                        <Close />
                    </Icon>
                </div>

                <div class="modal-route__component-box">
                    <component :is="Component" />
                </div>
            </div>
        </div>
    </Teleport>
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