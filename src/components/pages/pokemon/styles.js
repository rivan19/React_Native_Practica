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
    },
    textTitle : {
        fontSize: 22,
        color: colors.white,
        fontWeight: 'bold',
        marginRight: 10,
        marginLeft: 10,
    },
    tableDetail: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: 10,
        paddingBottom: 20,
        paddingTop: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: colors.grey,
        borderWidth: 2,
        borderColor: colors.white,
    },
});