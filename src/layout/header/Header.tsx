import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Nav } from "../../components/nav/nav";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Logo />
        <Nav />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export const StyledHeaderContainer = styled.div`
  margin: 25px 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledHeader = styled.header`
  background-color: #0f1624;
  display: flex;
`;
