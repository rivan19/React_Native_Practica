import {connect} from 'react-redux';
import View from './view';
import {pokemonActions} from '../../../redux/pokemons';

const mapStateProps = (state) => {
    return {
        pokemonList: state.pokemons.pokemonList,
        manualId: state.pokemons.manualId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPokemon: (item) => dispatch(pokemonActions.addNewPokemon(item)),
    };
};

export default connect(mapStateProps, mapDispatchToProps)(View);
