import { NextPage } from "next"
import styled from 'styled-components'
import LoginForm from "../../component/form/LoginForm"

const Login: NextPage = () => {
    return(
    <MainContainer>
        <LoginForm />
    </MainContainer>
    )
}
export default Login;
const MainContainer = styled.div`

`