import { View, Text, Pressable } from 'react-native'
import React from 'react'

type Props = {
    title: string,
    label: string,
    onPress?: () => void
}

export default function Section({ title, label, onPress }: Props) {
    return (
        <View className='w-full flex flex-row justify-between item-center mt-6'>
            <Text className='text-2xl font-bold mb-2 ml-2'>{title}</Text>
            <Pressable onPress={onPress}>
                <Text className='text-sm font-semibold'>{label}</Text>
            </Pressable>
        </View>
    )
}