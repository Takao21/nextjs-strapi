import Header from "components/Header";
import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    primary: "#f10000",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
