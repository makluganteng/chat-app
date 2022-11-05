import { NextPage } from "next"
import styled from 'styled-components'
import LoginForm from "../../component/form/LoginForm"
import ChatSide from "../../component/sidebar/ChatSide"

const Dashboard: NextPage = () => {
    return (
        <MainContainer>
            <ChatSide />
        </MainContainer>
    )
}
export default Dashboard;

const MainContainer = styled.div`


`