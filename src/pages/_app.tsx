import Head from "next/head";
import { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";

import { ThemeProvider } from "@/presentation/styles";
import { queryClient } from "@/infra/http";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Head>
          <title>Klv Member Calendar</title>

          <meta name="description" content="Klv Frontend Test" />
        </Head>

        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
