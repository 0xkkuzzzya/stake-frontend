import styled from "styled-components";
import { StakePageHeader } from "../../Header/StakePageHeader";
import { StakePageField } from "./StakePageFiels/StakePageField";
import { StakePageConfirm } from "../../Buttons/PageButtons/StakePageConfirm";
import { StakePageInfo } from "./StakePageInfo";


const Container = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StakePage = () => {
    return(
        <Container>
            <StakePageHeader/>
            <StakePageField/>
            <StakePageConfirm/>
            <StakePageInfo/>
        </Container>
    )
}