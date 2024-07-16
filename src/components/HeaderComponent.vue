<script>

import BtnComponent from '@/components/BtnComponent.vue';

export default{
  data() {
    return {
      titulo:'',
      tipo:'',
    }
  },
  components:{
    BtnComponent
  },
  created() {
    this.defineTitulo();
  },
  watch: {
      $route(to, from) {
        this.defineTitulo();
      }
  },
  methods:{
    defineTitulo(){

      if(this.$route.fullPath === '/'){

        this.titulo='Cadastramento de alunos';
        this.tipo='excluir';

      }else if(this.$route.fullPath === '/excluir'){

          this.titulo = 'Listagem de alunos cadastrados';
          this.tipo='voltar';

      }
    }
  }
}

</script>

<template>
<div class="row">
  <div class="d-flex mt-0 d-flex justify-content-center align-items-center">
    <div class="size mb-3">
          <img class="img-fluid" src="/src/assets/icons/logo.svg" alt="">
    </div>
    <p class="h1">Quack</p>
  </div>

  <div class="d-flex align-content-center justify-content-between border-bottom mb-3">

    <h1 class="h4 text-danger mb-2"><span v-text="titulo"></span></h1>

    <BtnComponent :tipoBtn="tipo" :rota="this.$route.fullPath" class="mb-2 d-flex align-content-center justify-content-end"/>

  </div>
</div>
</template>

<style scoped>
.size{
    width: 20%;
}
</style>
