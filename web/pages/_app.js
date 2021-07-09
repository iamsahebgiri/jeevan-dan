import dynamic from 'next/dynamic';
import { ChakraProvider } from '@chakra-ui/react';
import { useApollo } from '@/lib/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { StoreProvider } from 'easy-peasy';
import store from '../store';
import customTheme from 'theme';

import '@/styles/index.css';
import '@fontsource/inter/variable.css';

const NProgress = dynamic(() => import('../components/ui/NProgress'), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <StoreProvider store={store}>
      <ApolloProvider client={apolloClient}>
        <ChakraProvider theme={customTheme}>
          <NProgress />
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </StoreProvider>
  );
}
export default MyApp;
