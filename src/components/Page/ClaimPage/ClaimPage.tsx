import styled from "styled-components";
import { ClaimPageHeader } from "../../Header/ClaimPageHeader";
import { ClaimPageConfirm } from "../../Buttons/PageButtons/ClaimPageConfirm";
import { ClaimPageField } from "./ClaimPageField/ClaimPageField";
import { ClaimPageInfo } from "./ClaimPageInfo";

const Container = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 500px) {
        width: 80%;
    }
`


export const ClaimPage = () => {
    return(
        <Container>
            <ClaimPageHeader/>
            <ClaimPageField/>
            <ClaimPageConfirm/>
            <ClaimPageInfo/>
        </Container>
    )
}