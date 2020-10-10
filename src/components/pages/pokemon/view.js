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
    async componentDidMount(){
        this.props.initSelectedItem();
    }

    render() {
        console.log('Pokemon - state:', this.state);
        const pok = this.props.pokemon;
        const pokItem = pok === null ? {} : pok
        const {height, width} = this.state;
        //console.log('this.props - Pokemon:', pokItem);
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

export default Pokemon;
