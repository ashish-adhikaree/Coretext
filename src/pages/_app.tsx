import { Router, useRouter } from "next/router";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    Router.events.on("routeChangeStart", () => {
      NProgress.start();
    });
    Router.events.on("routeChangeComplete", () => {
      NProgress.done(false);
    });
  }, [Router]);

  return <Component {...pageProps} key={router.asPath} />;
}
