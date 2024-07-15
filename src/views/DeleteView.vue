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
        }
    }
}
</script>

<template>
  <section>
    <div class="d-flex col-12">

      <form  @submit.prevent="cadastrarAluno" class="col-6 me-3 bg-light align-content-center ps-4">
        <div class="d-flex col-12 justify-content-center">

        
          <div class="col-7">
            <label for="aluno"  class="form-label text-danger fw-bolder">Excluir Aluno por R.A</label>
            <input type="text" class="form-control" id="ra" placeholder="Informe o R.A. do aluno" v-model="ra" required>
          </div>
      
          <div class="col-5 d-flex align-items-end ms-3">

            <div @click="desativar(ra)" type="submit" class="btn btn-danger">
              <div class="btn-group" role="group">
                <div class="d-flex">
                    <div class="pe-2">
                      <img class="icone align-content-center" :src="'/src/assets/icons/lixo.svg'" alt="">
                    </div>
                    <span class="pe-2">Excluir Aluno</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
  
      <div class="d-flex col-6">
        <ModalComponent class="" :texto="'Total de alunos Cadastrados'" :numero="String(numeroCadastrados)" :estilo="'vermelho'"/>
        <ModalComponent class="ms-3" :texto="'Total de alunos Excluidos'" :numero="String(numeroExluidos)" :estilo="'cinza'" />
      </div>
    
    </div>
  </section>
  <section class="">
    <ListComponent :titulo="'Alunos Cadastrados'" :alunos="alunosAtivos" />
    <ListComponent :titulo="'Alunos Removidos'"  :alunos="alunosInativos"  />
  </section>
</template>

<style scoped>
.icone {
    width: 15px;
    height: 100%;
}
</style>