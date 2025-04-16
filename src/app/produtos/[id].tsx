import { View, Text, Image } from 'react-native'
import React from 'react'
import { data } from '../../../data/index';
import { useLocalSearchParams } from 'expo-router';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';


export default function ProdutoDetalhe() {

    const statusBarHeight = Constants.statusBarHeight

    const { id } = useLocalSearchParams();
    const produto = data.products.find((p) => p.id.toString() === id);

    if (!produto) {
        return (
            <View className='p-4'>
                <Text className='text-3xl text-red-600 font-bold'>Produto não encontrado!</Text>
            </View>
        );
    }

    return (
        <View style={{ marginTop: statusBarHeight }} className="">
            <Image source={{ uri: produto.image }} className="w-full h-64 mb-4" />
            <View className='px-4'>
                <Text className="text-2xl font-bold">{produto.title}</Text>
                <Text className="text-lg text-gray-600">{produto.description}</Text>
                <Text className="text-xl font-semibold text-green-600">R$ {produto.price}</Text>
                <Ionicons
                    name='add-circle' size={40} color={"#32CD32"}
                />
                <View className='w-9 h-9 rounded-full bg-red-500 flex items-center justify-center'>
                    <Ionicons
                        name='trash' size={20} color={"#FFF"}
                    />
                </View>
            </View>
        </View>

    )
}