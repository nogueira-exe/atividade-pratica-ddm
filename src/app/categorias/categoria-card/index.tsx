import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router';

type Props = {
    title: string;
    cover: any;
    onPress?: () => void;
}

export default function CategoriaCard({ title, cover, onPress } : Props) {
  return (
    <TouchableOpacity
        onPress={onPress}
        className='w-52 h-40 m-2 rounded-xl bg-white elevation-md'
    >
        <Image
            source={{uri: cover}}
            resizeMode='cover'
            className='w-full h-3/4 rounded-t-xl'
        />
        <View className='p-2'>
            <Text className='text-base font-bold'>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}