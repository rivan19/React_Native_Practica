import React from 'react';
import PropTypes, { object } from 'prop-types';
import {
  SafeAreaView,
  FlatList,
  RefreshControl,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {HomeCard} from '../../molecules';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import colors from '../../../assets/colors';
import _ from 'lodash';

class Home extends React.Component {
  componentDidMount() {
    //const params
    this.props.getPokemons();
  }

  _onPressButton = (item) => {
    //console.log('onPressButton:', item);
    //console.log('_onPressButton - this.props:', this.props);
    this.props.setPokemon(item);
    Actions.push('Pokemon', {title: item.name});
  };

  _onEndReached = ({distanceFromEnd}) => {
    //console.log('onEndReached:', this.props);
    //const {pokemonList, loading} = this.props;
    //const listSize = _.size(pokemonList);
      this.props.fetchNextPokemonsPage();
  };

  render() {
    //console.log('componentDidMount - Render:', this.props);
    const {pokemonList, loading} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={pokemonList}
          keyExtractor={(item, index) => `card-${item.id}-${index}`}
          numColumns={1}
          renderItem={({item}) => (
            <HomeCard
              pokemonItem={item}
              onPress={(pokemonItem) => this._onPressButton(pokemonItem)}
            />
          )}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.8}
          refreshControl={
            <RefreshControl
            colors={[colors.white]}
            tintColor={colors.white}
            refreshing={loading}
            onRefresh={this.props.getPokemons}
            title={'Cargando...'}
            titleColor={colors.white}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

Home.propTypes = {
  pokemonList: PropTypes.arrayOf(object),
  loading: PropTypes.bool,
  _onPressButton: PropTypes.func,
  getPokemons: PropTypes.func,
  _onEndReached: PropTypes.func,
  fetchNextPokemonsPage: PropTypes.func,
  setPokemon: PropTypes.func,
  getPokemons: PropTypes.func,
}

export default Home;
