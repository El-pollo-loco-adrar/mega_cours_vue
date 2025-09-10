<template>
  <button @mousedown="increm" class="btn btn-outline btn-success">Cliquez bande de salope</button>
  <h1>{{ count }}</h1>
</template>

<script setup lang='js'>
  import { ref, watch } from 'vue';

  const count = ref(0)

  function increm(event){
    if(event.button ===1){
        count.value +=99
    }else if(event.button ===0) {
        count.value +=1
    }
  }
  watch(count, newVal =>{
    if(newVal === 7){
      count.value =0
    }
  })
</script>

<style scoped lang="scss">
</style>