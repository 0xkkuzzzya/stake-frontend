import styled from "styled-components";
import qsAtomlogo from '../../../../assets/svg/qsATOM.svg'
import qsTIAlofo from '../../../../assets/svg/qsTIA.svg'
import { ClainPageAmount } from "./ClaimPageAmount";

const Container = styled.div`
    width: 100%;
    height: 200px;
    background: #202020;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    margin-top: 30px;
    border: 2px solid #3A3A3A;
    border-radius: 20px;
`

const Field = styled.div`
    width: 95%;
    height: 60px;
    margin-top: 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TokenLogo = styled.img`
    width: 40px;
    height: 40px;
`

const TokenName = styled.a`
    font-size: 22px;
    color: white;
    font-weight: 500;
    margin-left: 10px;
`

const TokenContainer = styled.div`
    width: 150px;
    display: flex;
    align-items: center;
    margin-left: 20px;
`


export const ClaimPageField = () => {
    return (
        <Container>
            <Field style={{ border: "2px solid #44A884", marginTop: "0px" }}>
                <TokenContainer>
                    <TokenLogo src={qsAtomlogo} />
                    <TokenName>qsATOM</TokenName>
                </TokenContainer>
                <ClainPageAmount />
            </Field>
            <Field style={{ border: "2px solid #EC8600" }}>
                <TokenContainer>
                    <TokenLogo src={qsTIAlofo} />
                    <TokenName>qsTIA</TokenName>
                </TokenContainer>
                <ClainPageAmount />
            </Field>
        </Container>
    )
}