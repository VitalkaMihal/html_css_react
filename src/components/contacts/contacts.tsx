import React from "react";
import styled from "styled-components";

export const Nav = () => {
  return (
    <StyledContacts>
      <StyledUlContacts>
        <li>Projects</li>
        <li>Technologies</li>
        <li>About me</li>
      </StyledUlContacts>
    </StyledContacts>
  );
};

export const StyledContacts = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #fff;
`;

export const StyledUlContacts = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 25px;
`;
