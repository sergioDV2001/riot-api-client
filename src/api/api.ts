import axios from 'axios';

const API_KEY = 'RGAPI-f982f732-9032-4be7-893e-11663d863977';

const api = axios.create({
  baseURL: 'euw1.api.riotgames.com',
  headers: {
    'X-Riot-Token': API_KEY,
  },
});

export default api;
