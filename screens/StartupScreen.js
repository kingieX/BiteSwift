import { View, Text, SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
const StartupScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home")
        }, 4000)
    }, []);
  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
      <Animatable.Image
        source={require("../assets/logo.png")}
        animation="slideInUp"
        iterationCount={1}
        className='h-24 w-24 shadow-lg'
    />

{/* <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='text-8xl mx-2 text-white font-bold text-center'
    >
        BS
    </Animatable.Text> */}

    <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='text-5xl mx-2 text-white font-bold text-center'
    >
        BiteSwift
    </Animatable.Text>

    {/* <Progress.Circle size={30} indeterminate={true} color='white' /> */}
    </SafeAreaView>
  )
}

export default StartupScreen