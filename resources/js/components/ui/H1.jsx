

import React from 'react';

import styled from 'styled-components'


const H1UI =  styled.h1`
  color: ${props => (props.color  ? props.color : '#3D4671')};
   font-weight: ${props => (props.bold  ? "bold" : 'normal')};
   font-size: 24px;
   margin: 0 0 15px 0;
   
`

const H1 = ({
  bold, color , children
}) => {
 
  return (
    <H1UI bold color={color}> {children} </H1UI>
  );
};



export default H1;