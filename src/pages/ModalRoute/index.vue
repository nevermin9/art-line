<script lang="ts" setup>
import { defineAsyncComponent } from "vue"
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
                    close
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
    align-items: center;
    background-color: rgba($color: #000000, $alpha: .4);

    &__content {
        width: 100%;
        background-color: $second-color;
    }
}
</style>