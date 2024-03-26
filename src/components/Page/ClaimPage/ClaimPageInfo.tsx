import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

const InfoText = styled.a`
    color: #aaa;
    font-size: 17px;
    font-weight: 500;
`


export const ClaimPageInfo = () => {
    return(
        <Container>
            <InfoText>Max transaction fee</InfoText>
            <InfoText>0.01 QUBE</InfoText>
        </Container>
    )
}