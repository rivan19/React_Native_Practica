import {connect} from 'react-redux';
import View from './view';
import {pokemonActions} from '../../../redux/pokemons';

const mapStateProps = (state) => {
    return {
        pokemonList: state.pokemons.pokemonList,
        loading: state.pokemons.loading,
        pokemon: state.pokemons.pokemon,
        total: state.pokemons.total,
        page: state.pokemons.page,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        initPokemonsList: () => dispatch(pokemonActions.initList()),
        fetchNextPokemonsPage: () => dispatch(pokemonActions.fetchNexPage()),
        getPokemons: () => dispatch(pokemonActions.fetchPokemons()),
        setPokemon: (item) => dispatch(pokemonActions.setItemPokemon(item)),
    };
};

export default connect(mapStateProps, mapDispatchToProps)(View);