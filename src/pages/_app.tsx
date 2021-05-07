import Head from "next/head";
import { AppProps } from "next/app";

import { ThemeProvider } from "@/presentation/styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Klv Member Calendar</title>

        <meta name="description" content="Klv Frontend Test" />
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
