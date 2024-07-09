<script>
import FormComponent from '@/components/FormComponent.vue';
import GraficoComponent from '@/components/GraficoComponent.vue';
export default {
  components: { FormComponent, GraficoComponent },
}

</script>

<template>

  <section>
    <FormComponent />
  </section>

  <section class="row justify-content-center align-content-center border shadow-sm mt-4 px-2 py-4">
    <GraficoComponent />
  </section>

</template>

<style scoped>

</style>