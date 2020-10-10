import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
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
    },
    text: {
        fontSize: 20,
        color: colors.white,
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
    tableDetailHorizontal: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
        marginHorizontal: 20,
    },
});