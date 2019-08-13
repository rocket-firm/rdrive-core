import React from 'react';
import styled from 'styled-components';
import SidebarContainer from 'components/ui/Sidebar';

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
                <SidebarContainer />
            </SidebarContUi>
            <MainContUi>
                {props.children}
            </MainContUi>
        </Container>
    )
}

export default LayoutDefault;