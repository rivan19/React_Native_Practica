import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  FlatList,
  RefreshControl,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
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

  _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        pokemon={item}
        onPress={() => {
          this._onPressButton(item);
        }}>
        <View style={styles.table}>
          <Image
            resizeMode={'cover'}
            source={{uri: item.imageUrl}}
            style={styles.image}
          />
          <View style={styles.tableDetail}>
            <View style={styles.tableDetailHorizontal}>
              <Text style={styles.text}>Name:</Text>
              <Text style={styles.text}>{item.name}</Text>
            </View>
            <View style={styles.tableDetailHorizontal}>
              <Text style={styles.text}>Power:</Text>
              <Text style={styles.text}>{item.hp}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
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
          renderItem={this._renderItem}
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

export default Home;
