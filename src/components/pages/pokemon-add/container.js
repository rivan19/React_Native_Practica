import {connect} from 'react-redux';
import View from './view';
import {pokemonItemAddActions} from '../../../redux/pokemonItemAdd';

const mapStateProps = (state) => {
    return {
        loading: state.pokemonItemAdd.loading,
        pokemon: state.pokemonItemAdd.item,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateItem: (item) => dispatch(pokemonItemAddActions.updateItem(item)),
        initSelectedItem: () => dispatch(pokemonItemAddActions.setInitialItem()),
    };
};

export default connect(mapStateProps, mapDispatchToProps)(View);
