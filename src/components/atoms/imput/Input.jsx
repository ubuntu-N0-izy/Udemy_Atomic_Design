import styled from "styled-components";

export const Input = (props) => {
    const { pleceholder } = props;
    return (
        <SInput tyle="text" placeholder={pleceholder}/>
    )
}

const SInput = styled.input`
    padding: 8px 16px;
    border: solid #ddd 1px;
    border-radius: 9999px;
    outline: none;
`;