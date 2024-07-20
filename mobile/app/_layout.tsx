import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
// import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import OnBoarding from './(routes)/onboarding/index';

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  // const colorScheme = useColorScheme();
  
  return (
      <>
        {isLoggedIn ? (
          <View></View>
        ):(
          <OnBoarding />
        )}
      </>
  );
}
