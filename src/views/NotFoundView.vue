<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
    <!-- Fond Rickroll -->
    <div class="absolute inset-0 z-0 opacity-30">
      <img
        src="https://media1.tenor.com/m/ye189ndlDpkAAAAC/patrick-sebastien-bravo.gif"
        alt="Rick Astley"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- 404 glitch -->
    <h1 class="text-[6rem] md:text-[10rem] font-extrabold relative glitch z-10" data-text="404">
      404
    </h1>
    <p class="text-2xl mt-4 mb-8 opacity-90 animate-pulse z-10 text-center">
      🎶 Les serviettes, les serviettes ... 🎶
    </p>

    <!-- Boutons -->
    <div class="flex gap-4 z-10">
      <RouterLink to="/" class="btn btn-error btn-lg animate-wiggle">
        Retour à l’accueil
      </RouterLink>
      <button @click="toggleMute" class="btn btn-warning btn-lg animate-bounce">
        {{ isMuted ? "🔇 Mute" : "🔊 Unmute" }}
      </button>
    </div>

    <!-- Audio autoplay -->
    <audio ref="rickAudio" autoplay loop>
      <source src="/public/audio/Les sardines - Patrick Sébastien.mp3" type="audio/mpeg" />
      Ton navigateur ne supporte pas l’audio 😢
    </audio>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { RouterLink } from "vue-router"

const isMuted = ref(true)
const rickAudio = ref(null)

function toggleMute() {
  isMuted.value = !isMuted.value
  if (rickAudio.value) {
    rickAudio.value.muted = isMuted.value
  }
}

onMounted(() => {
  if (rickAudio.value) {
    rickAudio.value.muted = isMuted.value
    // Hack pour autoplay Chrome/Safari : lancer silencieux puis unmute
    rickAudio.value.play().catch(() => {
      console.warn("Autoplay bloqué par le navigateur 🚫")
    })
  }
})
</script>

<style scoped>
/* Effet glitch sur le 404 */
.glitch {
  position: relative;
  color: white;
}
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
}
.glitch::before {
  animation: glitchTop 1s infinite;
  color: #f00;
  z-index: -1;
}
.glitch::after {
  animation: glitchBottom 1s infinite;
  color: #0ff;
  z-index: -2;
}
@keyframes glitchTop {
  0% { clip-path: inset(0 0 80% 0); transform: translate(-2px, -2px); }
  50% { clip-path: inset(0 0 60% 0); transform: translate(2px, 2px); }
  100% { clip-path: inset(0 0 80% 0); transform: translate(-2px, -2px); }
}
@keyframes glitchBottom {
  0% { clip-path: inset(20% 0 0 0); transform: translate(2px, 2px); }
  50% { clip-path: inset(40% 0 0 0); transform: translate(-2px, -2px); }
  100% { clip-path: inset(20% 0 0 0); transform: translate(2px, 2px); }
}

/* Animation bouton qui gigote */
@keyframes wiggle {
  0%, 100% { transform: translateX(0) rotate(0); }
  25% { transform: translateX(-8px) rotate(-5deg); }
  50% { transform: translateX(8px) rotate(5deg); }
  75% { transform: translateX(-4px) rotate(0deg); }
}
.animate-wiggle {
  animation: wiggle 0.8s infinite;
}
</style>
