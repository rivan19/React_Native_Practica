import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
    tableDetailHorizontal: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 20,
        color: colors.white,
    },
    textTitle : {
        fontSize: 22,
        color: colors.white,
        fontWeight: 'bold',
        marginRight: 10,
    },
});