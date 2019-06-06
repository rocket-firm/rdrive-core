import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonUI = styled.button`
  cursor: pointer;
  color: #ffffff;
  background-color: ${props => (props.color ? props.color : '#177FF2')};
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  outline: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s e;
`;

const LinkUI = styled(Link)`
  padding: 0;
  line-height: 1;
  text-decoration: none;
  font-size: 12px;
  position: relative;
  padding-left: 14px;
  color: ${props => (props.color ? props.color : '#d1d1d1')};
`;

const Button = ({
  children, color, link, ...attrs
}) => (link ? (
  <LinkUI {...attrs} to={link}>
    {children}
  </LinkUI>
) : (
  <ButtonUI {...attrs} color={color}>
    {children}
  </ButtonUI>
));

export default Button;
