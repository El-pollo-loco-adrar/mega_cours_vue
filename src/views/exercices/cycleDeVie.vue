<!-- LIFE CYCLE VUE -->
<template>
  <h1 class="text-3xl text-center">Life Cycle</h1>

  <p v-if="loadingWeather" class="text-gray-500">Chargement des données</p>
  <p v-else-if="errorWeather" class="text-red-500">Erreur : {{ errorWeather }}</p>
  <div v-else class="card shadow-lg p-4 bg-base-100 text-center mt-8">
    <h4 class="text-xl font-semibold mb-2">Météo à 
      {{  weather.city_info.name }} :
    </h4>
    <p>{{ weather.current_condition.condition }}</p>
    <p>Actuelle 🌡️: {{ weather.current_condition.tmp }}°C</p>
    <p>Température min 🔽: {{ weather.fcst_day_0.tmin }}°C</p>
    <p>Température max 🔼: {{ weather.fcst_day_0.tmax }}°C</p>
  </div>

  <!-- METEO TROLL -->
  
  <!-- <div class="card shadow-2xl p-10 bg-gradient-to-r from-yellow-300 to-red-600 text-left animate-pulse mt-8">
    <h4 class="text-5xl font-black uppercase tracking-widest mb-6 text-blue-700 animate-bounce">
      🌪️ MÉTÉO À {{ weather.city_info.name.toUpperCase() }} 🌪️
    </h4>

    <p v-if="loadingWeather" class="text-purple-500 font-extrabold text-3xl italic animate-ping">
      CHARGEMENT DES DONNÉES !!! ⛈️🌩️
    </p>

    <p v-else-if="errorWeather" class="text-6xl text-orange-800 font-black uppercase rotate-3">
      ⚠️ ERREUR : {{ errorWeather }} ⚠️
    </p>

    <div v-else class="grid grid-cols-1 gap-4 text-4xl font-bold text-green-700 animate-bounce">
      <p class="p-4 border-4 border-black rounded-xl shadow-xl bg-gradient-to-tr from-red-200 to-blue-200 hover:scale-125 hover:rotate-12 transition-all">
        Condition : {{ weather.current_condition.condition }} 🌦️
      </p>
      <p class="p-4 border-4 border-black rounded-xl shadow-xl bg-gradient-to-tr from-green-200 to-yellow-300 hover:scale-125 hover:rotate-12 transition-all">
        Actuelle 🌡️: {{ weather.current_condition.tmp }}°C 🔥❄️
      </p>
      <p class="p-4 border-4 border-black rounded-xl shadow-xl bg-gradient-to-tr from-pink-200 to-purple-300 hover:scale-125 hover:rotate-12 transition-all">
        Temp min 🔽: {{ weather.fcst_day_0.tmin }}°C 🧊
      </p>
      <p class="p-4 border-4 border-black rounded-xl shadow-xl bg-gradient-to-tr from-indigo-200 to-red-300 hover:scale-125 hover:rotate-12 transition-all">
        Temp max 🔼: {{ weather.fcst_day_0.tmax }}°C 🔥
      </p>
    </div>

    <p class="text-center text-5xl text-pink-800 font-extrabold mt-10 animate-spin">
      🌈 MÉTÉO PARTY 🌈
    </p>
  </div> -->

  <div class="card shadow-lg p-4 bg-base-100 text-center mt-8">
    <p v-if="loadingPoke" class="text-gray-500">Chargement des Pokemons</p>
    <p v-else-if="errorPoke" class="text-red-500">Erreur : {{ errorPoke }}</p>
    <ul v-else class="list-disc pl-5">
      <li v-for="(p, index) in pokepoke" :key="index" class="badge badge-primary badge-lg m-2">
        {{ p.name }}
      </li>
    </ul>
  </div>
  <!-- POKEMON TROLL -->
  <!-- <div class="card shadow-2xl p-10 bg-gradient-to-r from-pink-600 to-yellow-300 text-left mt-8 animate-pulse">
    <h4 class="text-4xl font-black uppercase tracking-widest mb-6 text-red-600">
      🐉 Pokémon
    </h4>

    <p v-if="loadingPoke" class="text-purple-500 font-bold text-2xl italic animate-ping">
      CHARGEMENT DES POKÉMON !!! 😱
    </p>

    <p v-else-if="errorPoke" class="text-6xl text-orange-800 font-extrabold uppercase rotate-3">
      ⚠️ ERREUR : {{ errorPoke }} ⚠️
    </p>

    <ul v-else class="pl-0 list-none grid grid-cols-3 gap-6 text-left text-3xl font-bold text-green-700 animate-bounce">
      <li 
        v-for="(p, index) in pokepoke" 
        :key="index" 
        class="p-4 border-4 border-black rounded-xl shadow-xl bg-gradient-to-tr from-red-300 to-blue-200 hover:scale-125 hover:rotate-12 transition-all cursor-crosshair">
        {{ index + 1 }} - {{ p.name.toUpperCase() }} 💥
      </li>
    </ul>

    <p class="text-center text-5xl text-pink-800 font-extrabold mt-10 animate-spin">
      🎉 POKÉMON PARTY 🎉
    </p>
  </div> -->

</template>

<script setup lang='js'>
import { ref, computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'

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

const weather = ref(null);
const loadingWeather = ref(true);
const errorWeather = ref(null);

const pokepoke = ref([]);
const loadingPoke = ref(true);
const errorPoke = ref(null);

async function meteo (){
    try{
    const response = await fetch ('https://prevision-meteo.ch/services/json/toulouse');
    if (!response.ok) throw new Error("Impossible de récupérer les données !")
    const data = await response.json();
    weather.value = data;
  }catch (e){
    error.value = e.message;
  } finally {
    loadingWeather.value = false;
  }
}

async function pokemon (){
  try{
    const response = await fetch ('https://pokeapi.co/api/v2/pokemon/');
    if (!response.ok) throw new Error ('Impossible de récupérer les pokémon')
    const data = await response.json();
    pokepoke.value = data.results;
  }catch(e){
    errorPoke.value = e.message;
  }finally {
    loadingPoke.value = false
  }
}
onMounted(() => {
  meteo();
  pokemon();
})

onUpdated(() => {
});

onBeforeUnmount(() => {
  stopWatch();
});

</script>

<style scoped lang="css">
</style>