import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import ProdutoDetalhe from "./produtos/[id]";
import { CarrinhoProvider } from "./context/CarrinhoContext";
import { data } from "@/data";
import { router } from "expo-router";


export default function Produtos() {
  const produtos = data.products;

  return (
    <SafeAreaView className="flex justify-center items-center">
      
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="bg-slate-200 m-4 w-48 h-52 rounded-xl"
            onPress={() =>
              router.push({
                pathname: "/produtos/[id]",
                params: { id: item.id.toString() },
              })
            }
          >
            <Image
              source={{ uri: item.image }}
              className="w-full h-36 rounded-t-xl"
            />
            <Text className="text-base font-semibold mt-2 ml-2">
              {item.title}
            </Text>
            <Text className="text-base text-green-500 font-bold ml-2">
              R${item.price.toFixed(2)}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
