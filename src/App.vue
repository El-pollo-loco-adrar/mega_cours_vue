<template>

  <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes" />
    </figure>
    <p>{{ tab }}</p>
    <p>{{ name }}</p>
    <p>{{myFunction()}}</p>
    <input type="number" placeholder="choisis un nombre" v-model="nb1">
    <input type="number" placeholder="Choisis un 2ème" v-model="nb2">
    <p class="text-3xl">Le résultat est : {{ add(nb1, nb2) }}</p>
    
    <!-- <div class="card-body">
      <h2 class="card-title">Card Title</h2>
      <h3 class="text-3xl">{{ magicNumber }}</h3>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div> -->
  </div>

</template>

<script setup>
import { ref, computed } from 'vue';

//Variable de l'utilisateur
const nb1 = ref(0);
const nb2 = ref(0);

//constantes
  const magicNumber = 42;
  const tab = [1, 45, 47, 12, 88];
  const name = "José";

  //fonctions
  function myFunction(){
    return "Ma fonction est retournée";
  }

  //fonction d'addition
  const resultat = computed(() => nb1.value + nb2.value)

</script>

<style scoped>
</style>
