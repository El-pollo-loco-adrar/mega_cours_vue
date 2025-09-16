<template>
  <div class="flex justify-center">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend class="fieldset-legend">Ajoute un premium qui mérite</legend>

      <label class="label">Nom du poto</label>
      <input v-model="name" type="text" class="input"/>

      <label class="label">Son 06</label>
      <input v-model="phone" type="tel" class="input" />

      <label class="label">Son mail</label>
      <input v-model="email" type="email" class="input" />

      <button type="button" @click="submitForm" class="btn btn-warning mt-4">Ajoute un poto</button>
    </fieldset>
  </div>
</template>

<script setup lang='js'>
import { ref,computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const emit = defineEmits(['add-ami'])
const name = ref('')
const phone = ref('')
const email = ref('')

function submitForm() {
  if (!name.value || !phone.value || !email.value){
  return
  }

  emit('add-ami', {
    id: Date.now().toString(),
    name: name.value,
    phone: phone.value,
    email: email.value,
    premium: false
  })
}

</script>

<style scoped lang="css">
</style>