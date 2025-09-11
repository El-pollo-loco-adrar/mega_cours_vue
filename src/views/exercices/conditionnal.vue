<template>
  <h1 class="text-center text-2xl">Conditionnal</h1>
  <div class="container mx-auto p-4">
    <div class="card shadow-lg p-6 bg-base-100">
        <h2 class="text-2xl font-bold mb-4">WatchList 🎬 (Films à voir) - Mode : Composition</h2>

        <!-- Input lié au film -->
        <input  type="text" placeholder="Entrez le nom d'un film"
            class="input input-bordered w-full mb-3" v-model="film" />

        <!-- Bouton pour ajouter le film -->
        <button  class="btn btn-primary mb-4" @click="ajouter">
            Ajouter à votre Liste
        </button>

        <hr class="my-4" />

        <!-- Tableau -->
        <div v-if="mesFilms.length > 0">
            <h3 class="text-xl text-center font-semibold mb-2">Votre film ajouté : </h3>
            <ul class="pl-0 space-y-2 flex flex-col items-center">
              <li 
                v-for="(f, index) in mesFilms" 
                :key="index" 
                @click="supprimer(index)" 
                class="text-center cursor-pointer px-3 py-2 border rounded-lg hover:bg-red-100 hover:text-red-500 transition min-w-40 ">
                {{ f }}
              </li>
            </ul>
        </div>

        <p v-else class="text-gray-500">
            Pas encore de films dans votre liste ? Veuillez en ajouter un.
        </p>
    </div>
  </div>
</template>


<script setup lang='js'>
  import { ref } from 'vue';

  const film = ref('')
  const mesFilms = ref ([])

  function ajouter(){
    if (film.value.trim() !== ""){
      mesFilms.value.push(film.value.trim())
      film.value = ""
    }
  }
  function supprimer(index){
    mesFilms.value.splice(index, 1)
  }
</script>

<style scoped lang="css">
</style>