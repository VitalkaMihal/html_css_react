import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo/logo (1).svg";

export const Header = () => {
  return (
    <header>
      <div>
        <Logo src={logo} alt="" />
      </div>
    </header>
  );
};

export const Logo = styled.img`
  background-color: black;
`;
