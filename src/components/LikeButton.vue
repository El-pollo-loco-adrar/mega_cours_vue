<template>
    <div class="flex gap-2 bg-blue-500">
        <p>ici composant like buton parent</p>
        <button class="btn btn-success" @click="like">Like</button>
        <button class="btn btn-error" @click="unlike">Unlike</button>
    </div>
</template>

<script setup>
import { defineEmits } from "vue";

// Définition des événements émis par le composant
// Phase 1 on déclare les évents
const emit = defineEmits(["liked", "unliked"]);
// const uneData = ref('uneDonnée');
// const uneAutreDonnee = ref(12);

// Phase 2 on émet les évents
function like() {
    emit("liked");
}

function unlike() {
    emit("unliked");
}
</script>

<style scoped>
/* Les styles sont gérés par DaisyUI et Tailwind, pas de CSS nécessaire ici. */
</style>