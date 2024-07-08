<script>
import FormComponent from '@/components/FormComponent.vue';
import GraficoComponent from '@/components/GraficoComponent.vue';
export default {
  components: { FormComponent, GraficoComponent },
}

</script>

<template>
  <div class="d-flex">

    <h1>Cadastramento de alunos</h1>
    <button>Excluir Aluno</button>

  </div>
  <hr>
  <FormComponent />
  <GraficoComponent />
  
</template>

<style scoped></style>