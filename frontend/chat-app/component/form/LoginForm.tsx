import styled from 'styled-components'

export const LoginForm = () => {
    return(
        <>
            <MainContainer>
                <InputContainer>
                    <UsernameContainer>
                        <UsernameLabel>Username</UsernameLabel>
                        <UsernameInput/>
                    </UsernameContainer>
                    <PasswordContainer>
                        <PasswordLabel>Password</PasswordLabel>
                        <PasswordInput/>
                    </PasswordContainer>
                </InputContainer>
                <ButtonContainer>
                    <LoginButton>Login</LoginButton>
                    <RegisterButton>Register</RegisterButton>
                </ButtonContainer>
            </MainContainer>
        </>
    )
}

const MainContainer = styled.div`


`

const InputContainer = styled.div`

`

const UsernameContainer = styled.div`

`

const UsernameLabel = styled.label`

`

const UsernameInput = styled.input`

`

const PasswordContainer = styled.div`

`

const PasswordLabel = styled.label`

`

const PasswordInput = styled.input`

`

const ButtonContainer = styled.div`

`

const LoginButton = styled.button`

`

const RegisterButton = styled.button`

`