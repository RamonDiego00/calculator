import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { propsStack } from '../../routes/Stack/Models';
import { MotiView } from 'moti'
import { styles } from "./style";
import { COLORS } from '../../theme';
import { Button } from '../../components/Button/'
import { color } from 'react-native-reanimated';



const Login = () => {




  return (
    <MotiView style={[styles.container]}
              from={{opacity:0, translateY: -50}}
                    animate={{opacity:1, translateY:0}}
                    transition={{type: 'timing',duration: 1200}}>
    
    <View style={styles.spaceTop}>
</View>


          
          <Text style={styles.title}>Seja bem vindo ao calculator </Text>

          <Text style={styles.subtitle}>Antes de ajuda-lo preciso de algumas informações</Text>

          

          <Input
            style={styles.inputs}
            placeholder="Digite o seu nome completo"
            leftIcon={{ type: 'font-awesome', name: 'user',color:COLORS.BLUE_LIGTH, }}
            keyboardType="name-phone-pad"
            underlineColorAndroid="transparent"
            />
            
          <Input
           style={styles.inputs}
            placeholder="Digite o seu email"
            leftIcon={{ type: 'font-awesome', name: 'envelope',color:COLORS.BLUE_LIGTH }}
            keyboardType="email-address"
      
            />
            <Input
             style={styles.inputs}
            placeholder="Digite sua senha"
            leftIcon={{ type: 'font-awesome', name: 'key',color:COLORS.BLUE_LIGTH }}
            keyboardType="ascii-capable"
            secureTextEntry={true}
            />
            <Input
             style={styles.inputs}
            placeholder="Confirme a sua senha"
            leftIcon={{ type: 'font-awesome', name: 'key',color:COLORS.BLUE_LIGTH }}
            keyboardType="ascii-capable"
            secureTextEntry={true}
            />

              <Button 
                title="Criar conta"
                color={COLORS.WHITE}
                backgroundColor={COLORS.BLUE_LIGTH}
                activeOpacity={0.7}
                style={styles.button}
             />

             <Text >Ou</Text>

             <Button 
                title="CONTINUAR COM O LINKEDIN"
                color={COLORS.WHITE}
                icon="linkedin-square"
                backgroundColor={COLORS.BLUE_LIGTH}
                activeOpacity={0.7}
                style={styles.button2}
             />

              <Text style={styles.span1}>Já tem uma conta?  <Text style={styles.span2}>Conecte-se</Text> </Text>



              <View style={styles.spaceBotton}>

              </View>
    </MotiView>
  );
}




export default Login
