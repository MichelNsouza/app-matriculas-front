<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
        chartData: Object,
        chartOptions: Object
    },
}
</script>
<template>
    <div class="row justify-content-between align-content-center py-1">
        <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
        />
    </div>
</template>
  
<style scoped>
</style>
  