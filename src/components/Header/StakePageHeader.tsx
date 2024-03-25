import styled from "styled-components";

const Header = styled.div`
    width: 100%;
    text-align: center;
`

const PageText = styled.a`
    font-size: 32px;
    color: white;
    font-weight: 500;
`

const PageDescription = styled.h3`
    font-size: 18px;
    color: #bbb;
    font-weight: 500;
    margin: 0;
    white-space: nowrap;
`


export const StakePageHeader = () => {
    return(
        <Header>
            <PageText>Stake ATOM</PageText>
            <PageDescription>
                Stake ATOM and receive qsATOM while staking.
            </PageDescription>
        </Header>
    )
}