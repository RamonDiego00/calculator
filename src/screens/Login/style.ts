import {StyleSheet} from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { COLORS, FONTS } from '../../theme'

export const styles = StyleSheet.create({
    container: {
       height: 400,
       alignItems: 'center',
       justifyContent:'center',
       marginTop:240,
       marginBottom:0
       
    },
    inputs:{
        width:'100%',
        backgroundColor:"#FFFFFF",
        borderWidth:2,
        borderColor:"#C4C4C4",
        borderRadius:25,
        marginTop:10,
        padding:12,
    },
    button:{
        backgroundColor:COLORS.BLUE_LIGTH,
        height:60,
        width:325,
        borderRadius:100,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:66,
        fontSize:18,
        fontWeight:'bold'
    },
    button2:{
        backgroundColor:COLORS.BLUE_DARK,
        height:36,
        width:325,
        borderRadius:100,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:5,
        fontSize:18,
        fontWeight:'bold',
    },
    title:{
        marginBottom:9,
        fontSize:18,
        fontWeight:"bold"
    },
    subtitle:{
        width:300,
        textAlign:'center',
        marginTop:10

    }, 
    spaceTop:{
        width:300,
        height:45,
        backgroundColor:COLORS.BLUE_LIGTH,
        rotation:500,
        marginRight:380,
        marginBottom:30
    },
    
    spaceBotton:{
        width:200,
        height:100,
        backgroundColor:COLORS.BLUE_LIGTH,
        marginLeft:380,
        marginTop:5,
        rotation:500
    },
    span1:{
        marginTop:25
    },
    span2:{
        color:COLORS.BLUE_LIGTH
    }

})