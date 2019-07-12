import React from 'react';

import styled from 'styled-components';

const CheckboxLabelUI = styled.label``;
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: #177ff0;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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

const StyledCheckbox = styled.div`

    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${props => (props.checked ? 'salmon' : 'papayawhip')}
    border-radius: 3px;
    transition: all 150ms;
    border-radius: 1px;
    border: 1px solid #DBEAF4;
    background-color: transparent;
    :hover{
        border-color:#4DA1FF
    }
  
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`;

const Checkbox = ({ checked, ...attrs }) => (
  <CheckboxLabelUI>
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...attrs} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  </CheckboxLabelUI>
);

export default Checkbox;
