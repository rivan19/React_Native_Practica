import * as types from './types';

const initialState = {
    loading: false,
    pokemonList: [],
    pokemon: null,
    page: 1,
    manualId: 0,
};

const reducer = (state = initialState, action = {}) => {
    console.log('reducer - action:', action);
    switch (action.type) {
        case types.UPDATE_LIST:
            return {
                ...state, 
                pokemonList: action.payload.list,
            };
        case types.SET_LOADING:
            return {
                ...state, 
                loading: action.payload.loading,
            };
        case types.SET_ITEM:
            return {
                ...state,
                pokemon: action.payload.pokemon,
            };
        case types.UPDATE_PAGE:
            return {
                ...state,
                page: action.payload.page,
            }
        case types.UPDATE_MANUAL_ID:
            return {
                ...state,
                manualId: action.payload.manualId,
            }
        default:
            return state;
    }

};

export default reducer;
