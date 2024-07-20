import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useFonts, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import { LinearGradient } from 'expo-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider'
import { onboardingSwiperData } from '@/constants/constant';
import { router } from 'expo-router';
import { style } from '@/styles/onboarding/onboard';
import { commonStyles } from '@/styles/common/common.style';

export default function WelcomeIntroScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold
  });
  if (!fontsLoaded && !fontError) return null;

  const renderItem = ({ item }: { item: onboardingSwiperDataType }) => (
    <LinearGradient
      colors={["#E5ECF9", "#F6F7F9"]}
      style={{ flex: 1, paddingHorizontal:16 }}
    >
      <View style={{marginTop:80}}>
        <Image source={item.image} style={styless.slideImage}/>
        <Text style={[commonStyles.titile,{fontFamily:"Raleway_700Bold"}]}>{item.title}</Text>
        <View style={{marginTop:15}}>
          <Text style={[style.dscpText,{fontFamily:"Nunito_400Regular"}]}>{item.description}</Text>
          <Text style={[style.dscpText,{fontFamily:"Nunito_400Regular"}]}>{item.sortDescrition}</Text>
          <Text style={[style.dscpText,{fontFamily:"Nunito_400Regular"}]}>{item.sortDescrition2}</Text>
        </View>
      </View>

    </LinearGradient>
  )
  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={ onboardingSwiperData }
      onDone={() => router.push("/login")}
      onSkip={() => router.push("/login")}
      renderNextButton={() => (
        <View style={commonStyles.buttonContainer}>
          <Text style={[style.buttonText, {fontFamily:"Nunito_700Bold"}]}>
            Next
          </Text>
        </View>
      )}
      renderDoneButton={() => (
        <View style={commonStyles.buttonContainer}>
          <Text style={[style.buttonText, {fontFamily:"Nunito_700Bold"}]}>
            Done
          </Text>
        </View>
      )}
      
      showSkipButton={false}
      dotStyle={commonStyles.dotStyle}
      bottomButton={true}
      activeDotStyle={commonStyles.activeDotStyle}
    />
  );
}

const styless = StyleSheet.create({
  slideImage:{
    alignSelf:"center",
    marginBottom:30
  }
})
