<template>
  <div class="flex items-center justify-center bg-yellow-200">
    <div class="bg-pink-300 p-8 rounded-lg shadow-xl w-96 text-center">
      <h3 class="text-2xl font-extrabold text-purple-800 mb-6 transition-all duration-500" :class="{ 'animate-shake bg-lime-400 rotate-6': isAnimating }"
      @animationend="isAnimating = false">Composant formulaire d'édition</h3>

      <form @submit.prevent="submitForm" class="flex flex-col space-y-4">
        <div>
          <label class="font-bold text-green-900 mb-1" >Votre nom :</label>
          <input class="input input-bordered input-error w-full" type="text" v-model="name">
        </div>
        <div>
          <label class="font-bold text-green-900 mb-1">Votre âge :</label>
          <input class="input input-bordered input-warning w-full" type="number" v-model.number="age">
        </div>
        <button class="btn btn-outline btn-secondary font-bold mt-4" type="submit">Mettre à jour</button>
      </form>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const emit = defineEmits(["update-user"])

const name = ref('')
const age = ref('')
const isAnimating = ref(false)

function submitForm() {
  if (!name.value || !age.value){
    return
  }
  emit('update-user', {
    name: name.value,
    age: age.value
  })
  isAnimating.value = true
}

</script>

<style scoped lang="css">

@keyframes shake {
  0% { transform: translateX(0) rotate(0deg); }
  20% { transform: translateX(-10px) rotate(-5deg); }
  40% { transform: translateX(10px) rotate(5deg); }
  60% { transform: translateX(-10px) rotate(-3deg); }
  80% { transform: translateX(10px) rotate(3deg); }
  100% { transform: translateX(0) rotate(0deg); }
}

.animate-shake {
  animation: shake 0.5s ease-in-out;
}

</style>