<script setup lang="ts">
// import TheCurtain from "@/components/TheCurtain/index.vue";
import VInput from "@/components/VInput/index.vue";
</script>

<template>
    <!-- <TheCurtain /> -->
    <h1 class="title">
        hello world
    </h1>
    <div class="form">
        <VInput
            label="Lorem"
            placeholder="Write something stupid"
            error="it's error"
        />

        <VInput
            label="Lorem"
            placeholder="Write something stupid"
        />
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
