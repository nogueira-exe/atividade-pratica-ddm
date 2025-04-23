import { View, Text } from 'react-native'
import React from 'react'
import { Tabs} from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { CarrinhoProvider } from '../context/CarrinhoContext'
import Providers from '../providers/provider'

export default function TabsLayout() {
  return (
    
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#22c55e',
                headerShown: false
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='home' size={size} color={color}/>
                    ),
                }}
            />
            <Tabs.Screen
                name='destaques'
                options={{
                    title: 'Destaques',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='flame' size={size} color={color}/>
                    )
                }}
            />
            <Tabs.Screen
                name='perfil'
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='person' size={size} color={color}/>
                    )
                }}
            />
            <Tabs.Screen
                name='carrinho'
                options={{
                    title: 'Carrinho',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='cart' size={size} color={color}/>
                    )
                }}
            />
        </Tabs>
    
  )
}