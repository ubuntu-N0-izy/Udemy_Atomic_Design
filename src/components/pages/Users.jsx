import styled from "styled-components";
import { SearchInput } from "../molecules/Searchinput";
import { UserCard } from "../oranisms/user/UserCard";

const users = [...Array(10).keys()].map(((val) => { 
    return {
        id: val,
        ame: `犬っころ${val}`,
        image: "https://source.unsplash.com/brFsZ7qszSY",
        email: "1234@example.com",
        phone: "090-1111-3333",
        company: {
        name:"テスト会社",
        },
        website: "https://google.com"
    }
}))

export const Users = () => {
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <SUserArea>

            {users.map((user) => (
                <UserCard key={users.id} user={user} />
            ))}
            </SUserArea>
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;

`