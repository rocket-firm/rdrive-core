import React from "react";
import styled from "styled-components";
const PreviewIconUI = styled.svg`
  width: 11px;
  height: 12px;
  fill: none;
  margin-right: 5px;
  path {
    fill: #737a9b;
  }
`;

const PreviewTextUI = styled.span`
  color:#737A9B;
  border-bottom:1px solid rgba(115, 122, 155, 0.3);
  font:12px/15px Source Sans Pro;
}
`;
const PreviewButtonUI = styled.button`
  display: inline-flex;
  border: none;
  align-items: center;
  background: transparent;
  outline: none;
  cursor: pointer;
  :hover{
      ${PreviewTextUI}{
          color:#177FF2;
          border-color:rgba(23, 127, 242, 0.3);
      }
      ${PreviewIconUI}{
        path {
            fill: #177FF2;
          }
      }
  }
`;

const PreviewButton = () => (
  <PreviewButtonUI>
    <PreviewIconUI viewBox="0 0 11 12">
      <path d="M7.44108 1.95894C7.08371 1.95894 6.79389 1.65912 6.79389 1.2894C6.79389 0.919817 7.08371 0.619995 7.44108 0.619995H10.3529C10.7101 0.619995 11 0.920102 11 1.2894V4.302C11 4.67158 10.7102 4.9714 10.3529 4.9714C9.99571 4.9714 9.7059 4.67158 9.7059 4.302V2.90539L5.95749 6.78329C5.70483 7.04453 5.29517 7.04453 5.04251 6.78329C4.78999 6.52191 4.78999 6.09808 5.04251 5.8367L8.79092 1.95894H7.44108ZM9.7059 6.97947C9.7059 6.60975 9.99571 6.31007 10.3529 6.31007C10.7102 6.31007 11 6.60975 11 6.97947V11.3306C11 11.7002 10.7102 12 10.3529 12H0.647051C0.28981 12 0 11.7002 0 11.3306V1.2894C0 0.919817 0.28981 0.619995 0.647051 0.619995H4.85288C5.21026 0.619995 5.50007 0.919817 5.50007 1.2894C5.50007 1.65912 5.21026 1.95894 4.85288 1.95894H1.29424V10.6612H9.7059V6.97947Z" />
    </PreviewIconUI>
    <PreviewTextUI>Предпросмотр</PreviewTextUI>
  </PreviewButtonUI>
);
export default PreviewButton;
