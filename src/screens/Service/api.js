// api.js
import axios from 'axios';

// Criação de uma instância do axios
const api = axios.create({
  baseURL: 'https:localhost:8080', // Substitua pela URL da sua API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
// export const registerUser = (newUser) => {
//   return api.post('/Users', newUser); // Chama o endpoint para registrar o usuário
// };

// export const validateUser = (user) => {
//   return api.post('/validateUser', user); // Chama o endpoint para validar o login do usuário
// };

// export default api;

//  baseURL:"http://localhost:8080"
//  'http://192.168.0.1:8080'