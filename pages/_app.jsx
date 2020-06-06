import React, { useEffect } from "react";
import { ThemeProvider } from "emotion-theming";
import anotherTheme from "@/commons/styles/anotherTheme";
import Layout from "@/layout/index";
import AuthProvider from "@/auth/components/UserContext";

function MyApp({ Component, pageProps, message }) {
  return (
    <ThemeProvider theme={{}}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
