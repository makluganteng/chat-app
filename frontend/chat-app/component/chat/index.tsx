import styled from "styled-components"
import Image from "next/image"

const Chat = () => {
    const dummyChat = [{
        "sender" : "AnakBangsat",
        "text": "Lagi ngapain cok",
        "time" : "22:01",
        "ownText" : true
    },
    {
        "sender" : "AnakTolol",
        "text" : "gak ngapa ngapain sih",
        "time" : "22:02",
        "ownText": false
    },
    {
        "sender" : "AnakBangsat",
        "text": "Goblok lu",
        "time" : "22:03",
        "ownText": true
    },
    {
        "sender" : "AnakTolol",
        "text" : "Elah gw lagi",
        "time" : "22:04",
        "ownText": false
    }]

    return(
        <> 
        <MainContainer>
            <HeaderReceptiant>
                <Pfp>
                    <Image src={"data:image/jpeg;base64,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"} alt={"dd"} width={60} height={60}/>
                </Pfp>
                <ReceptiantContainer>
                    <ReceptiantNameContainer>
                        <ReceptiantName>AnakBangsat</ReceptiantName>
                    </ReceptiantNameContainer>
                    <ReceptiantLastSeenContainer>
                        <ReceptiantLastSeen>Last seen 22:00</ReceptiantLastSeen>
                    </ReceptiantLastSeenContainer>
                </ReceptiantContainer>
            </HeaderReceptiant>
            <ChatContainer>
                <ChatLayout>
                    {
                        dummyChat.map((value,key)=>{
                            if(value.ownText){
                                return (
                                    <ChatBubbleLeft key={key}>{value.text}</ChatBubbleLeft>
                                )
                            }else{
                                return (
                                    <ChatBubbleRight key={key}>{value.text}</ChatBubbleRight>
                                )
                            }
                        })
                    }
                </ChatLayout>
            </ChatContainer>
        </MainContainer>
        </>
    )

}

const Pfp = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 20px 0px 20px;

`


const HeaderReceptiant = styled.div`
    margin: 0px 0px 0px 0px;
    display:flex;
    background-color: #474e68; 
    
`

const ReceptiantContainer = styled.div`

`

const ReceptiantNameContainer = styled.div`

`

const ReceptiantName = styled.h3`
color: white;
`

const ReceptiantLastSeenContainer = styled.div`

`

const ReceptiantLastSeen = styled.h5`
color: white;
`

const MainContainer = styled.div`
place-items:  center;
float: none;
height: 100%;
overflow: hidden;
background-color: transparent;
`

const ChatContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`
const ChatLayout = styled.div`
    width: 1000px;
    height: 100vh;
    background-color: black;
`

const ChatBubbleRight = styled.div`
    width: 200px;
    border: 2px solid white;
    border-radius: 15px;
    color: white;
`

const ChatBubbleLeft = styled.div`
    width: 200px;
    border: 2px solid white;
    border-radius: 15px;
    color: white;

`

const RightContainer = styled.div`

`

const LeftContainer = styled.div`

`

export default Chat