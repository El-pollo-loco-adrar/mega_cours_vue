<template>
  <h1 class="text-xl font-bold text-center">Eval numéro 1</h1>

  <UserActive :user="user" />
  <UserData @update-user="updateUser"/>
</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

import UserActive from '../../components/UserActive.vue';
import UserData from '../../components/UserData.vue';

const user = ref({
  name: "John",
  age: 25
})

function updateUser(newUser){
  user.value = newUser
}
</script>

<style scoped lang="css">
</style>