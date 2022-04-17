import React from "react";
import {View} from "react-native";
import {MotiView} from 'moti'

import {Button} from '../Button'

import { styles } from './styles';
import { COLORS } from "../../theme";



export function SignInBox() {
    return (
        <View style={styles.container} >
        
            <Button 
            title="Vamos lá"
            color={COLORS.WHITE}
            backgroundColor={COLORS.BLUE_LIGTH}
            />

        </View>
    )
}