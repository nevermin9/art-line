<script setup lang="ts">
import TheCurtain from "@/components/TheCurtain/index.vue";
import TheLogo from "@/components/TheLogo/index.vue";
import VLink from "@/components/VLink/index.vue";
import { onMounted, ref } from "vue";
import { useDevice } from "@/composition/device";
import routesNames from "@/router/routesNames";
import { useQueryProvider } from "vue-query";

useQueryProvider();

const { isMobile } = useDevice();
const isScrolled = ref(false);

onMounted(() => {
    function scrollListener() {
        isScrolled.value = true;
        window.removeEventListener("scroll", scrollListener);
    }

    window.addEventListener("scroll", scrollListener);
});

</script>

<template>
    <section class="app">
        <!-- <TheCurtain /> -->

        <header class="app__header"
            :class="{ 'app__header--small': isScrolled }"
        >
            <div class="app__logo-box">
                <TheLogo
                    class="app__logo"
                    width="170px"
                    height="70px"
                    :with-animation="!isMobile"
                />
            </div>
        </header>

        <main class="app__content">

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
        </main>

        <aside class="app__aside">
            <VLink
                v-show="$route.name !== routesNames.author"
                :path="{ name: routesNames.author }"
                bold
                letter-spacing="2px"
            >
                about the author
            </VLink>

            <VLink
                v-show="$route.name === routesNames.author"
                :path="{ name: routesNames.home }"
                bold
                letter-spacing="2px"
            >
                back
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
    $root: &;

    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: inherit;

    &__header {
        position: sticky;
        top: 0;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 225px;
        margin-bottom: 32px;
        background-color: $second-color;
        transition: height $animation-duration;

        &#{ $root }__header--small {
            height: 102px;

            #{ $root }__logo {
                transform: scale(1);
            }
        }
    }

    &__logo-box {
        display: flex;
        align-items: center;
        height: 100%;
        transition: transform $animation-duration;
    }

    &__logo {
        transform: scale(1.5);
        transition: transform $animation-duration;

        @include media("L") {
            transform: scale(2.3);
        }
    }

    &__content {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 8px 16px;

        @include media("L") {
            padding: 16px 32px;
        }
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
