import { View, Text, ScrollView, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/header';
import Categoria from '../categorias';
import Section from '../components/section';
import { router } from 'expo-router';
import Produtos from '../produtos';

export default function index() {

    const notificationCount = 3

    return (
        <SafeAreaView className='flex-1 mx-5'>
            <View>
                <Header />

                <Section
                    title='Categorias'
                    label='Veja mais'
                    onPress={() => router.push('/categoria')}
                />
                <Categoria />

                <Section
                    title='Produtos'
                    label='Veja Mais'
                    onPress={() => router.push('/produtos')}
                />
                <Produtos/>
            </View>
        </SafeAreaView>
    )
}