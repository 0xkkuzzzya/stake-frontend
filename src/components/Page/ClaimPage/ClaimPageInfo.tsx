import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    @media (max-width: 500px) {
        margin-top: 15px;
    }
`

const InfoText = styled.a`
    color: #aaa;
    font-size: 17px;
    font-weight: 500;
    @media (max-width: 500px) {
        font-size: 15px;
    }
`


export const ClaimPageInfo = () => {
    return(
        <Container>
            <InfoText>Max transaction fee</InfoText>
            <InfoText>0.01 QUBE</InfoText>
        </Container>
    )
}