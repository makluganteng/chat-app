import { useEffect, useState } from "react"
import styled from "styled-components"

const ChatSide = () => {
    const [friends, setFriends] = useState<Array<Object>>()

    useEffect(()=>{
        setFriends([
        {
            name: "Anak Bangsat",
            lastMessage: "oi anjing jadi org jangan goblok"
        },
        {
            name: "Anak Bangsat",
            lastMessage: "oi anjing jadi org jangan goblok"
        },
        {
            name: "Anak Bangsat",
            lastMessage: "oi anjing jadi org jangan goblok"
        }
        ])
    },[])

    

    return(
    <>
        <MainContainer>
            <InboxContainer>
                {friends?.map((id,key)=>{
                        return <Inbox key={key}>
                            <Name>{id.name}</Name>
                            <LastMessage>{id.lastMessage}</LastMessage>
                        </Inbox>
                    })
                }
            </InboxContainer>
        </MainContainer>
    </>
    )
}

export default ChatSide

const MainContainer = styled.div`
    background-color: black;
`

const InboxContainer = styled.div`
    background-color: yellow;
    width: 100%;
`

const Inbox = styled.div`

`

const Name = styled.label`

`

const LastMessage = styled.p`

`