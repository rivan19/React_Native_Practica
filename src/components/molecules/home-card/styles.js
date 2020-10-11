import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
    table: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 15,
        padding: 5,
        borderColor: colors.grey,
    },
    tableDetail: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    image: {
        width: 50, 
        height: 50,
        marginHorizontal: 10,
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