import * as types from './types';
//import * as api from '../../api';


export const updateItem = (item) => {
    console.log('updateItem:', item);
    const action = {
        type: types.UPDATE_ITEM,
        payload: {item}
    };
    return action;
}

export const setInitialItem = () => {
    return (dispatch, getState) => {
        //console.log('getState(),', getState())
        const item = getState().pokemons.pokemon;
        dispatch(updateItem(item));
    }
}