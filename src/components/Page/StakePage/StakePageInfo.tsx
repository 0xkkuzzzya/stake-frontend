import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const InfoText = styled.h3`
    font-size: 18px;
    color: #C0C0C0;
    font-weight: 500;
    margin: 0;
    white-space: nowrap;
    line-height: 2em;
`


export const StakePageInfo = () => {
    return(
        <Container>
            <div>
                <InfoText style={{color: "#fff"}}>Annual percentage rate</InfoText>
                <InfoText>You will receive</InfoText>
                <InfoText>Exchange rate</InfoText>
                <InfoText>Max transaction fee</InfoText>
            </div>
            <div style={{textAlign: "right"}}>
                <InfoText style={{color: "#44A884"}}>13.3%</InfoText>
                <InfoText>0 qsATOM</InfoText>
                <InfoText>1 ATOM = 1.326 qsATOM</InfoText>
                <InfoText>0.01 QUBE</InfoText>
            </div>
        </Container>
    )
}