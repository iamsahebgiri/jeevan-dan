import dynamic from 'next/dynamic';
import { ChakraProvider } from '@chakra-ui/react';
import { StoreProvider } from 'easy-peasy';
import store from '../store';
import customTheme from 'theme';
import { client } from '@/lib/graphqlClient';
import { ClientContext } from 'graphql-hooks';

import '@/styles/index.css';
import '@fontsource/inter/variable.css';

const NProgress = dynamic(() => import('../components/ui/NProgress'), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <ClientContext.Provider value={client}>
        <ChakraProvider theme={customTheme}>
          <NProgress />
          <Component {...pageProps} />
        </ChakraProvider>
      </ClientContext.Provider>
    </StoreProvider>
  );
}
export default MyApp;
