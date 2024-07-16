<script>
import FormComponent from '@/components/FormComponent.vue';
import GraficoComponent from '@/components/GraficoComponent.vue';
import { getQuantidadealunosporCurso } from "@/services/axios";

export default {
  components: { 
    FormComponent,
    GraficoComponent
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: []
      },
      chartOptions: {
        responsive: true
      },
    }
  },
  created() {
    this.defineGrafico();
  },
  watch: {
    $route(to, from) {
      this.defineGrafico();
    }
  },
  methods: {
    async defineGrafico() {
      try {

        const responseTodosCursos = await getQuantidadealunosporCurso();
        const cursos = responseTodosCursos.data;

        if (cursos.length > 0) {
          
          const cursosFiltrados = cursos.map(curso => curso.curso);
          const qtdAlunosFiltrados = cursos.map(curso => curso.quantidade_alunos);


          //console.log(cursosFiltrados);

          this.chartData = {
            labels: cursosFiltrados,
            datasets: [{
              label: 'Alunos por curso',
              data: qtdAlunosFiltrados,
            }]
          };

          console.log(this.chartData);
        } else {
          console.error('Nenhum curso encontrado.');
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    },
  }
}
</script>

<template>
  <section class="justify-content-center align-content-center bg-white border shadow-sm mt-3 px-2 py-4">
    <FormComponent @aluno-cadastrado="defineGrafico()" />
  </section> 

  <section class="justify-content-center align-content-center bg-white border shadow-sm mt-3 px-2 py-4">
    <GraficoComponent :chartData="chartData" :chartOptions="chartOptions" />
  </section>
</template>


<style scoped>
</style>
