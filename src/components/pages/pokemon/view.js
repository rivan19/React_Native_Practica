import React from 'react';
import PropTypes from 'prop-types';
import { 
    SafeAreaView, 
    Text,
    Image,
    Dimensions,
    View 
} from 'react-native';
import styles from './styles';
import {TextLabel} from '../../atoms';
import {Actions} from 'react-native-router-flux';

class Pokemon extends React.Component {
    constructor(props){
        super(props)

        const totalWidth = Dimensions.get('window').width;
        const cardWidth = totalWidth / 2;
        const cardHeight = (cardWidth * Dimensions.get('window').height) / totalWidth;
        //this.setState({height: cardHeight, width: cardWidth});

        this.state = {
            width: cardWidth,
            height: cardHeight,
          };
    }
    componentDidMount(){
        this.props.initSelectedItem();
    }

    render() {
        
        const pok = this.props.pokemon;
        const pokItem = pok === null ? {} : pok;

        const {height, width} = this.state;
        
        return (
            <SafeAreaView style={styles.container}>
                    <View style={styles.centerStyle}>
                        <Image
                            source={{uri: pokItem.imageUrl}}
                            style={{width: width, height: height}}
                            resizeMode= {'contain'}
                            resizeMethod= {'resize'}
                        />
                    </View>
                    <View style={styles.tableDetail}>
                        <TextLabel
                            label={'Id:'}
                            value={pokItem.id}
                            styleLabel={styles.textTitle}
                        />
                        <TextLabel
                            label={'Name:'}
                            value={pokItem.name}
                            styleLabel={styles.textTitle}
                        />
                        <TextLabel
                            label={'Power:'}
                            value={pokItem.hp}
                            styleLabel={styles.textTitle}
                        />
                        <TextLabel
                            label={'Rarity:'}
                            value={pokItem.rarity}
                            styleLabel={styles.textTitle}
                        />
                        <TextLabel
                            label={'Series:'}
                            value={pokItem.series}
                            styleLabel={styles.textTitle}
                        />
                    </View>
            </SafeAreaView>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.object,
    pok: PropTypes.object,
    pokItem: PropTypes.object,
    initSelectedItem: PropTypes.func,

}

export default Pokemon;
