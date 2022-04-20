<template>
    <h1>
        iam home
    </h1>
    <div>
        <router-link :to="{name: 'Sign In'}">
            sign in
        </router-link>
    </div>
    <div>
        <router-link :to="{ name: 'Gallery' }">
            to gallery
        </router-link>
    </div>
</template>