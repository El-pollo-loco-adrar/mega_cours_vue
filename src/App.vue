<template>
  <div class="min-h-screen flex flex-col bg-base-200 text-base-content">
    <AppHeader />

    <main class="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
      <router-view></router-view>
      <!-- Installer extension Volar -->
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup lang="js">
  import AppHeader from './components/AppHeader.vue';
  import AppFooter from './components/AppFooter.vue';

</script>

<style scoped>
</style>
