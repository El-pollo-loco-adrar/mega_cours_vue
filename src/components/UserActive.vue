<template>
    <div class="bg-green-400 p-6 m-8 rounded-lg shadow-xl text-center border-4 border-pink-600">
        <h3 class="text-2xl font-extrabold text-blue-900 underline mb-4">Composant affichage des données utilisateurs</h3>
        <p class="text-lg font-bold text-yellow-900 bg-purple-200 p-2 m-2 rounded">{{ user.name }}</p>
        <p class="text-lg font-bold text-yellow-900 bg-purple-200 p-2 m-2 rounded">{{ user.age }} ans</p>
    </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

defineProps({
    user: {
        type: Object,
        required: true
    }
})

</script>

<style scoped lang="css">
</style>