import React from "react";

import styled from "styled-components";
const StartLabelUI = styled.label``;
const StarContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`


`;

const HiddenStar = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
// 
const StyledStar = styled.svg`
  width: 14px;
  height: 13px;
  cursor: pointer;
  :hover{
    path{
      stroke:${props => (props.checked ? "#737A9B" : "#177FF2")};;
    }
  }
  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
    
  }
`;

const Star = ({ checked, ...attrs }) => (
  <StartLabelUI>
    <StarContainer>
      <HiddenStar checked={checked} {...attrs} />
      <StyledStar checked={checked} fill="none">
        <path
          d="M4.75716 8.00277L5.00035 7.8674L5.24354 8.00277L7.65018 9.34244L7.17253 6.49196L7.13032 6.24004L7.3097 6.0582L9.31575 4.02457L6.57439 3.61882L6.30807 3.5794L6.19438 3.33537L5.00035 0.772601L3.80633 3.33537L3.69263 3.5794L3.42631 3.61882L0.684955 4.02457L2.69101 6.0582L2.87039 6.24004L2.82818 6.49196L2.35052 9.34244L4.75716 8.00277Z"
          stroke="#ABBCC7"
        />
        <Icon fill="#737A9B">
          <path
            d="M4.75716 8.00277L5.00035 7.8674L5.24354 8.00277L7.65018 9.34244L7.17253 6.49196L7.13032 6.24004L7.3097 6.0582L9.31575 4.02457L6.57439 3.61882L6.30807 3.5794L6.19438 3.33537L5.00035 0.772601L3.80633 3.33537L3.69263 3.5794L3.42631 3.61882L0.684955 4.02457L2.69101 6.0582L2.87039 6.24004L2.82818 6.49196L2.35052 9.34244L4.75716 8.00277Z"
           
          />
        </Icon>
      </StyledStar>
    </StarContainer>
  </StartLabelUI>
);

export default Star;
