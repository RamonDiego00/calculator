import React from "react";
import{ View,
     Text,
      TouchableOpacity,
      TouchableOpacityProps,
       ColorValue,
       ActivityIndicator
    } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import { styles } from './styles';

type Props = TouchableOpacityProps &  {
    title: string,
    color: ColorValue,
    backgroundColor: ColorValue,
    icon?: React.ComponentProps<typeof AntDesign>['name'];
}

export function Button({
    title, 
    color, 
    backgroundColor,
    icon,
    ...rest
    }: Props) {
    return (
        <TouchableOpacity
        style={[styles.button, {backgroundColor}]}
        activeOpacity={0.7}
        {...rest}>

{
            
            <>
            <AntDesign name={icon} size={24} style={styles.icon}/>           
             <Text style={[styles.title, {color}]}>
                {title}
            </Text>
            </>}
       
        </TouchableOpacity>
    )
}