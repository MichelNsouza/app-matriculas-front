<script>
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink
    },
    data() {
        return {
            titulo: '',
            estilo: '',
            icone: '',
            rotaNova:'',

        }
    },
    props: {
        tipoBtn: String,
        rota: String
    },
    created() {
        this.defineBotao();
    },
    watch: {
        $route(to, from) {
            this.defineBotao();
        }
    },
    methods: {
        defineBotao() {

            const tipo = this.tipoBtn;
            
            if (this.rota === '/') {
                this.titulo = 'Excluir Aluno';
                this.icone = 'lixo';
                this.estilo = 'btn btn-danger btn-sm';
                this.rotaNova = '/excluir';
            } else if (this.rota === '/excluir') {
                this.titulo = 'Voltar';
                this.icone = 'volta';
                this.estilo = 'btn btn-success btn-sm';
                this.rotaNova = '/';
            }
        }
    }
}
</script>

<template>
    <router-link :to="rotaNova">
        <div class="btn-group" role="group">
            <div :class="estilo" class="d-flex p-1">
                <div class="iconeEstilo ">
                    <img class="icone" :src="`/src/assets/icons/${icone}.svg`" alt="">
                </div>
                <span v-text="titulo"></span>
            </div>
        </div>
    </router-link>
</template>

<style scoped>
.icone {
    width: 15px;
    height: 100%;
}

</style>