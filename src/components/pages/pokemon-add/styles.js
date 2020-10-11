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
    },
    text: {
        fontSize: 20,
        color: colors.white,
    },
    textLabel: {
        fontSize: 20,
        color: colors.white,
        //borderWidth: 1,
        //borderColor: colors.white,
        //marginTop: 20,
        //marginHorizontal: 20,
    },
    textError: {
        fontSize: 20,
        color: colors.error,
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
    tableDetailHorizontal: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 10,
        marginHorizontal: 20,
    },
    imageContainer: {
        marginTop: 40,
        marginBottom: 20,
        borderRadius: 8,
        marginHorizontal: 20,
        height: 200,
        borderWidth: 1,
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      },
      buttonStyle: {
          bottom: 10,
      },
      imageBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: 'cover',
      },
});