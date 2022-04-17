import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/Home"
import Login from "../../screens/Login"
import Principal from "../../screens/Painel" 
import { propsNavigationStack } from "./Models";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function() {
    return(
       <Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>  
           <Screen name="Home" component={Home}/>
           <Screen name="Login" component={Login}/>
           <Screen name="Principal" component={Principal}/>
       </Navigator>  
    )
}