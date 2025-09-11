<template>
  <h1 class="text-2xl">Dynamic Styling</h1>

  <!-- <div>
    <p :style="dynamicStyle">Texte stylé dynamiquement</p>
    <button class="btn btn-primary" @click="changeColor">Changer la couleur</button>
  </div> -->

  <div class="card bg-base-100 w-96 shadow-sm m-4">
    <h3 class="text-center">dynamic Style Class</h3>
    <div class="card-body bg-green-500">
      <div
        id="card3"
        :class="['card-base', {active3: isActive3}]"
        @click="changeColor2">
          {{ isActive3 ? "carte 3 qui a changé" : "carte 3" }}
      </div>

      <div 
        id="card4" 
        :class="['card-base', {active4: isActive4}]" 
        @click="changeColor2">
          {{ isActive4 ? "putain de carte 4" : "carte 4" }}
      </div>
    </div>
  </div>

  <div class="card bg-base-100 w-96 shadow-sm m-4">
    <h3 class="text-center">dynamic Style Inline</h3>
    <div class="card-body bg-red-500">
      <div id="card1" :style="styleCard1" @click="changeColor">carte 1</div>
      <div id="card2" :style="styleCard2" @click="changeColor">carte 2</div>
    </div>
  </div>


</template>

<script setup lang='js'>
import { ref } from 'vue';

  const styleCard1 = ref({
    color: 'blue',
    fontSize: '20px',
    backgroundColor : 'white',
  })

  const styleCard2 = ref({
    color: 'white',
    fontSize: '20px',
    backgroundColor: 'blue',
  })

  function changeColor(event){
    const id = event.target.id
    if (id === "card1"){
      styleCard1.value.backgroundColor = styleCard1.value.backgroundColor === "white" ? "yellow" : "white"
    }else if (id === "card2"){
      styleCard2.value.backgroundColor = styleCard2.value.backgroundColor === "blue" ? "green" : "blue"
    }
  }

  
  const isActive3 = ref(false)
  const isActive4 = ref(false)

  function changeColor2(event){
    const id = event.target.id
    if (id === "card3"){
      isActive3.value = !isActive3.value
    } else if (id === "card4"){
      isActive4.value = !isActive4.value
    }
  }
  // function changeColor(){
  //   dynamicStyle.value.color = dynamicStyle.value.color === 'blue' ? 'red' : 'blue';
  // }


</script>

<style scoped>
  .card-base{
    background-color: white;
    text-align: center;
    font-size: x-large;
  }
  .active3{
    background: linear-gradient(red, blue);
    color: white;
  }
  .active4{
    background-color: blueviolet;
    color: red;
  }
</style>