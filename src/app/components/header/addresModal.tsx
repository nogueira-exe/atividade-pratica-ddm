import { View, Text, Modal, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { buscarEnderecoPorCep } from '../../services/cepService'

interface Props {
    visible: boolean,
    onClose: () => void,
    onSelectAddres: (addres: string) => void,
}

export default function AddresModal({ visible, onClose, onSelectAddres }: Props) {

    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');

    const handleBuscarEndereco = async () => {
        const dados = await buscarEnderecoPorCep(cep);
        const enderecoFormatado = `${dados.rua}, ${dados.bairro}, ${dados.cidade}/${dados.uf}`;

        setEndereco(enderecoFormatado);
        onSelectAddres(enderecoFormatado);
        onClose();
    }

    return (
        <Modal
            visible={visible}
            animationType='slide'
            transparent
        >
            <View className="flex-1 justify-center items-center">
                <View className="bg-white p-6 rounded-lg w-80">
                    <Text className="text-lg font-bold mb-2">Informe seu CEP</Text>
                    <TextInput
                        value={cep}
                        onChangeText={setCep}
                        keyboardType="numeric"
                        placeholder="00000-000"
                        className="border p-2 rounded mb-4"
                    />
                    <Button title="Buscar endereço" onPress={handleBuscarEndereco} />
                    <Button title="Cancelar" color="red" onPress={onClose} />
                </View>
            </View>
        </Modal>
    )
}