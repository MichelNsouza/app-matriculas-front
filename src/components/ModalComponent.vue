<script>
export default {
    components: {
       
    },
    data() {
        return {
            estiloBg:''
        }
    },
    props: {
        texto: String,
        numero: String,
        estilo: String
    },
    created() {
        this.defineModal();
    },
    methods: {
        defineModal() {
            if(this.estilo === 'vermelho'){
                this.estiloBg = 'bg-danger';
            } else if (this.estilo === 'cinza') {
                this.estiloBg = 'bg-secondary';
            } else {
                this.estiloBg = 'bg-success';
            }
        }
    }
}
</script>

<template>
    <div class="pt-2 text-white container-sm rounded d-flex justify-content-center align-items-center flex-column" :class="estiloBg">
        <p class="fw-bolder fs-4 text-center">{{ texto }}</p>
        <p class="fw-bolder fs-4">{{ numero }}</p>
    </div>
</template>

<style scoped>


</style>
