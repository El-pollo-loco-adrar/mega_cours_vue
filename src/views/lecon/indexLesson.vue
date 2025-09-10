<template>
  <h1 class="text-3xl">Les Leçons</h1> 
  <RouterLink to="/inline-templating"><button class="btn btn-wide">Inline templating</button></RouterLink>
  <RouterLink to="/attribute-binding"><button class="btn btn-wide">Attribute binding</button></RouterLink>
  <RouterLink to="/two-way-binding"><button class="btn btn-wide">Two way binding</button></RouterLink>
  <RouterLink to="/event-binding"><button class="btn btn-wide">Event Binding</button></RouterLink>
  <RouterLink to="/text-interpolation"><button class="btn btn-wide">Text interpolation</button></RouterLink>
  <RouterLink to="/watcherLesson"><button class="btn btn-wide">Watcher</button></RouterLink>

</template>

<script setup lang='js'>
  import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
</style>