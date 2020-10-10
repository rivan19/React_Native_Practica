import {
    connect
} from 'react-redux';
import View from './view';
import {
    pokemonItemActions
} from '../../../redux/pokemonItem';

const mapStateProps = (state) => {
    return {
        loading: state.pokemonItem.loading,
        pokemon: state.pokemonItem.item,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateItem: (item) => dispatch(pokemonItemActions.updateItem(item)),
        initSelectedItem: () => dispatch(pokemonItemActions.setInitialItem()),
    };
};

export default connect(mapStateProps, mapDispatchToProps)(View);