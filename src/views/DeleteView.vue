<script>
import ListComponent from '@/components/ListComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import BtnComponent from '@/components/BtnComponent.vue';

export default {
  components: { ListComponent, ModalComponent },
}

</script>

<template>
  <hr>
  <section>
    <form  @submit.prevent="cadastrarAluno" class="row g-3">
  
      <div class="col-auto">
        <label for="aluno"  class="form-label text-danger">Excluir Aluno por R.A</label>
        <input type="text" class="form-control" id="ra" placeholder="Informe o R.A. do aluno" v-model="ra" required>
      </div>
  
      <div class="col-auto">
        <button type="submit" class="btn btn-danger mb-3">Excluir Aluno</button>
      </div>
  
    </form>

    <ModalComponent />

    <ModalComponent />

  </section>
  <section>

    <div>

        <h2>Alunos Ativos</h2>

        <ListComponent />

    </div>
    
    <div>
        <h2>Alunos removidos</h2>

        <ListComponent />

    </div>

  </section>
  
</template>

<style scoped></style>