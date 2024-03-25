import styled from "styled-components";
import { MainHeader } from "./Header/MainHeader";
import { StakePage } from "./Page/StakePage/StakePage";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #161616;
`

const PageContainer = styled.div`
    width: 100%;
    margin-top: 100px;
    display: flex;
    justify-content: center;
`


export const Index = () => {
    return(
        <Container>
            <MainHeader/>
            <PageContainer>
                <StakePage/>
            </PageContainer>
        </Container>
    )
}