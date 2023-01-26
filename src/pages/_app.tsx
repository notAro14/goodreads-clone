import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import "src/styles/reset.css";

import RootLayout from "src/components/RootLayout";
import { store } from "src/config/store";

export default function App(props: AppProps) {
  const { pageProps, Component } = props;
  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}
