import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import RootLayout from "src/components/RootLayout";
import { store } from "src/config/store";

export default function App(props: AppProps) {
  const { pageProps, Component } = props;
  return (
    <Provider store={store}>
      <ChakraProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ChakraProvider>
    </Provider>
  );
}
