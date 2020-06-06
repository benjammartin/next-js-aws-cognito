import React from "react";
import UserNaviguation from "../user";
import styled from "@emotion/styled";
import * as theme from "@/commons/styles/theme";

const Nav = styled.nav`
  background: ${theme.color("secondary", 7)};
  padding: ${theme.space(3)};
`;

function Naviguation() {
  return (
    <Nav>
      <UserNaviguation />
    </Nav>
  );
}

export default Naviguation;
