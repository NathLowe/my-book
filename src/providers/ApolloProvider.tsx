"use client";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";


const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache(),
});

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}
