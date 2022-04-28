<script setup lang="ts">
import TheCurtain from "@/components/TheCurtain/index.vue";
import TheLogo from "@/components/TheLogo/index.vue";
import VLink from "@/components/VLink/index.vue";
import { useDevice } from "./composition/device";


const { isMobile } = useDevice();
function defineLogoProps(obj: Record<string, string | boolean>) {
    if (!isMobile.value) {
        obj = {
            "width": "450px",
            "height": "150px",
            "with-animation": true,
        };
    }

    return obj;
}
// should be reactive to react on scroll
const logoProps = defineLogoProps({});

</script>

<template>
    <section class="app">
        <TheCurtain />

        <div class="app__logo">
            <TheLogo
                v-bind="logoProps"
            />
        </div>

        <div class="app__content">

            <router-view v-slot="{ Component }">
                <Transition name="translate" mode="out-in">
                    <component :is="Component" />
                </Transition>
            </router-view>

            <router-view
                :key="$route.fullPath"
                name="modal"
                v-slot="{ Component }"
            >
                <Transition name="fade">
                    <component :is="Component" />
                </Transition>
            </router-view>
        </div>

        <aside class="app__aside">
            <VLink
                :path="{ name: 'Home' }"
                bold
                letter-spacing="2px"
            >
                about the author
            </VLink>
        </aside>
    </section>
</template>

<style lang="scss">
@import "@/styles/base";
#app {
    min-height: 100vh;
}

.app {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: inherit;

    &__logo {
        padding-top: 75px;
        margin-bottom: 32px;
    }

    &__aside {
        display: flex;
        justify-content: center;
        margin: auto 0 0;
        padding: 16px;
        width: 80%;
        border-top: .5px solid $input-border--focus;
    }
}
</style>
