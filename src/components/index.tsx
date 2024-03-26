import styled from "styled-components";
import { Routes, Route } from 'react-router-dom';
import { MainHeader } from "./Header/MainHeader/MainHeader";
import { StakePage } from "./Page/StakePage/StakePage";
import { ClaimPage } from "./Page/ClaimPage/ClaimPage";
import { WithdrawalPage } from "./Page/WithdrawalPage/WithdrawalPage";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #161616;
`

const PageContainer = styled.div`
    width: 100%;
    margin-top: 100px;
    display: flex;
    justify-content: center;
`


export const Index = () => {
    return (
        <Container>
            <MainHeader />
            <PageContainer>
                <Routes>
                    <Route path="/deposit/" element={<ClaimPage />} />
                    <Route path="/withdrawal/" element={<WithdrawalPage />} />
                    <Route path="/" element={<StakePage />} />
                    <Route path="/stake" element={<StakePage />} />
                </Routes>
            </PageContainer>
        </Container>
    )
}