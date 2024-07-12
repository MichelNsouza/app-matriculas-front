import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-gerenciador-matriculas.vercel.app/api/api/'
});

export const getTodosCursos = () => api.get('cursos');
export const cadastrarAlunos = (formData) => api.post('alunos',formData);

//http://127.0.0.1:8000/api/alunos/
//http://127.0.0.1:8000/api/cursos/