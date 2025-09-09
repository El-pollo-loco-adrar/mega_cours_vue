<template>
  <div>
    <h1>Exercice interprétation</h1>
    <input v-model="value" />
  </div>

  <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes" />
    </figure>
    <p>{{ tab }}</p>
    <p>{{ name }}</p>
    <p>{{ myFunction() }}</p>
    <p>Steven est </p>
    <p>{{ 1===1 ? 'non' : 'faux' }}</p>

    <input type="number" placeholder="choisis un nombre" v-model="nb1">
    <input type="number" placeholder="Choisis un 2ème" v-model="nb2">
    <p class="text-3xl">Le résultat est : {{ resultat }}</p>
    
    <p>{{ aleatoire() }}</p>
    
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

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});

const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

const value = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emit('update:modelValue', value);
  },
});

const stopWatch = watch(
  () => props.modelValue, async (_newValue, _oldValue) => {
    // do something
  },
  {
    immediate: true
  }
);

onMounted(() => {
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  stopWatch();
});

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

  const aleatoire = () => {
    return Math.random() < 0.5 ? 'Livre Boba Fett' : 'Livre de la Jungle';
  }

</script>

<style scoped lang="scss">
</style>