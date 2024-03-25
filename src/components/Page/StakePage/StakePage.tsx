import styled from "styled-components";
import { StakePageHeader } from "../../Header/StakePageHeader";
import { StakePageField } from "./StakePageFiels/StakePageField";


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
        </Container>
    )
}