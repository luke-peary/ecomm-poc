import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import App from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import configureStore from "../redux/store";
import { ThemeProvider } from "styled-components";
import NoSsr from "@material-ui/core/NoSsr";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import Router from "next/router";

const { persistor, store } = configureStore();

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <NoSsr>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <Component {...pageProps} />
              </PersistGate>
            </Provider>
          </ThemeProvider>
        </NoSsr>
      </React.Fragment>
    );
  }
}

export default MyApp;
