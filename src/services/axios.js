import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://127.0.0.1:8000/api/'
  baseURL: 'https://api-gerenciador-matriculas.vercel.app/api/api/'
});

export const getTodosAlunos = () => api.get('alunos');
export const getTodosCursos = () => api.get('cursos');
export const getQuantidadealunosporCurso = () => api.get('quantidadealunosporCurso');


export const cadastrarAlunos = (formData) => api.post('alunos',formData);
export const desativarAluno = (ra) => api.post(`/aluno/desativar/${ra}`);
export const ativarAluno = (ra) => api.post(`/aluno/ativar/${ra}`);



