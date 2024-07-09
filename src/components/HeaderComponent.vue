<script>

import BtnComponent from '@/components/BtnComponent.vue';

export default{
  data() {
    return {
      titulo:'',
      tipo:'',
      rotaAtual:'',
      path:[]
    }
  },
  components:{
    BtnComponent
  },
  mounted(){
    this.path = this.$router.currentRoute;
    this.defineTitulo();
  },
  methods:{
    defineTitulo(){

        const rota = this.path;

        if(rota.path === '/'){
            this.titulo='Cadastro de alunos';
            this.tipo='excluir';
            this.rotaAtual='/';
        }else if(rota.path === '/excluir'){
            this.titulo = 'Listagem de alunos cadastrados';
            this.tipo='voltar';
            this.rotaAtual='/excluir';
        }
    }
  }
}

</script>

<template>
<div class="d-flex mt-4 d-flex justify-content-center align-items-md-center flex-row">
   <div class="row size mb-5">
        <img class="img-fluid" src="/src/assets/icons/logo.svg" alt="">
   </div>
   <p class="h1">Quack</p>
</div>

<div class="row justify-content-center align-content-center border-bottom mb-5">
    <h1 class="h4"><span v-text="titulo"></span></h1>
    <BtnComponent :tipoBtn="tipo" :rota="rotaAtual"/>

</div>

</template>

<style scoped>
.size{
    width: 20%;
}
</style>
