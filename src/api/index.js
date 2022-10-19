import axios from 'axios';
// import config from '../config.json';

export const api = axios.create({
    baseURL: 'http://192.168.15.14:4000/api/v1/casaludica/jogomemoria',
    timeout: 1000 * 1,
})