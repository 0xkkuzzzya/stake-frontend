import styled from "styled-components";
import AtomLogo from '../../../../assets/svg/AtomLogo.webp'
import ArrowWhite from '../../.././../assets/svg/ArrowWhite.svg'
import { WithdrawalPageInput } from "./WithdrawalPageInput";
import { WithdrawalPageModal } from "../../../Modal/PageModal/WithdrawalPageModal";

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
    margin-left: 15px;
`

const MaxAmount = styled.div`
    width: 30px;
    height: 12px;
    border: 2px solid #3B9CFC;
    font-size: 8px;
    color: #3B9CFC;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    margin-bottom: 7px;
    cursor: pointer;
`


export const WithdrawalPageField = () => {
    return (
        <>
            <Field>
                <WithdrawalPageModal/>
                <WithdrawalPageInput/>
            </Field>
            <InpField>
                <AvaibleBlock>Available: 0 ATOM</AvaibleBlock>
                <MaxAmount>MAX</MaxAmount>
            </InpField>
        </>
    )
}