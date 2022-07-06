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
          <title>Glucose Monitoring</title>

          <meta
            name="description"
            content="Blood glucose monitoring is the use of a glucose meter for testing the concentration of glucose in the blood (glycemia)."
          />
        </Head>

        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
