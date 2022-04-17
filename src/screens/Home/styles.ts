import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme";
import { useRef } from 'react';
import { Linking, Text, Platform } from 'react-native';

import { useHover, useFocus, useActive } from 'react-native-web-hooks';

export const styles = StyleSheet.create({
    container:{
        
    },
    HeaderFather:{
            backgroundColor:"#009EFF",
            position: 'relative',
            height: 70,
            width: '100%',
            flexDirection:'row'
        //   HeaderFather:before {
        //     content: "";
        //     display: block;
        //     position: absolute;
        //     border-radius: 100% 50%;
        //     width: 340px;
        //     height: 80px;
        //     background-color: white;
        //     right: -5px;
        //     top: 40px;
        //   },
        //   HeaderFather:after {
        //     content: "";
        //     display: block;
        //     position: absolute;
        //     border-radius: 100% 50%;
        //     width: 300px;
        //     height: 70px;
        //     background-color: #e0efe3;
        //     left: 0;
        //     top: 27px;
        //   },
    },
   
    Shape1:{
        backgroundColor:'#F2F2F2',
        width : 300,
        height: 200,
        marginTop:55,
        borderRadius:100,
        marginLeft:-55,
        
    },
    Shape2:{
        backgroundColor:'#F2F2F2',
        width : 300,
        height: 300,
        marginTop:55,
        borderRadius:100,
        marginLeft:-101,
    },
    Logo:{
        width : '100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:180,
    },
    contentText: {
        marginLeft: 'auto',
        marginRight:'auto' ,
        lineHeight:25,
        width : 270,
        textAlign:'center',
        marginTop:55,
        fontSize: 15,
        fontFamily:FONTS.REGULAR,
        color: COLORS.BLACK_PRIMARY
    },
    titleText: {
        textAlign:'center',
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:55,
        fontSize: 20,
        fontWeight:'bold',
        fontFamily:FONTS.BOLD,
        color: COLORS.BLACK_PRIMARY,

    },
    button:{
        backgroundColor:COLORS.BLUE_LIGTH,
        height:48,
        width:'100%',
        borderRadius:100,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:100,
    },
  



})