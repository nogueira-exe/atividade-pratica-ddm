import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/header';
import Categoria from '../components/categorias';
import Section from '../components/section';
import { router } from 'expo-router';

export default function index() {

    const statusBarHeight = Constants.statusBarHeight
    const notificationCount = 3

    return (
        <ScrollView className='flex-1 mx-4'>
            <View style={{ marginTop: statusBarHeight }}>
                <Header />

                <Section
                    title='Categorias'
                    label='Veja mais'
                    onPress={() => router.push('/categorias')}
                />
                <Categoria />
            </View>
        </ScrollView>
    )
}