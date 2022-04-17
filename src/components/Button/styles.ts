import {StyleSheet} from 'react-native'
import { BackgroundImage } from 'react-native-elements/dist/config'
import { color } from 'react-native-reanimated'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        width:'100%',
        marginBottom: 36,
    },
    button:{
        height:48,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize: 14,
        fontFamily:FONTS.BOLD
    },
    icon:{
        marginRight:12,
        color:COLORS.BLUE_DARK,
        backgroundColor:COLORS.WHITE,
    }
})