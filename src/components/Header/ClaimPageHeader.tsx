import styled from "styled-components";
import { useToggleTheme } from "../../hooks/useToggleTheme";

const Header = styled.div`
    width: 100%;
    text-align: center;
`

const PageText = styled.a <{TextColor: string}>`
    font-size: 32px;
    color: ${props => props.TextColor};
    font-weight: 600;
`

const PageDescription = styled.h3`
    font-size: 18px;
    color: #bbb;
    font-weight: 500;
    margin: 0;
    white-space: nowrap;
`


export const ClaimPageHeader = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <Header>
            <PageText TextColor={theme.TextColor}>Claim ATOM</PageText>
            <PageDescription>
                Claiming previously unbonding tokens
            </PageDescription>
        </Header>
    )
}