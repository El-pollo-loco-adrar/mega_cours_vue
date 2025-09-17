<template>
    <div class="card bg-base-200 shadow-xl p-6 max-w-xl mx-auto">
        <h2 class="text-2xl font-bold text-primary mb-4">📊 Exemple Chart.js</h2>

        <div class="h-72">
            <!-- On affiche le graphique Bar de vue-chartjs -->
            <Bar :data="chartData" :options="chartOptions" />
            <button class="btn btn-warning" @click="plus50">+50 gars</button>
        </div>
    </div>
</template>

<script setup lang="ts">
/**
 * 1. Importer Chart.js et vue-chartjs
 */
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { ref, computed } from 'vue'

/**
 * 2. Enregistrer les modules Chart.js (obligatoire)
 */
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const dynamicData = ref(1)
function plus50(){
  console.log(dynamicData.value)
  dynamicData.value +=50
  console.log(dynamicData.value)
}
/**
 * 3. Définir les données du graphique
 */
const chartData = computed(() => ({
    labels: ['Janvier', 'February', 'Mars', 'Avril', 'Mai', 'Juin', 'Steven'],
    datasets: [
        {
            label: 'Ventes (€)',
            data: [dynamicData.value, 1400, 1500, 2000, 2000, 2000, 2000],
            backgroundColor: (ctx: any) => {// couleur bleue Tailwind/DaisyUI
              const chart = ctx.chart
              const { ctx: canvasCtx, chartArea } = chart

              if (!chartArea){
                return null
              }
              const gradient = canvasCtx.createLinearGradient (
                0,
                chartArea.bottom,
                0,
                chartArea.top
              )
              gradient.addColorStop(0, "green")
              gradient.addColorStop(0.5, "yellow")
              gradient.addColorStop(1, "red")

              return gradient

    //           if (!chartArea){
    //             return null
    //           }
    //           const img = new Image()
    //           img.src ="/public/image.png"

    //           img.onload = () => {
    //             chart.update()
    //           }
    //           // Créer un pattern qui s'étend sur toute la zone du graphe
    //     const pattern = canvasCtx.createPattern(img, "no-repeat")

    //     // Ajuster le pattern à la taille de la chartArea
    //     if (pattern && "setTransform" in pattern) {
    //       // @ts-ignore → pattern.setTransform est pas toujours typé
    //       pattern.setTransform(new DOMMatrix([
    //         chartArea.width / img.width, 0, 0,
    //         chartArea.height / img.height, chartArea.left, chartArea.top
    //       ]))
    //     }

    //           return canvasCtx.createPattern(img, "repeat")
            } 
        }
    ]
}))

/**
 * 4. Définir les options
 */
const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            labels: {
                color: '#374151'
            }
        },
        title: {
            display: true,
            text: 'Evolution des ventes par mois'
        }
    },
    scales: {
        x: {
            ticks: { color: '#374151' }
        },
        y: {
            ticks: { color: '#374151' }
        }
    }
}
</script>