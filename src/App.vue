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
  <div class="container-fluid bg-light justify-content-center align-items-center">
    <div class="d-flex justify-content-md-center">
      <div class="col-md-7">
        <HeaderComponent />
        <main class="row">
          <RouterView />
        </main>
        <FooterComponent />
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>
