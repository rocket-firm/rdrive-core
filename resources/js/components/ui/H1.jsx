// import styled from 'styled-components';

// export default styled.h1`
//   color: #3D4671;
//   font-weight: bold;
//   font-size: 24px;
//   margin: 0 0 15px 0;
// `

import React from 'react';

import styled from 'styled-components'


const H1UI =  styled.h1`
  color: ${props => (props.custom  ? props.custom : '#3D4671')};
  
   font-weight: bold;
   font-size: 24px;
   margin: 0 0 15px 0;
`

const H1 = ({
   custom , children
}) => {
 
  return (
    <H1UI > {children} </H1UI>
  );
};



export default H1;