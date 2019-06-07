import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonUI = styled.button`
  cursor: pointer;
  color: ${props => (props.system ? "#3D4671" : "#ffffff")};
  background-color: ${props => (props.system ? "#DBEAF4" : "#177FF2")};
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  outline: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  border-radius: 0.25rem;
  transition: color 0.15s e;
  :hover {
    background: ${props => (props.system ? "#DBEAF4" : "#4DA1FF")};
    color: ${props => (props.system ? "#177FF2" : "#ffffff")};
  }
  :disabled {
    background-color: #dbeaf4;
    color: #c4c7d4;
  }
`;

const LinkUI = styled(Link)`
  padding: 0;
  line-height: 1;
  text-decoration: none;
  font-size: 12px;
  position: relative;
  padding-left: 14px;
  color: ${props => (props.color ? props.color : "#d1d1d1")};
`;

const Button = ({ children, color, system, link, disabled, ...attrs }) =>
  link ? (
    <LinkUI {...attrs} to={link}>
      {children}
    </LinkUI>
  ) : (
    <ButtonUI {...attrs} system={system} color={color} disabled={disabled}>
      {children}
    </ButtonUI>
  );

export default Button;
