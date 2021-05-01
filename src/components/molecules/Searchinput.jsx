import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { Input } from "../atoms/imput/Input"

export const SearchInput = () => {
    return (
        <SContainer>
            <Input pleceholder="検索条件を入力"/>
            <SButtonWrapper>
                <PrimaryButton>検索</PrimaryButton>
            </SButtonWrapper>
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    align-item: center;
`;

const SButtonWrapper = styled.div`
    padding-left: 8px;
`;