import { ReactNode } from 'react';
import { CarrinhoProvider } from '../context/CarrinhoContext';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CarrinhoProvider>
      {children}
    </CarrinhoProvider>
  );
}
