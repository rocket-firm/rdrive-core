import React from 'react';

import styled from 'styled-components';

const H1UI = styled.h1`
  color: ${props => (props.color ? props.color : '#3D4671')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-size: 24px;
  margin: 0 0 15px 0;
`;
const H2UI = styled.h2`
  color: ${props => (props.color ? props.color : '#3D4671')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-size: 18px;
  margin: 0 0 15px 0;
`;
const H3UI = styled.h3`
  color: ${props => (props.color ? props.color : '#3D4671')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-size: 16px;
  margin: 0 0 15px 0;
`;
const H4UI = styled.h4`
  color: ${props => (props.color ? props.color : '#3D4671')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-size: 15px;
  margin: 0 0 15px 0;
`;
const H5UI = styled.h5`
  color: ${props => (props.color ? props.color : '#3D4671')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-size: 13px;
  margin: 0 0 15px 0;
`;
const H6UI = styled.h6`
  color: ${props => (props.color ? props.color : '#3D4671')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-size: 12px;
  margin: 0 0 15px 0;
`;
const renderTitle = (size, color, children, bold, ...attrs) => {
  console.log(size);
  switch (size) {
    case '1':
      return (
        <H1UI {...attrs} size={size} bold={bold} color={color}>
          {children}
        </H1UI>
      );
    case '2':
      return (
        <H2UI {...attrs} size={size} bold={bold} color={color}>
          {children}
        </H2UI>
      );
    case '3':
      return (
        <H3UI {...attrs} size={size} bold={bold} color={color}>
          {children}
        </H3UI>
      );
    case '4':
      return (
        <H4UI {...attrs} size={size} bold={bold} color={color}>
          {children}
        </H4UI>
      );
    case '5':
      return (
        <H5UI {...attrs} size={size} bold={bold} color={color}>
          {children}
        </H5UI>
      );
    case '6':
      return (
        <H6UI {...attrs} size={size} bold={bold} color={color}>
          {children}
        </H6UI>
      );
    default:
      return 'define size props';
  }
};
const H = ({
  size, color, children, bold,
}) => <div>{renderTitle(size, color, children, bold)}</div>;

export default H;
