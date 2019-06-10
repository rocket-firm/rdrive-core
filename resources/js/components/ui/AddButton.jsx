import React from "react";
import styled from "styled-components";

const AddButtonUI = styled.button`
  display: flex;
  justify-content: center;
  width: 161px;
  height: 57px;
  outline: none;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #eae5e5;
  box-sizing: border-box;
  border-radius: 2px;
  font-size: 35px;
  line-height: 44px;
  color: #eae5e5;
  :hover{
      border-color:#177FF2;
      color:#177FF2;
  }
`;

const AddButton = () => <AddButtonUI>+</AddButtonUI>;
export default AddButton;
