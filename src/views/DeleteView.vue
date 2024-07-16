<script>
import ListComponent from '@/components/ListComponent.vue';
import ModalComponent from '@/components/ModalComponent.vue';
import { getTodosAlunos, desativarAluno } from "@/services/axios";

export default {
    components: {
      ListComponent,
      ModalComponent
    },
    data() {
        return {
          numeroCadastrados:'0',
          numeroExluidos:'0',
          alunosAtivos:[],
          alunosInativos:[],
          ra:''
        }
    },
    created() {
      this.buscaAlunos();
    },
    methods: {
        async buscaAlunos() {
            try {

              const responseTodosAlunos = await getTodosAlunos();
              const todosALunos = responseTodosAlunos.data;

              //this.numeroCadastrados = todosALunos.cadastros; OU
              this.numeroCadastrados = todosALunos.ativo;
              this.numeroExluidos = todosALunos.inativo;

              this.alunosAtivos = todosALunos.alunos.filter((aluno) => aluno.status === 'ativo'); 
              this.alunosInativos = todosALunos.alunos.filter((aluno) => aluno.status === 'inativo'); 


                
                
            } catch (error) {
                console.error('Erro ao buscar Alunos:', error);
            }
        },
        async desativar(id) {
            try {
                const responseExclusão = await desativarAluno(id);
                console.log(responseExclusão)
            } catch (error) {
                console.error('Erro ao buscar Aluno:', error);
            }
        },
        confirmaDesativar(id) {
          if(id){
            if (confirm("Deseja realmente excluir esse aluno?")) {
              this.ra='';
              this.desativar(id);
            }
            this.buscaAlunos();
          }
        },
    }
}
</script>

<template>

  <section class="justify-content-center align-content-center mt-3">
    
    <div class="row justify-content-between align-content-center py-1">

      <form  @submit.prevent="cadastrarAluno" class="col mt-2 mb-2 pb-2 bg-white border shadow-sm bord align-content-center ps-4">
        <div class="d-flex col justify-content-center">

        
          <div class="col-lg-8">
            <label for="aluno"  class="form-label text-danger fw-bolder">Excluir Aluno por R.A</label>
            <input type="text" class="form-control" id="ra" placeholder="Informe o R.A. do aluno" v-model="ra" required>
          </div>
      
          <div class="col d-flex align-items-end ms-3">

            <div @click="confirmaDesativar(ra)" type="submit" class="btn btn-danger">
              <div class="btn-group" role="group">
                <div class="d-flex">
                    <div class="pe-2">
                      <i class="bi bi-trash"></i>
                    </div>
                    <span class="pe-2">Excluir Aluno</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
  
      <div class="d-flex col">
        <ModalComponent class="" :texto="'Total de alunos Cadastrados'" :numero="String(numeroCadastrados)" :estilo="'vermelho'"/>
        <ModalComponent class="ms-3" :texto="'Total de alunos Excluidos'" :numero="String(numeroExluidos)" :estilo="'cinza'" />
      </div>
    
    </div>
  </section>

  <section class="justify-content-center align-content-center bg-white border shadow-sm mt-3 px-2 py-4">
    <ListComponent :titulo="'Alunos Cadastrados'" :alunos="alunosAtivos" @acao-aluno="buscaAlunos()"/>
    <ListComponent :titulo="'Alunos Removidos'"  :alunos="alunosInativos" @acao-aluno="buscaAlunos()" />
  </section>

</template>

<style scoped>
.icone {
    width: 15px;
    height: 100%;
}
</style>
