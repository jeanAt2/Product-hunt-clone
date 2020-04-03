import axios from 'axios'

const api = axios.create({
  //baseURL: 'http://localhost:3333/api',
  baseURL:'http://rocketseat-node.herokuapp.com/api',
});

export default api;