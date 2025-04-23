import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { data } from '@/data';
import CategoriaCard from './categoria-card';
import { useRouter } from 'expo-router'

export default function Categoria() {

  const categorias = data.categories

  const router = useRouter();

  return (
    <View className='flex items-start justify-center'>
      <FlatList
        data={categorias}
        horizontal={true}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CategoriaCard
            title={item.title}
            cover={item.cover}
            onPress={() => router.push({ pathname: '/categorias/[id]', params: { id: item.id.toLocaleString() } })}
          />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}