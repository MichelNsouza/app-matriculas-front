<script >
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import { RouterView } from 'vue-router';

export default{
  data() {
    return {
      titulo:this.$route,
    }
  },
  components:{
    FooterComponent,
    HeaderComponent,
    RouterView
  }

}
</script>

<template>
  <div class="container-fluid d-flex justify-content-center align-items-md-center">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12">
        <HeaderComponent />
        <main>
          <RouterView />
        </main>
        <FooterComponent />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
