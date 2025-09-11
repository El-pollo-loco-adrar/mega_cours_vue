<template>
    <h1 class="text-3xl">Les différents exercices</h1>
    <router-link to="/dataBinding"><button class="btn btn-wide">Data Binding</button></router-link>
    <router-link to="/von"><button class="btn btn-wide">v-on 1</button></router-link> 
    <router-link to="/von2"><button class="btn btn-wide">v-on 2</button></router-link> 
    <router-link to="/vonBug"><button class="btn btn-wide">v-on à ne pas faire</button></router-link> 
    <router-link to="/watcher"><button class="btn btn-wide">watcher</button></router-link> 
    <router-link to="/dynamicBinding"><button class="btn btn-wide">Dynamic Binding</button></router-link> 
    <router-link to="/inputDynamic"><button class="btn btn-wide">Input Dynamic Binding</button></router-link> 
    <router-link to="/conditionnal"><button class="btn btn-wide">Conditionnal</button></router-link> 
</template>

<script setup lang='js'>
    import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
</style>