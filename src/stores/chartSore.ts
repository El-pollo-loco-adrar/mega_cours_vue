// stores/chartStore.ts
import { ref, computed } from "vue";
import { defineStore } from "pinia";


export const useChartStore = defineStore(
  "chartStore",
  () => {
    // ⚡ Labels, valeurs et styles persistants
    const labels = ref(["HTML", "CSS", "JS", "Vue", "Nuxt", "Tailwind"]);
    const values = ref([65, 59, 90, 81, 56, 55]);
    const borderColor = ref("#3b82f6");
    const title = ref("Radar des Compétences");

    // ⚡ Actions
    function randomize() {
      values.value = values.value.map(() => Math.floor(Math.random() * 100));
    }

    function reset() {
      labels.value = ["HTML", "CSS", "JS", "Vue", "Nuxt", "Tailwind"];
      values.value = [65, 59, 90, 81, 56, 55];
      borderColor.value = "#3b82f6";
      title.value = "Radar des Compétences";
    }

    return { labels, values, borderColor, title, randomize, reset };
  },
  {
    // ⚡ Activation de la persistance
    persist: true,
  }
);