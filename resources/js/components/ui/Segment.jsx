import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SegmentUI = styled.div`
  display: block;
  padding: 5px;
  margin: 5px;
  margin-left: 0;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  text-align: ${props =>
    props.center ? "center" : props.right ? "right" : "left"};
  background: ${props => (props.basic ? "transparent" : "#ffffff")};
  ${props =>
    props.basic &&
    `
		margin: 0;
		padding: 0;
		`}
`;

const Segment = ({ children, color, link, ...attrs }) =>
  link ? (
    <LinkUI {...attrs} to={link}>
      {children}
    </LinkUI>
  ) : (
    <ButtonUI {...attrs} color={color}>
      {children}
    </ButtonUI>
  );

export default Button;
