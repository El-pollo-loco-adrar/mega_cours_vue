<template>

<div class="flex items-center justify-center">
  <div class="card w-96 bg-base-100 card-lg shadow-sm">
    <div class="card-body">
      <h2 class="text-center font-bold text-lg w-full">Watcher</h2>
      <button @mousedown="increm" class="btn btn-outline btn-success">Cliquez jusqu'à 7</button>
      <h1 class="text-center">{{ count }}</h1>
      <img src="https://media1.tenor.com/m/r1-xtl_tGbEAAAAd/cliquez-putaclic.gif" alt="cliquez">
    </div>
  </div>
</div>

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