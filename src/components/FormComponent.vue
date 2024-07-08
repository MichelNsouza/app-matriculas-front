<script>
  import { getTodosCursos, cadastrarAlunos } from "@/services";
export default {
  data() {
    return {
      aluno:'',
      ra:'',
      curso_id:'',
      valorBotao:'Selecione um curso',
      cursos:[],
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    async cadastrarAluno(){
      
      try {
  
        const formulario = new FormData();

        formulario.append('registroDoAluno', this.ra);
        formulario.append('nome', this.aluno);
        formulario.append('curso_id', this.curso_id);

        const resposta = await cadastrarAlunos(formulario);

        if (resposta.status === 200) {
          console.log('Aluno Cadastrado:', resposta.data);
        } else {
          console.error('Falha ao cadastrar aluno:', resposta.statusText);
        }
      } catch (error) {
        console.error('Erro ao cadastrar aluno:', error);
      }
    },
    async fetchData() {
      try {
        const responseTodosCursos = await getTodosCursos();
        this.cursos = responseTodosCursos.data.cursos;
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
  }
}

</script>

<template>
  <form  @submit.prevent="cadastrarAluno" class="row g-3">

    <div class="col-auto">
      <label for="aluno"  class="form-label text-danger">Nome</label>
      <input type="text" class="form-control" id="aluno" placeholder="Informe o nome do aluno" v-model="aluno" required>
    </div>

    <div class="col-auto">
      <label for="aluno"  class="form-label text-danger">RA</label>
      <input type="text" class="form-control" id="ra" placeholder="Informe o R.A. do aluno" v-model="ra" required>
    </div>
    <div class="col-auto">
      <label for="curso"  class="form-label text-danger">Curso</label>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
          aria-expanded="false" v-text="valorBotao">

        </button>
        <ul class="dropdown-menu">

          <li class="dropdown-item" v-on:click="valorBotao='Selecione um curso'">Selecione um curso</li>

          <template v-for="curso in cursos" v-bind:key=curso.id>
            <li class="dropdown-item" v-on:click=" valorBotao=curso.nome, curso_id=curso.id">{{curso.nome}}</li>
          </template>

        </ul>

      </div>
    </div>

    <div class="col-auto">
      <button type="submit" class="btn btn-danger mb-3">Cadastrar</button>
    </div>

  </form>
</template>

<style scoped></style>