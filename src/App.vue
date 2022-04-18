<script setup lang="ts">
import TheCurtain from "@/components/TheCurtain/index.vue";
</script>

<template>
    <TheCurtain />
    <h1 class="title">
        hello world
    </h1>
    <div>
        <router-view />

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
</template>

<style lang="scss">
@import "@/styles/base";
.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px auto;
    height: 200px;
    max-width: 400px;
    padding: 0 8px;
}

.title {
    color: white;
}
</style>
