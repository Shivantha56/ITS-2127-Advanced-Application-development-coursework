import { Redirect } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function Home() {
    
    return (
    <View>
      <Redirect href={"(routes)/onboarding/"} />
     </View>
  );
}
