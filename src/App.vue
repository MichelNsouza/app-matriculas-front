<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="container-fluid d-flex justify-content-center align-items-md-center">
    <div class="row d-flex justify-content-center">
      <div class="col-md-9">
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
