'use client';

import { ApolloWrapper } from '@/providers/ApolloProvider';
import { SessionProvider } from 'next-auth/react';

export interface Props {
  children: React.ReactNode;
}

export default function Provider({ children }: Props) {
  return (
    <SessionProvider>
      <ApolloWrapper>
        {children}
      </ApolloWrapper>
    </SessionProvider>
  );
}