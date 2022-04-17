import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MotiView } from 'moti'
import { COLORS } from "../../theme";


import {UserPhoto} from '../../components/UserPhoto'
import {styles} from './styles';

import LogoSvg from '../../assets/logo.svg'

import { propsStack } from '../../routes/Stack/Models'
import { Button } from '../../components/Button'

const Home = () => { 
    const navigation = useNavigation<propsStack>()
    return (
      <View style={styles.container}>



        <View style={styles.HeaderFather}>
          <View style={styles.Shape1}></View>
          <View style={styles.Shape2}></View>
        </View>

    <View  style={styles.Logo}>
        <LogoSvg/>
        {/* <UserPhoto imageUri= 'https://github.com/RamonDiego00.png'
                    sizes='NORMAL'
        /> */}
    </View>

    <MotiView
          from={{opacity:0, translateY: -50}}
          animate={{opacity:1, translateY:0}}
          transition={{type: 'timing',duration: 1200}}>
          

    <View>
      
        <Text  style={styles.titleText } > 

        Calcule as suas notas aqui
        
        </Text>

    </View>

    <View>
      <View>
        <Text style={styles.contentText}> 

        Com o calculator você não precisa quebrar a cabeça com grandes calculos 
        
        </Text>
        </View>


        <Button 
                onPress={() => navigation.navigate("Login")}
                title="Vamos lá"
                color={COLORS.WHITE}
                backgroundColor={COLORS.BLUE_LIGTH}
                activeOpacity={0.7}
                style={styles.button}
              
               
            />

    </View>
    </MotiView>

    
      

      </View>

      
    );
    
}


export default Home