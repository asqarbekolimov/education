import React, { FunctionComponent } from "react";
import { LayoutProps } from "./layout.props";
import Sidebar from "./sidebar/sidebar";
import Header from "./header/header";
import Footer from "./footer/footer";
import styles from "./layout.module.css";
import {
  AppContextProvider,
  IAppContext,
} from "../components/context/app.context";
import { ScrollUp } from "../components";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
      <ScrollUp />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
