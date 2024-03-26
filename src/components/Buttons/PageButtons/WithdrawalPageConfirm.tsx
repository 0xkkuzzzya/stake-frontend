import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    height: 55px;
    background: linear-gradient(to right, #74BCFD, #339BFE);
    border: none;
    font-size: 22px;
    font-weight: 600;
    color: white;
    border-radius: 20px;
    margin-top: 20px;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
`


export const WithdrawalPageConfirm = () => {
    return(
        <Button>Withdrawal</Button>
    )
}