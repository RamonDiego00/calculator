import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { MotiView } from 'moti'


import {UserPhoto} from '../UserPhoto'
import {styles} from '../../screens/Home/styles';

import LogoSvg from '../../assets/logo.svg'

export function Header() { 
    return (
      <View style={styles.container}>

        <View style={styles.HeaderFather}>
          {/* <View style={styles.Shape1}></View>
          <View style={styles.Shape2}></View> */}
        </View>

    <View  style={styles.Logo}>
        <LogoSvg/>
        {/* <UserPhoto imageUri= 'https://github.com/RamonDiego00.png'
                    sizes='NORMAL'
        /> */}
    </View>
{/* 
    <MotiView
          from={{opacity:0, translateY: -50}}
          animate={{opacity:1, translateY:0}}
          transition={{type: 'timing',duration: 700}}>
          

    </MotiView> */}

    <View>
      
        <Text style={styles.titleText}> 

        Calcule as suas notas aqui
        
        </Text>

    </View>

    <View>
      <TouchableOpacity>
        <Text style={styles.contentText}> 

        Com o calculator você não precisa quebrar a cabeça com grandes calculos 
        
        </Text>
        </TouchableOpacity>

    </View>
    


      </View>
    );
}