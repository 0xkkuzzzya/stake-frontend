import styled from "styled-components"
import { StakePageHeader } from "../../Header/StakePageHeader";
import { WithdrawalPageField } from "./WithdrawalPageFiels/WithdrawalPageField";
import { WithdrawalPageInfo } from "./WithdrawalPageInfo";
import { WithdrawalPageHeader } from "../../Header/WithdrawalPageHeader";
import { WithdrawalPageConfirm } from "../../Buttons/PageButtons/WithdrawalPageConfirm";

const Container = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 500px) {
        width: 80%;
    }
`


export const WithdrawalPage = () => {
    return(
        <Container>
            <WithdrawalPageHeader/>
            <WithdrawalPageField/>
            <WithdrawalPageConfirm/>
            <WithdrawalPageInfo/>
        </Container>
    )
}