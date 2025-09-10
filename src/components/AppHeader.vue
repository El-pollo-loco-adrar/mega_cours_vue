<template>
  <div>
    <div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        <li><router-link to="/">Accueil</router-link></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><router-link to="/indexExercice">Exercices</router-link></li>
            <li><router-link to="/indexLesson">Leçons</router-link></li>
            <li><a>TP</a></li>
          </ul>
        </li>
        <li><router-link to="/about">about</router-link></li>
      </ul>
    </div>
    <router-link to="/" class="btn btn-ghost text-xl">Mon site de fou</router-link>
    
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><router-link to="/">Accueil</router-link></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul class="p-2">
            <li><router-link to="/indexExercice">Exercices</router-link></li>
            <li><a>Leçons</a></li>
            <li><a>TP</a></li>
          </ul>
        </details>
      </li>
      <li><router-link to="/about">about</router-link></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn">Button</a>
  </div>
</div>
  </div>
</template>

<script setup>
  

</script>

<style scoped>
</style>