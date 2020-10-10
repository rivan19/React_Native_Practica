import axios from 'axios';
import {BASE_URL} from '../config/api';
import qs from 'qs';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'}
});

export const getPokemons = () => {
    const url = '?subtype=Basic';
    return instance.get(url);
};


