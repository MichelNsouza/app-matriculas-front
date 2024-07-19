<script>

import { desativarAluno, ativarAluno } from "@/services/axios";

export default {
    components: {

    },
    data() {
        return {

        }
    },
    props: {
        titulo: {
            type: String,
            default: 'Lista'
        },
        alunos: {
            type: Array
        },
    },
    methods: {
        async desativar(ra) {
            try {
                const responseExclusao = await desativarAluno(ra);
                console.log(responseExclusao)
            } catch (error) {
                console.error('Erro ao buscar Aluno:', error);
            }
        },
        async ativar(ra) {
            try {
                const responseAtivar = await ativarAluno(ra);
                console.log(responseAtivar)
            } catch (error) {
                console.error('Erro ao buscar Aluno:', error);
            }
        },
        confirmaAcao(id, status) {
            if (id) {

                if (status === 'ativo') {
                    if (confirm("Deseja realmente excluir esse aluno?")) {
                        this.desativar(id);
                    }
                } else if (status === 'inativo') {
                    if (confirm("Deseja realmente ativar o cadastro esse aluno?")) {
                        this.ativar(id);
                    }
                }

                this.emitirAcao();

            }
        },
        emitirAcao() {
            this.$emit('acao-aluno');
        }

    }
}
</script>

<template>
    
    <h2 class="text-danger fw-bolder fs-5">{{ titulo }}</h2>

    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col ">Nome Do Aluno</th>
                    <th scope="col">R.A</th>
                    <th scope="col">Nome do Curso</th>
                    <th scope="col">Ação</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="aluno in alunos" :key="aluno.id">
                    <tr :class="aluno.status === 'ativo' ? '' : 'text-decoration-line-through'">
                        <th scope="row ">{{ aluno.nome }}</th>
                        <td>{{ aluno.registroDoAluno }}</td>
                        <td>
                            <template v-for="curso in aluno.cursos" :key="curso.id">
                                {{ curso.nome + " " }}
                            </template>
                        </td>
                        <td>
                            <div @click="confirmaAcao(aluno.registroDoAluno, aluno.status)" class="btn ">

                                <template v-if="aluno.status === 'ativo'">
                                    <i class="bi bi-trash"></i>
                                </template>
                                <template v-else-if="aluno.status === 'inativo'">
                                    <i class="bi bi-person-plus-fill"></i>
                                </template>

                            </div>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.icone {
    width: 15px;
    height: 100%;
}
</style>
