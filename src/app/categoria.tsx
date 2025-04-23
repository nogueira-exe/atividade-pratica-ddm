import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { data } from '../../data/index';
import CategoriaCard from './categorias/categoria-card';
import { router } from 'expo-router';

export default function categorias() {

  const categorias = data.categories

  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
      <Text className='text-2xl font-bold mb-2'>Categorias</Text>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <CategoriaCard
            title={item.title}
            cover={item.cover}
            onPress={() => router.push({ pathname: '/categorias/[id]', params: { id: item.id.toLocaleString() } })}
          />
        )}
      />
    </SafeAreaView>
  )
}