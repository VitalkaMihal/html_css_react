import React from "react";
import styled from "styled-components";

export const Nav = () => {
  return (
    <StyledNav>
      <StyledUl>
        <li>Projects</li>
        <li>Technologies</li>
        <li>About me</li>
      </StyledUl>
    </StyledNav>
  );
};

export const StyledNav = styled.nav`
  font-weight: 500;
  font-size: 16px;
  color: #fff;
`;

export const StyledUl = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 80px;
`;
