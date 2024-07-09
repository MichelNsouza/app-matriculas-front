<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            titulo: '',
            estilo: '',
            icone: '',
        }
    },
    props: {
        tipoBtn: String,
        rota: String
    },
    created() {
        this.defineBotao();
    },
    methods: {
        defineBotao() {

            const tipo = this.tipoBtn;
            
            if (tipo === 'excluir') {
                this.titulo = 'Excluir Aluno';
                this.icone = 'lixo';
                this.estilo = 'btn-danger';
            } else if (tipo === 'voltar') {
                this.titulo = 'Voltar';
                this.icone = 'voltar';
                this.estilo = 'btn-success';
            }
        }
    },
    components: {
        RouterLink
    }
}
</script>

<template>
    <div v-if="rota">
        <router-link :to="rota">
            <div class="btn-group" role="group">
                <div :class="['', estilo]">
                    <img class="icone btn-sm" :src="`/src/assets/icons/${icone}.svg`" alt="">
                    <span class="btn-sm" v-text="titulo"></span>
                </div>
            </div>
        </router-link>
    </div>
    <div v-else>
        <button>
            <div class="btn-group" role="group">
                <div :class="['', estilo]">
                    <img class="icone btn-sm" :src="`/src/assets/icons/${icone}.svg`" alt="">
                    <span class="btn-sm" v-text="titulo"></span>
                </div>
            </div>
        </button>
    </div>
</template>

<style scoped>
.icone {
    width: 5%;
}
</style>