import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import {Home, Pokemon, PokemonAdd} from '../../pages';
import colors from '../../../assets/colors';
import {Provider} from 'react-redux';
import store from '../../../config/redux';
import { color } from 'react-native-reanimated';

class App extends Component {
    constructor(props){
        super(props);
        StatusBar.setBarStyle('light-content', true);
    }

    render(){
        return(
            <Provider store={store}>
                <Router>
                    <Stack key="root">
                        <Scene 
                            key={'Home'} 
                            component={Home} 
                            title={'Pokedex'} 
                            navigationBarStyle={{backgroundColor: colors.navBar}}
                            titleStyle={{color: colors.white}}
                            rightTitle={'Crear'}
                            onRight={() => Actions.push('Pokemon-Add')}
                            rightButtonTextStyle={{color: colors.white}}
                        />
                        <Scene 
                            key={'Pokemon'} 
                            component={Pokemon} 
                            navigationBarStyle={{backgroundColor: colors.navBar}}
                            titleStyle={{color: colors.white}}
                            backButtonTextStyle={{color: colors.white}}
                            backButtonTintColor={colors.white}
                            />
                        <Scene 
                            key={'Pokemon-Add'} 
                            component={PokemonAdd} 
                            title={'Pokemons Add'} 
                            navigationBarStyle={{backgroundColor: colors.navBar}}
                            titleStyle={{color: colors.white}}
                            backButtonTextStyle={{color: colors.white}}
                            backButtonTintColor={colors.white}
                        />
                    </Stack>
                </Router>
            </Provider>
        );
    }

}

export default App;