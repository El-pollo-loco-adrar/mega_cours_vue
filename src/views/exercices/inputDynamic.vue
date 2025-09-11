<template>
  <h1 class="text-3xl text-center">Input dynamic Style</h1>
  <div
    class="p-6 bg-red-500"
    :style="{ display: showInput ? 'none' : 'block'}"
  >
    <input 
      type="text" 
      placeholder="Tape hello ou world ou patrick" 
      class="input input-neutral" 
      v-model="inputText" 
    />
    <!-- 1ERE VERSION -->
    <!-- <h2 :class="getClass(inputText)">{{ getText(inputText) }}</h2> -->

    <!-- 2E VERSION -->
    <h2 v-if="inputText === 'hello' || inputText === 'world'" :class="getClass(inputText)">{{ getText(inputText) }}</h2>

      <img 
    v-else="inputText === 'patrick'"
    src="https://media1.tenor.com/m/ye189ndlDpkAAAAC/patrick-sebastien-bravo.gif" 
    alt="Patrick Sebastien" 
    class="mt-4"
  />
  </div>
  
  <div class="p-6 bg-blue-400 mt-4">
    <input type="text" placeholder="Donne une couleur css" class="input input-neutral" v-model="inputText2">
    <h2 :style="{ backgroundColor: inputText2}">Couleur dynamique</h2>
  </div>

  <button 
    class="btn btn-error mt-4"
    @click="toggleH2"
    >Afficher le 1er input... ou non
  </button>
</template>

<script setup lang='js'>
  import { ref } from 'vue';

  const inputText = ref('')
  const inputText2 = ref('')
  const showInput = ref('')

  //Fonction pour changer le texte suivant le mot tapé
  function getText(text){
    if (text === 'hello'){
      return `T'as écris hello?`
    } else if (text === 'world'){
      return 'Bah hello world'
    }else{
    return ''
    }
  }
  //Fonction qui applique la classe suivant le mot tapé
  function getClass(text){
    if (text === 'hello') {
      return 'classHello'
    }if (text === 'world') {
      return 'classWorld'
    }
  }
  //Fonction pour caché ou non quand le bouton est cliqué
  function toggleH2(){
    showInput.value = !showInput.value
  }
</script>

<style scoped lang="css">
.classHello{
  color: yellow;
  font-weight: bold;
}
.classWorld{
  color: brown;
  font-weight: bold;
  background-color: aliceblue;
}
</style>