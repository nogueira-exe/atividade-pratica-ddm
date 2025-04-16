import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { data } from './../../../../data/index';
import Constants from 'expo-constants';

export default function CategoriaDetalhe() {

    const statusBarHeight = Constants.statusBarHeight
    const produtos = data.products
    const { id } = useLocalSearchParams();

    const produtosFiltrados = produtos.filter((produto) => produto.idCategory === Number(id));

  return (
    <View style={{ marginTop: statusBarHeight}} className='flex items-center justify-center gap-2'>
        <Text className='text-2xl font-bold'>Produtos de {id}</Text>

        <FlatList
            data={produtosFiltrados}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
                <TouchableOpacity 
                    className='bg-slate-200 m-4 w-48 h-52 rounded-xl'
                    onPress={() => router.push({ pathname: '/produtos/[id]', params: {id: item.id.toString()}})}
                >
                    <Image
                        source={{uri: item.image}}
                        className='w-full h-36 rounded-t-xl'
                    />
                    <Text className='text-base font-semibold mt-2 ml-2'>{item.title}</Text>
                    <Text className='text-base text-green-500 font-bold ml-2'>R${item.price.toFixed(2)}</Text>
                </TouchableOpacity>
            )}
        />
    </View>
  )
}