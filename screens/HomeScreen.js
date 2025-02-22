import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { 
  ChevronDownIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
 } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import createClient from '../sanity';
// import client from '../sanity';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
     });
  }, []);

  useEffect(() => {
    createClient.fetch(
      `
        *[_type == 'featured']{
          ...,
          restaurants[]->{
            ...,
            dishes[]->{
              ...,
            }
            }
          }
        `
      ).then(data => {
          setFeaturedCategories(data)
        })
  }, [])

  // console.log(featuredCategories);
  return (
    <SafeAreaView className='bg-white pt-5'>
        {/* header */}
        <View className='flex-row pb-3 items-center mx-4 space-x-2'>
          <Image 
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />

          <View className='flex-1'>
            <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
            <Text className='font-bold text-xl'>Current Location
              <ChevronDownIcon size={20} color='#00CCBB' />
            </Text>
          </View>

          <UserIcon size={35} color='#00CCBB' />
        </View>

        {/* Search*/}
        <View className='flex-row items-center space-x-2 pb-2 mx-4'>
            <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3'>
              <MagnifyingGlassIcon size={20} color='#00CCBB' />
              <TextInput
                placeholder='Resturant and Cuisines'
                keyboardType='default'
              />
            </View>
            <AdjustmentsHorizontalIcon color='#00CCBB' />
        </View>

        {/* body */}
        <ScrollView className='bg-gray-100'>
          {/* categories */}
          <Categories />

          {/* Featured*/}
          {featuredCategories?.map(category => (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
              featuredCategory='featured'
            />
          ))}
        </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen