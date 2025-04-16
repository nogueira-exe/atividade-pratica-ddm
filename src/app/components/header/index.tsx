import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Header() {
    const notificationCount = 3

    return (
        <View className='flex-row items-center justify-between mx-4 m my-2 r-8'>
            <Image
                source={require('../../../../assets/images/logo-trabalho.png')}
                resizeMode='contain'
                className='w-16 h-16'
            />
            <View className='flex-col justify-center items-center'>
                <Text className='text-sm font-semibold'>Voce está em:</Text>
                <Text className='font-semibold border-2 text-lg px-4 rounded-full'>Av. Min. Cirne Lima, 2586</Text>
            </View>
            <View className="relative">
                <Ionicons name="notifications" size={24} color="#121212" />
                {notificationCount > 0 && (
                    <View className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                        <Text className="text-white text-xs font-bold">{notificationCount}</Text>
                    </View>
                )}
            </View>
        </View>
    )
}