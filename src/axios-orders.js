import axios from 'axios';

const instance = axios.create({
    baseURL:'https://localhost:44329/api'
});

export default instance;