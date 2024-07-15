<script>

import { desativarAluno } from "@/services/axios";

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
            default:'Lista'
        },
        alunos: {
            type: Array
        },
    },
    methods: {
        async desativar(ra) {
            try {
                const responseExclusão = await desativarAluno(ra);
                console.log(responseExclusão)
            } catch (error) {
                console.error('Erro ao buscar Aluno:', error);
            }
        }
    }
}
</script>

<template>

    <h2 class="text-danger fw-bolder fs-5 " >{{ titulo }}</h2>

    <table class="table bg-light">
        <thead>
            <tr class="bg-secondary text-white">
                <th scope="col">Nome Do Aluno</th>
                <th scope="col">R.A</th>
                <th scope="col">Nome do Curso</th>
                <th scope="col">Ação</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="aluno in alunos" :key="aluno.id">
                <tr>
                    <th scope="row">{{ aluno.nome }}</th>
                    <td>{{ aluno.registroDoAluno }}</td>
                    <td>
                        <template v-for="curso in aluno.cursos" :key="curso.id">
                            {{curso.nome+" "}}
                        </template>
                    </td>
                    <td>
                        <div @click="desativar(aluno.registroDoAluno)" class="btn "><img class="icone" src="/src/assets/icons/lixo.svg" alt=""></div>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<style scoped>
.icone {
    width: 15px;
    height: 100%;
}
</style>
