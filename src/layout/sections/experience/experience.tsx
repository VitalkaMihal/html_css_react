import React from "react";
import styled from "styled-components";
import { Title } from "../../../components/title/title";

export const Experience = () => {
  return (
    <StyledExperience>
      <Title title={"Experience"} size={"46px"} />
      <StyledExperienceContainer></StyledExperienceContainer>
    </StyledExperience>
  );
};

export const StyledExperience = styled.section`
  background: #161d2a;
  padding: 100px 150px;
`;

export const StyledExperienceContainer = styled.div``;
