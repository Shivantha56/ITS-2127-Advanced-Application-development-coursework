import { useFonts, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"
import { style } from '@/styles/onboarding/onboard'
import {router} from "expo-router"

export default function OnBoardingScreen() {
    let [fontsLoaded, fontError] = useFonts({
        Raleway_700Bold,
        Nunito_400Regular,
        Nunito_700Bold
    });
    if (!fontsLoaded && !fontError) return null;
    return (
        <LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={style.firstContainer}>
                <Image source={require('@/assets/logo.png')} style={style.logo} />
                <Image source={require('@/assets/onboarding/shape_9.png')} />
                <View style={style.titileWrapper}>
                    <Image style={style.titileTextShape1} source={require('@/assets/onboarding/shape_3.png')} />
                    <Text style={[style.titleText, { fontFamily: "Raleway_700Bold" }]}>
                        Start learning with
                    </Text>
                    <Image style={style.titileTextShape2} source={require('@/assets/onboarding/shape_2.png')} />
                </View>
                <View>
                    <Image style={style.titileTextShape3} source={require('@/assets/onboarding/shape_6.png')} />
                    <Text style={[style.titleText, { fontFamily: "Raleway_700Bold" }]}>
                        Becodemy
                    </Text>
                </View>
                <View style={style.dscWrapper}>
                    <Text style={[style.dscpText, { fontFamily: "Nunito_400Regular" }]}>
                        Explore a varitey of interactive lessons
                    </Text>

                    <Text style={[style.dscpText, { fontFamily: "Nunito_400Regular" }]}>
                        video, quizzes & assignments.
                    </Text>

                </View>
                <TouchableOpacity onPress={() => router.push("/(routes)/welcome-intro/")} style={style.buttonWrapper}>
                    <Text style={[style.buttonText, { fontFamily: "Nunito_700Regular" }]}>
                        Getting Started
                    </Text>
                </TouchableOpacity>
            </View>

        </LinearGradient>
    );
}
