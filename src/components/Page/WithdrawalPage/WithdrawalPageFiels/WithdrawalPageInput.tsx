import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    height: 100%;
    color: white;
    font-size: 25px;
    border: none;
    text-align: right;
    padding-right: 15px;
`


export const WithdrawalPageInput = () => {
    return(
        <Input placeholder="0"></Input>
    )
}

