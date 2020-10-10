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

class Home extends React.Component {
  componentDidMount() {
    this.props.getPokemons();
  }
  _onPressButton = (item) => {
    console.log('onPressButton:', item);
    //console.log('_onPressButton - this.props:', this.props);
    this.props.setPokemon(item);
    Actions.push('Pokemon', {title: item.name});
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
    console.log('componentDidMount - Render:', this.props);
    const {pokemonList, loading} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={pokemonList}
          keyExtractor={(item, index) => `card-${item.id}`}
          numColumns={1}
          renderItem={this._renderItem}
        />
      </SafeAreaView>
    );
  }
}

export default Home;
