import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const DeleteButtonIconUI = styled.button`
  background: transparent;
  ${Icon}{
      :hover{
          background-color:red
      }
  }
`;
const Icon= styled.svg``

const DeleteButton = () =>
  
    <DeleteButtonIconUI >
        <Icon viewBox="0 0 192 192">
            <path d="M0,192v-192h192v192z" fill="none"/><g fill="#abbcc7"><path d="M37.65625,26.34375l-11.3125,11.3125l58.34375,58.34375l-58.34375,58.34375l11.3125,11.3125l58.34375,-58.34375l58.34375,58.34375l11.3125,-11.3125l-58.34375,-58.34375l58.34375,-58.34375l-11.3125,-11.3125l-58.34375,58.34375z"/></g>
        </Icon>
    </DeleteButtonIconUI>
  ;

export default DeleteButton;
