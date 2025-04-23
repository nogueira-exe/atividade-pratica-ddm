import { View, Text, Image, Pressable, Button, StyleSheet } from 'react-native'
import React from 'react'
import { data } from '../../../data/index';
import { useLocalSearchParams } from 'expo-router';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { CarrinhoProvider, useCarrinho } from '../context/CarrinhoContext';
import { Product } from '@/types/product';
import { color } from './../../../node_modules/style-value-types/lib/color/index';



export default function ProdutoDetalhe() {

    const { adicionar, remover } = useCarrinho();

    const statusBarHeight = Constants.statusBarHeight

    const { id } = useLocalSearchParams();
    const produto = data.products.find((p) => p.id.toString() === id);

    if (!produto) {
        return (
            <View className='flex justify-center items-center p-4'>
                <Text className='text-3xl text-red-600 font-bold'>Produto não encontrado!</Text>
            </View>
        );
    }

    return (
        <View style={{ marginTop: statusBarHeight }} className="flex-1">
            <Image source={{ uri: produto.image }} className="w-full h-64 mb-4" />
            <View className='px-4'>
                <Text className="text-2xl font-bold">{produto.title}</Text>
                <Text className="text-lg text-gray-600">{produto.description}</Text>
                <Text className="text-xl font-semibold text-green-600">R$ {produto.price}</Text>
                <View className='flex-row justify-between mt-4 items-end'>
                    <Pressable className='bg-red-500 rounded-full w-10 h-10 items-center justify-center' onPress={() => remover(produto.id.toString())}>
                        <Ionicons name='trash' size={28} color={"white"}/>
                    </Pressable>
                    <Pressable className='bg-green-500 rounded-full w-10 h-10 items-center justify-center' onPress={() => adicionar(produto)}>
                        <Ionicons name='add' size={28} color={"white"}/>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}