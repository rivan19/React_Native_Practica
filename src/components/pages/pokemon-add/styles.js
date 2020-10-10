import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main,
    },
    centerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    textTitle : {
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold',
        marginRight: 10
    },
    text: {
        fontSize: 20,
        color: colors.white,
    },
    tableDetail: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    tableDetailHorizontal: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
});