
import React from 'react';
import styled from 'styled-components'

const SwitchInputUI = styled.input.attrs({ type: 'checkbox' })`
    opacity: 0;
    width: 0;
    height: 0;
    
`
const SwitchSliderUI= styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:#BBCDD9;
    transition: .4s;
    border-radius: 10px;
   
    &:before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        left: 1px;
        bottom: 1px;
        background-color: #FFF;
        transition: .4s;
        border-radius: 50%;
    }
    
`

const SwitchUI =styled.label`
    position: relative;
    display: inline-block;
    width: 22px;
    height: 12px;
    margin-bottom: 0;
    vertical-align: middle;
    ${SwitchInputUI}:checked + ${SwitchSliderUI}{ 
        background-color: #737A9B; 
    }
    
    ${SwitchInputUI}:checked + ${SwitchSliderUI}:before{
        transform: translateX(10px);
    }
   
`



const Switch = () => {

  return (
      <SwitchUI> 
          <SwitchInputUI/>
          <SwitchSliderUI/>
      </SwitchUI>
  );
};



export default Switch;