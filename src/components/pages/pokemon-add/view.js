/* eslint-disable prettier/prettier */
/* eslint-disable semi */
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
import {Actions} from 'react-native-router-flux';

class PokemonAdd extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            width: 300,
            height: 100,
          };

    }
    async componentDidMount(){
        console.log('Pokemon - ComponentDidMount:', this.props);
        this.props.initSelectedItem();

        const callback = (width, height) => {
            const totalWidth = Dimensions.get('window').width;
            const cardWidth = totalWidth / 2;
            const cardHeight = (cardWidth * height) / width;
            this.setState({height: cardHeight, width: cardWidth});
          };

        const pok = this.props.pokemon;
        const pokItem = pok === null ? {} : pok

        Image.getSize(pokItem.imageUrl, callback, () => {
            this.setState({height: 200, width: 200});
        });
    }
    render() {
        //console.log('Pokemon:', this.props);
        const pok = this.props.pokemon;
        const pokItem = pok === null ? {} : pok
        const {height, width} = this.state;
        console.log('this.props - Pokemon:', pokItem);
        return (
            <SafeAreaView style={styles.container}>
                    <View style={styles.centerStyle}>
                        <Image
                            source={{uri: pokItem.imageUrl}}
                            style={{width: width, height: height}}
                        />
                    </View>
                    <View style={styles.tableDetail}>
                        <View style={styles.tableDetailHorizontal}>
                            <Text style={styles.textTitle}>Id:</Text>
                            <Text style={styles.text}>{pokItem.id}</Text>
                        </View>
                        <View style={styles.tableDetailHorizontal}>
                            <Text style={styles.textTitle}>Name:</Text>
                            <Text style={styles.text}>{pokItem.name}</Text>
                        </View>
                        <View style={styles.tableDetailHorizontal}>
                            <Text style={styles.textTitle}>Power:</Text>
                            <Text style={styles.text}>{pokItem.hp}</Text>
                        </View>
                        <View style={styles.tableDetailHorizontal}>
                            <Text style={styles.textTitle}>Rarity:</Text>
                            <Text style={styles.text}>{pokItem.rarity}</Text>
                        </View>
                        <View style={styles.tableDetailHorizontal}>
                            <Text style={styles.textTitle}>Series:</Text>
                            <Text style={styles.text}>{pokItem.series}</Text>
                        </View>
                </View>
            </SafeAreaView>
        )
    }
}

export default PokemonAdd;
