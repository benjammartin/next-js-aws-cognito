import React, { Fragment } from "react";
import Naviguation from "@/layout/components/naviguation/main";
import { Global, css } from "@emotion/core";
import emotionReset from "emotion-reset";

function Layout({ children }) {
  return (
    <Fragment>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <Naviguation />
      {children}
      <footer> Footer </footer>
    </Fragment>
  );
}

export default Layout;
