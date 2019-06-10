import React from 'react';
import styled from 'styled-components';

const DivUI = styled.div`
  display: flex;
  flex-flow: ${props => (props.vertical ? 'column' : 'row')};
  width: ${props => (props.width ? props.width : 'inherit')};
  height: ${props => (props.height ? props.height : 'auto')};
  justify-content: ${props => (props.align? props.align:'flex-start')}
`;
export default ({
  children, vertical, width, height, align, ...attrs
}) => (
  <DivUI {...attrs} vertical={vertical} width={width} height={height} align={align}>
    {children}
  </DivUI>
);
