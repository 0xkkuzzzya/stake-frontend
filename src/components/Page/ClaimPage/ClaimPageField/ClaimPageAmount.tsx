import styled from "styled-components";

const Container = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 20px;
`

const QsAmount = styled.a`
    font-size: 17px;
    color: #fff;
    font-weight: 500;
`

const TokenAmount = styled.a`
    font-size: 12px;
    color: #fff;
    font-weight: 500;
`


export const ClainPageAmount = () => {
    return(
        <Container>
            <QsAmount>10 qsATOM</QsAmount>
            <TokenAmount>9.1 ATOM</TokenAmount>
        </Container>
    )
}