import { NextPage } from 'next'
import RegisterForm from '../../component/form/RegisterForm'
import styled from 'styled-components'

const Register: NextPage = () => {
    return (
        <MainContainer>
            <RegisterForm />
        </MainContainer>
    )
}

export default Register;
const MainContainer = styled.div`

`