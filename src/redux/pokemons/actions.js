import * as types from './types';
import * as api from '../../api';
import { Alert } from 'react-native';

function updateList(newList){
    const action = {
        type: types.UPDATE_LIST,
        payload: {list: newList},
    };
    return action;
}


const setLoading = (loading) => {
    const action = {
        type: types.SET_LOADING,
        payload: {
            loading
        }
    };
    return action;
};

export const setItemPokemon = (item) => {
    //console.log('setItemPokemon:', item);
    const action = {
        type: types.SET_ITEM,
        payload: {
            pokemon: item
        }
    };
    return action;
}

export const fetchPokemons = () => {
    return async(dispatch, getState) => {
        try {
            dispatch(setLoading(true));
            //console.log('fetchPokemons - begin');
            const getPokemonsRes = await api.getPokemons();
            //console.log('fetchPokemons:', getPokemonsRes);
            dispatch(updateList(getPokemonsRes.data.cards));
        } catch (e) {
            Alert.alert('Error', e.message || 'Ha ocurrido un error');
        } finally {
            dispatch(setLoading(false));
        }
    };
};