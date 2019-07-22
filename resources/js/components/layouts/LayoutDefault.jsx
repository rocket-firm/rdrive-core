import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
`

const SidebarContUi = styled.div`
    flex-basis: 20%;
`

const MainContUi = styled.div`
    flex-basis: 80%;
`

const LayoutDefault = (props) => {
    return (
        <Container>
            <SidebarContUi>
                {props.children[0]}
            </SidebarContUi>
            <MainContUi>
                {props.children[1]}
            </MainContUi>
        </Container>
    )
}

export default LayoutDefault;