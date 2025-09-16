<template>
  <div class="border p-4 rounded mb-2">
    <h2 class="font-bold text-lg">{{ friend.name }}</h2>
    <p>phone: {{ friend.phone }}</p>
    <p>email: {{ friend.email }}</p>
    
    <!-- <p v-if="friend.premium" class="text-green-600 font-semibold">Premium friend</p> -->
    <div v-if="friend.premium" class="badge badge-success text-2xl">Friend premium</div>
    
    <p v-else class="text-red-500 text-2xl">Friend pas premium, déso</p>
    

    <div class="flex space-x-4 justify-center">
      <button class="btn btn-error" @click="deleteThisFriend">Delete</button>

      <button v-if="friend.premium===false" @click="premium" class="btn btn-active btn-warning">Passe en premium</button>
      <button v-else-if="friend.premium === true" @click="premium" class="btn btn-secondary">Dé-premium le</button>
    <!-- <button class="btn btn-success" @click="premium">Premium</button> -->
    
    </div>
    
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount, defineEmits} from 'vue'

const props = defineProps({
  friend: {
    type: Object,
    required: true
  }
})


const emit = defineEmits(["deleteFriend", "togglePremium"])

function deleteThisFriend(){
  emit("deleteFriend", props.friend.id)
}

// function changeInfalse(){
//   props.premium=false
// }
// function changeInTrue(){
//   props.premium= true
// }
function premium(){
  //props.friend.premium = !props.friend.premium
  emit('togglePremium', props.friend.id , !props.friend.premium)
}
</script>

<style scoped lang="css">
</style>