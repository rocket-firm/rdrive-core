
import React from 'react';

import styled from 'styled-components'


const ButtonUI =  styled.button`
  cursor: pointer;
  color: #ffffff;
  background-color: #177FF2;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  outline:none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s e
    
`

const LinkUI = styled.a`
padding: 0;
  line-height: 1;
  color: $color-primary;
  font-size: 12px;
  position: relative;
  padding-left: 14px;
  text-decoration: underline;
  text-decoration-color: rgba(115, 122, 155, .3);
  transition: .3s;
  &:before {
    content: '';
    background-image: url('/static/images/icon-link.svg');
    background-repeat: no-repeat;
    position: absolute;
    height: 12px;
    width: 12px;
    left: 0;
    top: 0;
  }

  &:hover {
    color: $color-highlight;
    text-decoration-color: rgba( 23, 127, 242, .3);
    &:before {
      background-image: url('/static/images/icon-link--blue.svg');
    }
  }

`

const Button = ({
  children, ...attrs
}) => {
  const Tag = attrs.href ? <LinkUI>{children}</LinkUI> : <ButtonUI>{children}</ButtonUI>;
  return (
    <Tag

      {...attrs}
    >
      {children}
    </Tag>
  );
};



export default Button;