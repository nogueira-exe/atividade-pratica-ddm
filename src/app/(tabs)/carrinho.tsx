"use client";

import { useCarrinho } from "../context/CarrinhoContext";
import { View, Text, Button, Pressable } from "react-native";
import Constants from "expo-constants";
import { useEffect } from "react";

export default function Carrinho() {

  const statusBarHeight = Constants.statusBarHeight;

  const { carrinho, remover } = useCarrinho();

  useEffect(() => {
    console.log("Carrinho atualizado:", carrinho);
  }, [carrinho]);

  const total = carrinho.reduce((soma, item) => soma + item.price, 0);

  return (
    <View
      style={{ marginTop: statusBarHeight }}
      className="flex-1 p-4 bg-white"
    >
      <Text className="text-xl font-bold mb-4">Seu Carrinho</Text>

      {carrinho.length === 0 ? (
        <Text>Seu carrinho está vazio.</Text>
      ) : (
        carrinho.map((produto) => (
          <View
            key={produto.id}
            className="flex-row justify-between items-center mb-3"
          >
            <Text>{produto.title}</Text>
            <Pressable
              className="bg-red-500 rounded-xl px-4 py-2"
              onPress={() => remover(produto.id.toString())}
            >
              <Text className="text-white font-bold">Remover</Text>
            </Pressable>
          </View>
        ))
      )}

      <View className="mt-4">
        <Text className="text-lg font-bold">Total: R$ {total.toFixed(2)}</Text>
      </View>
    </View>
  );
}
