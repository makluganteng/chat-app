import styled from "styled-components"
import { useState } from "react"
import Chat from "../chat"
import Header from "../header"
import ChatSide from "../sidebar/ChatSide"

const Layout = () => {
   

    return(
        <>
        <Header/>
        <Container>
            <ChatSide/>
            <Chat/>
        </Container>
        
        </>
    )
}

const Container = styled.div`
    
`

export default Layout