<template>
  <div class="border p-4 rounded mb-2">
    <h2 class="font-bold text-lg">{{ friend.name }}</h2>
    <p>phone: {{ friend.phone }}</p>
    <p>email: {{ friend.email }}</p>
    <p v-if="friend.premium" class="text-green-600 font-semibold">Premium friend</p>
    <p v-else class="text-red-500">Friend pas premium, déso</p>
  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const props = defineProps({
  friend: {
    type: Object,
    required: true
  }
})


</script>

<style scoped lang="css">
</style>