import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const ResturantCards = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
    const navigation = useNavigation();

    // console.log(long);

    const maxLength = 30;
    // Truncate the address string to a maximum length
    const truncatedAddress = address.length > maxLength ? address.substring(0, maxLength) + '...' : address;
  return (
    <TouchableOpacity
        onPress={() => {
            navigation.navigate('Restaurant', {
                id,
                imgUrl,
                title,
                rating,
                genre,
                address,
                short_description,
                dishes,
                long,
                lat,
            })
        }}
        className='bg-white mr-3 shadow-sm'
    >
        <Image
            source={{
            uri: urlFor(imgUrl).url(),
            // uri: imgUrl,
            }}
            className='h-36 w-64 rounded-sm'
        />
        <View className='px-3 pb-4'>
            <Text className='font-bold text-lg pt-2'>{title}</Text>
            <View className='flex-row items-center space-x-1'>
                <StarIcon color='green' opacity={0.5} size={22} />
                <Text className='text-gray-500'>
                    <Text className='text-green-500'>{rating}</Text> . {genre}
                </Text>
            </View>

            <View className='flex-row items-center space-x-1'>
                <MapPinIcon color='gray' opacity={0.4} size={22} />
                <Text className='text-xs text-gray-500' >Nearby . {truncatedAddress}</Text>
                <Text>{lat}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default ResturantCards