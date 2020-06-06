import React from "react";
import styled from "@emotion/styled";
/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";
import * as theme from "@/commons/styles/theme";
import { Create } from "@/commons/utils/variants";
import { Refresh } from "@/commons/components/icons";

const bounce = keyframes`
  0 {
    transform: rotate(0deg);
  }
  0% {
    transform: rotate(360deg);
  }
`;

const Variants = Create({
  kind: {
    primary: () => ` 
        color: ${theme.color("primary", 0)};
        background: ${theme.color("primary", 9)};
        &:hover {
          background:${theme.color("primary", 7)};
        }
        &:disabled {
          background:${theme.color("primary", 1)};
          cursor:not-allowed;
        }
        & > svg {
          stroke: ${theme.color("primary", 1)};
          padding:${theme.space(1)} ${theme.space(1)};
        }
      `,
    secondary: () => ` 
      color: ${theme.color("primary", 9)};
      background: transparent;
      border: 1px solid ${theme.color("primary", 9)};
      &:hover {
        background:${theme.color("primary", 7)};
      }
      &:disabled {
        background:${theme.color("primary", 1)};
        cursor:not-allowed;
      }
      & > svg {
        stroke: ${theme.color("primary", 9)};
        padding:${theme.space(1)} ${theme.space(1)};
      }
    `,
  },
  size: {
    large: () => `
        height:${theme.space(6)};
        min-width:${theme.space(8)};
        font-size: 16px;
      `,
    small: () => `
        padding:${theme.space(2)} ${theme.space(3)};
        font-size: 16px;
      `,
  },
});

const ButtonStyles = styled.button(
  {
    border: "none",
    outline: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radius(1),
  },
  (props) => {
    return Variants.get(props);
  }
);

const Button = (props) => {
  console.log(props?.onClick);
  let child = props?.loading ? (
    <Refresh
      css={css`
        animation: ${bounce} 1s ease infinite;
      `}
    />
  ) : (
    props.children
  );

  return (
    <ButtonStyles {...props} kind={props?.kind} size={props?.size}>
      {child}
    </ButtonStyles>
  );
};

export default Button;
