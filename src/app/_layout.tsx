import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import '../styles/global.css'
import { CarrinhoProvider }  from './context/CarrinhoContext'
import Providers from './providers/provider'


export default function RootLayout() {
  return (
    <CarrinhoProvider>
      <Stack
      screenOptions={{
        headerShown: false
      }}/>
    </CarrinhoProvider>
  )
}