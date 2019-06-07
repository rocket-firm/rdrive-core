import React from "react";

import styled from "styled-components";

const InputUI = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 35px;
  border-radius: 2px;
  border: 1px solid #dbeaf4;
  background-color: transparent;
  padding: 7px 10px;
  font-size: 15px;
  color: #3d4671;
  line-height: normal;

  min-width: 220px;
  outline: none;
`;

const Input = ({ ...attrs }) => <InputUI {...attrs} />;

export default Input;
