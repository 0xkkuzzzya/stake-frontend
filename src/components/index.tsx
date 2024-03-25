import styled from "styled-components";
import { MainHeader } from "./Header/MainHeader";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #161616;
`


export const Index = () => {
    return(
        <Container>
            <MainHeader/>
        </Container>
    )
}