import React from 'react';
import PropTypes from 'prop-types';
import { 
    SafeAreaView, 
    Text,
    Image,
    Dimensions,
    View,
    TouchableOpacity, 
    TextInput, 
    Button, Alert
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from './styles';
import {IMAGE_OPTIONS} from '../../../config/images';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';


class PokemonAdd extends React.Component {
    constructor(props){
        super(props)

        const totalWidth = Dimensions.get('window').width;
        const cardWidth = totalWidth / 2;
        const cardHeight = (cardWidth * Dimensions.get('window').height) / totalWidth;
        //this.setState({height: cardHeight, width: cardWidth});

        this.state = {
            width: cardWidth,
            height: cardHeight,
            name: null,
            power: null,
            rarity: null,
            series: null,
            errors: {},
          };
    }
    
    _onSelectImage = () => {
        ImagePicker.showImagePicker(IMAGE_OPTIONS, (response) => {
            if (response.uri) {
              this.setState({image: response});
            }
          });
    }

    _onPressButton = () => {
        //console.log('_onPressButton - state:', this.state);
        const {name, power, rarity, series, image} = this.state;
        const errors = {};

        if (!name){
            errors.name = '\'Name\'. Campo obligatorio';
        }
        if (!power){
            errors.power = '\'Power\'. Campo obligatorio';
        } else if (!_.toNumber(power)) {
            errors.power = '\'Power\'. Debe ser un Número';
        }
        if (!rarity){
            errors.rarity = '\'Rarity\'. Campo obligatorio';
        }
        if (!series){
            errors.series = '\'Series\'. Campo obligatorio';
        }
        if (!image){
            errors.image = '\'Imagen\'. Campo obligatorio';
        }

        this.setState({errors});
        if (_.size(errors)){
            return;
        }

        const item = {
            name,
            hp: power,
            rarity,
            series,
            imageUrl: image && image.data ? `data:image/jpeg;base64,${image.data}` : null,
        };
        //console.log('item:', item);
        this.props.addPokemon(item);
        Actions.pop();
    }

    render(){
        //console.log('Pokemon - state:', this.state);
        const {name, power, rarity, series, errors, image} = this.state;
        const characterImage = image
        ? {uri: image.uri}
        : null;

        //console.log('this.props - Pokemon:', pokItem);
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.centerStyle}>
                    <TouchableOpacity
                        onPress={this._onSelectImage}
                        style={styles.imageContainer}
                    >
                    <Image source={characterImage} style={styles.imageBackground} />
                    {characterImage ? <Text style={{width:200}}></Text> : <Text style={styles.text}>Pulsa para Seleccionar una imagen</Text>}
                    </TouchableOpacity> 
                </View>
                <View style={styles.centerStyle}>
                {errors.image ? <Text style={styles.textError}>{errors.image}</Text> : null}
                </View>
                <View style={styles.tableDetail}>
                    <View style={styles.tableDetailHorizontal}>
                        <Text style={styles.textTitle}>Name:</Text>
                        <TextInput 
                            value={name}
                            onChangeText={(v) => this.setState({name: v})}
                            placeholder={'Introduce el nombre'}
                            style={styles.textLabel}
                        />
                    </View>
                    {errors.name ? <Text style={styles.textError}>{errors.name}</Text> : null}
                    <View style={styles.tableDetailHorizontal}>
                        <Text style={styles.textTitle}>Power:</Text>
                        <TextInput 
                            value={power}
                            onChangeText={(v) => this.setState({power: v})}
                            placeholder={'Power'}
                            style={styles.textLabel}
                        />
                    </View>
                    {errors.power ? <Text style={styles.textError}>{errors.power}</Text> : null}
                    <View style={styles.tableDetailHorizontal}>
                        <Text style={styles.textTitle}>Rarity:</Text>
                        <TextInput 
                            value={rarity}
                            onChangeText={(v) => this.setState({rarity: v})}
                            placeholder={'Introduce la rarity'}
                            style={styles.textLabel}
                        />
                    </View>
                    {errors.rarity ? <Text style={styles.textError}>{errors.rarity}</Text> : null}
                    <View style={styles.tableDetailHorizontal}>
                        <Text style={styles.textTitle}>Series:</Text>
                        <TextInput 
                            value={series}
                            onChangeText={(v) => this.setState({series: v})}
                            placeholder={'Introduce la series'}
                            style={styles.textLabel}
                        />
                    </View>
                    {errors.series ? <Text style={styles.textError}>{errors.series}</Text> : null}
                </View>
                <Button
                    onPress={this._onPressButton}
                    title={'Guardar Cambios'}
                    style={styles.buttonStyle}
                />
            </SafeAreaView>
        )
    }
}

export default PokemonAdd;
