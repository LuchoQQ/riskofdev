import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/merriweather-sans/300.css";
import "@fontsource/bebas-neue";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    fonts: {
      primary: "Merriweather Sans",
      secondary: "Bebas Neue",
    },
  });

  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
