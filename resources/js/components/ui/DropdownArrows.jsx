import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownIconUI = styled.svg`
  fill: none;
`;

const DropdownContentUI = styled.div`
  display: ${props => (props.isOpen ? 'inline-flex' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  top: 100%;
  left: 0;
  z-index: 1;
  flex-flow: column;
`;

const DropdownArrowsWrapperUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border: 1px solid #c2d5e1;
  box-sizing: border-box;
  border-radius: 1px;
  cursor:pointer;
`;

const DropdownArrowsUI = styled.div`
  position: relative;
  display: inline-block;
  
`;

const DropdownArrows = () => {
  const [isOpen, setTrigger] = useState(false);
  return (
    <DropdownArrowsUI onClick={() => setTrigger(!isOpen)} isOpen>
      <DropdownArrowsWrapperUI>
        <DropdownIconUI width="8" height="11" viewBox="0 0 8 11">
          <path d="M1 4.04L4.04 1L7.08 4.04" stroke="#BACCD8" />
          <path d="M7.08008 6.46L4.04008 9.5L1.00008 6.46" stroke="#BACCD8" />
        </DropdownIconUI>
      </DropdownArrowsWrapperUI>
      <DropdownContentUI>
        <DropdownArrowsWrapperUI>
          <DropdownIconUI width="8" height="7" viewBox="0 0 8 7">
            <path d="M1 4.04L4.04 1L7.08 4.04" stroke="#177FF2" />
            <path d="M4 4V7" stroke="#177FF2" />
          </DropdownIconUI>
        </DropdownArrowsWrapperUI>
        <DropdownArrowsWrapperUI>
          <DropdownIconUI width="8" height="5" viewBox="0 0 8 5">
            <path d="M1 4.04L4.04 1L7.08 4.04" stroke="#177FF2" />
          </DropdownIconUI>
        </DropdownArrowsWrapperUI>
        <DropdownArrowsWrapperUI>
          <DropdownIconUI width="8" height="5" viewBox="0 0 8 5">
            <path d="M7.08008 0.96L4.04008 4L1.00008 0.96" stroke="#177FF2" />
          </DropdownIconUI>
        </DropdownArrowsWrapperUI>
        <DropdownArrowsWrapperUI>
          <DropdownIconUI width="8" height="7" viewBox="0 0 8 7">
            <path d="M7.08008 2.96L4.04008 6L1.00008 2.96" stroke="#177FF2" />
            <path d="M4.08008 3L4.08008 0" stroke="#177FF2" />
          </DropdownIconUI>
        </DropdownArrowsWrapperUI>
      </DropdownContentUI>
    </DropdownArrowsUI>
  );
};

export default DropdownArrows;
