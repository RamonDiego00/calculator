import React from 'react';
import {
  useFonts, Roboto_400Regular,Roboto_700Bold
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';

import{Inter_400Regular,Inter_700Bold} from '@expo-google-fonts/inter'
import {StatusBar} from 'expo-status-bar'


import Route from "./src/routes"


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Inter_400Regular,
    Inter_700Bold
  })



return (
  <Route/>
);
}

