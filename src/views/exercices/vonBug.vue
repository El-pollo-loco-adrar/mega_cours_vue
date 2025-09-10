<template>
  <h2 class="text-2xl">Incrémentation avec v-on</h2>
  <div class="flex gap-6 items-center justify-center mt-10">

  <button  @click="decre" class="btn btn-outline btn-error">-</button>

  <h1>Le nombre : {{ count }}</h1>

  <button @mousedown="increm" class="btn btn-outline btn-success">+</button>
  <p>Click gauche = +1 | click molette = +10</p>
  <p>{{ afficherNameUser() }}</p>
  </div>

</template>

<script setup lang='js'>
  import { ref } from 'vue';

  const count = ref(0)

  function increm(event){
      if(event.button ===1){
          count.value +=99
      }else if(event.button ===0) {
          count.value +=1
      }
  }
  function decre(){
      if(count.value >=11){
          count.value -=85
      }else{
          count.value --
      }
  }
  const username = ref("")
  function afficherNameUser(){
    console.log('La fonction marche')
    if(username.value ===""){
      return "test"
    }else{
      return "autre test"
    }
  }
</script>

<style scoped lang="scss">
</style>