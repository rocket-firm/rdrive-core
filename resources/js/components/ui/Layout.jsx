import React from 'react';
import styled from 'styled-components';

const DivUI = styled.div`
  display: flex;
  flex-flow: ${props => (props.vertical ? 'column' : 'row')};
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'baseline')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'flex-start')};
`;
export default ({
  children, vertical, width, height, alignItems, justifyContent, ...attrs
}) => (
  <DivUI
    {...attrs}
    vertical={vertical}
    width={width}
    height={height}
    justifyContent={justifyContent}
    alignItems={alignItems}
  >

    {children}
  </DivUI>
);
