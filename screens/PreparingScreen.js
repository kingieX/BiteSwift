import { View, Text, SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const PreparingScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000)
    }, []);

  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
      <Animatable.Image
        source={require("../assets/process.gif")}
        animation="slideInUp"
        iterationCount={1}
        className='h-90 w-90'
    />

    <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        className='text-lg mx-2 my-10 text-white font-bold text-center'
    >
        Waiting for Resturaurant to accept your order!
    </Animatable.Text>

    <Progress.Circle size={60} indeterminate={true} color='white' />
    </SafeAreaView>
  )
}

export default PreparingScreen;