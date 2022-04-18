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

        <Transition name="fade">
            <router-view :key="$route.fullPath" name="modal" />
        </Transition>
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
