import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider'

export default function App() {
  const {isLoading, isLoggedIn } = useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href="/home" />
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h h-[85vh] px-4">
          <Image 
            source={images.logo}
            className="w-40 h-40"
            resizeMode='contain'
          />

          <Image 
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          />

          <View className='relative mt-5'>
            <Text className="text-3xl text-white 
            font-bold text-center">
              Creativity Begins with {' '}
              <Text className='text-secondary-200'>
                AIRith
              </Text>
            </Text>

            </View>

            <Text className="text-sm font-pregular
             text-gray-100 mt-7 text-center">
              Innovation and Exploration at your fingertips
            </Text>

            <CustomButton 
              title="Continue with Email"
              handlePress={() => router.push('/sign-in')}
              containerStyles="w-full mt-7"
            />
          </View>
      </ScrollView>
      
      <StatusBar backgroundColor='#161622' 
      style='light' />
    </SafeAreaView>
  );
}
