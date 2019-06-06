import React from 'react'
import styled from 'styled-components'
const DivUI=styled.div`
  display:flex;
  flex-flow: ${props =>(props.vertical? "column":"row")};
  width:${props =>(props.width? props.width:"auto")};
  height:${props =>(props.height? props.height:"auto")};
`
export default ({ children, vertical,width, height, ...attrs }) => (
  <DivUI {...attrs} vertical={vertical} width={width} height={height}>
    { children }
  </DivUI>
)
