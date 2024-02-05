import { useEffect } from "react";
import "../styles/bootstrap.scss";
import GlobalStyle from "@/styles/global";
import { ThemeProvider } from "styled-components";
import Theme from "@/styles/themes";
import "@/styles/globals.css"

function MyApp({ Component, pageProps }: any) {
  // useEffect(() => {
  //   //@ts-ignore
  //   import("bootstrap/dist/js/bootstrap");
  // }, []);

  return (
    <>
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
