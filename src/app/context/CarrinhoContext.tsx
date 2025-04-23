import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

import { Product } from '@/types/product';

type Props = {
  produto: Product;
};

type CarrinhoContextData = {
    carrinho: Product[];
    adicionar: (produto: Product) => void;
    remover: (id: string) => void;
}

const CarrinhoContext = createContext<CarrinhoContextData>({} as CarrinhoContextData)

export function CarrinhoProvider({ children}: {children: ReactNode }){
    const [carrinho, setCarrinho] = useState<Product[]>([]);

    const adicionar = (produto: Product) => {
        console.log('Adicionando ao carrinho:', produto);
        setCarrinho((prev) => [...prev, produto]);
      };
      
      const remover = (id: string) => {
        console.log('Removendo do carrinho:', id);
        setCarrinho((prev) => prev.filter((p) => p.id.toString() !== id));
      };

      useEffect(() => {
        console.log('Carrinho atualizado:', carrinho);
      }, [carrinho]);
      

    return (
        <CarrinhoContext.Provider value={{ carrinho, adicionar, remover }}>
            {children}
        </CarrinhoContext.Provider>
    );
}

export const useCarrinho = () => useContext(CarrinhoContext);