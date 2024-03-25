import styled from "styled-components";
import AtomLogo from '../../../../assets/svg/AtomLogo.webp'
import ArrowWhite from '../../.././../assets/svg/ArrowWhite.svg'

const Field = styled.div`
    width: 100%;
    height: 80px;
    border: 2px solid #3A3A3A;
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin-top: 40px;
    background: #202020;
`

const InpField = styled.div`
    width: 100%;
    height: 50px;
    border: 2px solid #3A3A3A;
    border-top: none;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-top: -20px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`

const AvaibleBlock = styled.div`
    width: 100px;
    font-size: 12px;
    white-space: nowrap;
    color: #CBCBCB;
    font-weight: 500;
    margin-bottom: 8px;
    margin-left: 10px;
`

const MaxAmount = styled.div`
    width: 25px;
    height: 10px;
    border: 2px solid #3B9CFC;
    font-size: 8px;
    color: #3B9CFC;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    margin-right: 10px;
    margin-bottom: 8px;
`

const TokenLogo = styled.img`
    width: 45px;
    height: 45px;
    margin-left: 20px;
`

const TokenName = styled.a`
    font-size: 25px;
    color: white;
    font-weight: 500;
    margin-left: 10px;
`

const Arrow = styled.img`
    width: 15px;
    height: 15px;
    margin-left: 5px;
`


export const StakePageField = () => {
    return (
        <>
            <Field>
                <div style={{width: "200px", display: "flex", alignItems: "center"}}>
                    <TokenLogo src={AtomLogo} />
                    <TokenName>ATOM</TokenName>
                    <Arrow src={ArrowWhite} />
                </div>
                <StakePageField />
            </Field>
            <InpField>
                <AvaibleBlock>Available: 0 ATOM</AvaibleBlock>
                <MaxAmount>MAX</MaxAmount>
            </InpField>
        </>
    )
}