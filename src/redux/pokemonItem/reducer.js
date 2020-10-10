import * as types from './types';

const initialState = {
    loading: false,
    item: null,
};

const reducer = (state = initialState, action = {}) => {
    console.log('PokemonItem - Reducer:', action)
    switch (action.type) {
        case types.SET_LOADING:
            return {...state, loading: action.payload.loading};
        case types.UPDATE_ITEM:
            return {...state, item: action.payload.item};
        default:
            return state;
    }
};

export default reducer;