import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text,View, Image} from 'react-native';
import {TextLabel} from '../../atoms';
import styles from './styles';


class HomeCard extends React.Component{
    render(){
        const {pokemonItem, onPress} = this.props;
        return(
            <TouchableOpacity
        pokemon={pokemonItem}
        onPress={() => {
          onPress(pokemonItem)}}>
        <View style={styles.table}>
          <Image
            resizeMode={'cover'}
            source={{uri: pokemonItem.imageUrl}}
            style={styles.image}
          />
          <View style={styles.tableDetail}>
              <TextLabel
                label={'Name:'}
                value={pokemonItem.name}
                styleLabel={styles.text}
              />
              <TextLabel
                label={'Power:'}
                value={pokemonItem.hp}
                styleLabel={styles.text}
              />
          </View>
        </View>
      </TouchableOpacity>
        )
    }
}

HomeCard.defaultProps = {
    onPress: () => {},
  };
  
  HomeCard.propTypes = {
    pokemonItem: PropTypes.object.isRequired,
    onPress: PropTypes.func,
  };

export default HomeCard;