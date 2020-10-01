import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333', // mudar pro ip da maquina
});

export default api;
