import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import '../styles/global.css'


export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      headerShown: false
    }}/>
  )
}