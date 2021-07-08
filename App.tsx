import React from 'react';
import {useFonts} from 'expo-font'
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter'
import {Rajdhani_500Medium, Rajdhani_700Bold} from '@expo-google-fonts/rajdhani'

import { SignIn } from './src/screens/SingIn';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts ({
    Inter_500Medium,
    Inter_400Regular,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })
  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SignIn />
  );
}

