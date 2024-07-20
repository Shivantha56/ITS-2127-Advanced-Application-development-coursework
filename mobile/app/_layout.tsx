import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const colorScheme = useColorScheme();

  return (
    <>
      {isLoggedIn ? (
        <View></View>
      ) : (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name='/index' />
          <Stack.Screen name='(routes)/onboarding/index' />
          <Stack.Screen name='(routes)/welcome-intro/index' />
        </Stack>
      )}
    </>
  );
}
