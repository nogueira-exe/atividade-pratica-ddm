import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useLocation } from '../../services/useLocation'
import AddresModal from './addresModal';

export default function Header() {

    const [modalVisible, setModalVisible] = useState(false);
    const [manualAddres, setManualAddres] = useState('');
    const locationAddres = useLocation();
    const enderecoAtual = manualAddres || locationAddres || 'Buscando localização...';
    const notificationCount = 3;

    return (
        <View className='flex-row items-center justify-between mr-5 my-2'>

            <Image
                source={require('../../../../assets/images/logo-trabalho.png')}
                resizeMode='contain'
                className='w-16 h-16'
            />

            <TouchableOpacity
                className='flex-col justify-center items-center'
                onPress={() => setModalVisible(true)}
            >
                <View className='flex-col justify-center items-center'>
                    <Text className='text-sm font-semibold'>Voce está em:</Text>
                    <Text className='font-semibold border-2 text-sm px-4 rounded-full'>{enderecoAtual}</Text>
                </View>
            </TouchableOpacity>

            <View className="relative">

                <Ionicons name="notifications" size={24} color="#121212" />
                {notificationCount > 0 && (
                    <View className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                        <Text className="text-white text-xs font-bold">{notificationCount}</Text>
                    </View>
                )}

            </View>

            <AddresModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSelectAddres={setManualAddres}
            />

        </View>
    )
}