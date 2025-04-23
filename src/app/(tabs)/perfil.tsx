import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function perfil() {

  return (
    <SafeAreaView className='flex-1 mx-4 mt-6'>
      <Text className='text-3xl font-bold'>Olá!</Text>
      <Text className='text-xl font-semibold mt-8'>Sobre nossa equipe!</Text>
      <View className='w-full h-2/4 bg-white rounded-xl p-6'>
        <Text>Nossa equipe é formada por Matheus Nogueira e João Pires. Somos estudantes do quinto período do curso de Engenharia de Software e este aplicativo está sendo desenvolvido como parte de um projeto acadêmico, atendendo aos requisitos parciais de avaliação da disciplina de Desenvolvimento de Dispositivos Móveis tendo como orientador o Prof. Roginaldo Franco. O projeto tem como objetivo a aplicação prática de conceitos como arquitetura de software, desenvolvimento mobile com React Native, gerenciamento de estado e boas práticas de design de interface.</Text>
      </View>
    </SafeAreaView>
  )
}