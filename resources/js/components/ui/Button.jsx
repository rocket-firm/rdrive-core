
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

const Button = ({
  children, ...attrs
}) => {
 
  return (
    <ButtonUI

      {...attrs}
    >
      {children}
    </ButtonUI>
  );
};



export default Button;