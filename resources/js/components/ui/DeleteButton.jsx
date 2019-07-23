import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  fill: #abbcc7;
  width: 8px;
  height: 8px;
  :hover {
    fill: #f75566;
  }
`;
const DeleteButtonIconUI = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

`;

const DeleteButtonTextUI = styled.button`
background: transparent;
border: none;
outline: none;
cursor: pointer;
font-size:9px;
color: #737A9B;
line-height: 11px;
font-weight: 600;
:hover{
    color: #F75566;
}
`;

const DeleteButton = ({ text }) => (
  text ? <DeleteButtonTextUI>удалить</DeleteButtonTextUI>
    : (
      <DeleteButtonIconUI>
        <Icon viewBox="0 0 192 192">
          <path d="M0,192v-192h192v192z" fill="none" />
          <g>
            <path d="M37.65625,26.34375l-11.3125,11.3125l58.34375,58.34375l-58.34375,58.34375l11.3125,11.3125l58.34375,-58.34375l58.34375,58.34375l11.3125,-11.3125l-58.34375,-58.34375l58.34375,-58.34375l-11.3125,-11.3125l-58.34375,58.34375z" />
          </g>
        </Icon>
      </DeleteButtonIconUI>
    )
);
export default DeleteButton;
