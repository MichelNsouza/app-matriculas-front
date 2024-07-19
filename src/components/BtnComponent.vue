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
        <div class="btn-group-sm btn-sm" role="group">
            <div :class="estilo" class="d-flex ">
                <div class="filtro px-2">
                    <template v-if="icone==='volta'">
                        <i class="bi bi-reply"></i>
                    </template>
                    <template v-else-if="icone==='lixo'">
                        <i class="bi bi-trash"></i>
                    </template>
                </div>
                <span class="pe-2" v-text="titulo"></span>
            </div>
        </div>
    </router-link>
</template>

<style scoped>
.icone {
    width: 15px;
    height: 100%;
}
.filtr{
    background-color: rgba(0, 0, 0, 0.219);
}

</style>