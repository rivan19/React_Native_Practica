import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';
import _ from 'lodash';

const updateList = (newList, total) => {
    const action = {
        type: types.UPDATE_LIST,
        payload: {
            list: newList,
            total,
        }
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

const updatePage = (page) => {
    const action = {
        type: types.UPDATE_PAGE,
        payload: {page},
    };
    return action;
};

export const initList = () => {
    return (dispatch) => {
        dispatch(updateList([]));
        dispatch(updatePage(1));
        dispatch(fetchPokemons());

    }
}

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

export const fetchNexPage = () => {
    return (dispatch, getState) => {
        const {page, pokemonList, total} = getState().pokemons;
        const listSize = _.size(pokemonList);
        //if (listSize < total){
            const newPage = page + 1;
            dispatch(updatePage(newPage));
            dispatch(fetchPokemons());
        //}

    }
}

export const fetchPokemons = () => {
    return async(dispatch, getState) => {
        try {
            const {pokemonList, page} = getState().pokemons;
            const params = {
                page,
            };

            dispatch(setLoading(true));
            //console.log('fetchPokemons - begin');
            const getPokemonsRes = await api.getPokemons(params);
            
            const resList = _.get(getPokemonsRes, 'data.cards', []);
            const total = _.size(resList)

            const newList = [...pokemonList, ...resList];

            dispatch(updateList(newList, total));
        } catch (e) {
            Alert.alert('Error', e.message || 'Ha ocurrido un error');
        } finally {
            dispatch(setLoading(false));
        }
    };
};