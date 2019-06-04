import React from 'react'
import styled from 'styled-components'
const DivUI=styled.div`
  display:flex;
  flex-flow: ${props =>(props.vertical? "column":"row")};
`
export default ({ children, vertical }) => (
  <DivUI vertical={vertical}>
    { children }
  </DivUI>
)
