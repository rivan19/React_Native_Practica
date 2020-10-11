import React from 'react';
import PropTypes, { string } from 'prop-types';
import {View, Text} from 'react-native';
import styles from './styles';

class TextLabel extends React.Component{
    render(){
        const {label, value, styleLabel} = this.props;
        
        return(
            <View style={styles.tableDetailHorizontal}>
              <Text style={styleLabel}>{label}</Text>
              <Text style={styles.text}>{value}</Text>
            </View>
        )
    };
}

TextLabel.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    styleLabel: PropTypes.object
}

TextLabel.defaultProps = {
    styleLabel: styles.text,
}

export default TextLabel;