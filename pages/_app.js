import Header from "components/Header";
import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import theme from "../theme/theme";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
