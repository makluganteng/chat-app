import styled from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
const RegisterForm = () => {
    const [username, setUsername] = useState<String>("")
    const [password, setPassword] = useState<String>("")
    const [error, setError] = useState<Boolean>(false)
    const router = useRouter()

    const directLogin = () => {
        router.push("/login")
    }

    const handleInput = () => {
        const data: Object = {
            username: username,
            password: password
        }

        axios.post("/api/register",data).then((res)=>{
            router.push("/dashboard")
        }).catch(e=>{
            setError(true)
        })
    }
    return (
        <>
            <MainContainer>
                <H3Label>Register</H3Label>
                <InputContainer>
                    <UsernameContainer>
                        {
                        error ? <ErrorLabel>Invalid Username</ErrorLabel> : <></>
                        }
                        <UsernameLabel>Username</UsernameLabel>
                        <UsernameInput onChange={e => setUsername(e.target.value)} />
                    </UsernameContainer>
                    <PasswordContainer>
                        {
                        error ? <ErrorLabel>Invalid Password</ErrorLabel> : <></>
                        }
                        <PasswordLabel>Password</PasswordLabel>
                        <PasswordInput type={'password'} onChange={e => setPassword(e.target.value)} />
                    </PasswordContainer>
                </InputContainer>
                <ButtonContainer>
                    <LoginButton onClick={() => { handleInput() }}>Register</LoginButton>
                    <RegisterButton onClick={() => { directLogin() }}>Login</RegisterButton>
                </ButtonContainer>
            </MainContainer>
        </>
    )
}

export default RegisterForm;

const MainContainer = styled.div`
height: 520px;
width: 400px;
background-color: rgba(255,255,255,0.13);
position: absolute;
transform: translate(-50%,-50%);
top: 50%;
left: 50%;
border-radius: 10px;
backdrop-filter: blur(10px);
border: 2px solid rgba(255,255,255,0.1);
box-shadow: 0 0 40px rgba(8,7,16,0.6);
padding: 50px 35px;
font-family: 'Poppins',sans-serif;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
`

const H3Label = styled.h3`
font-size: 32px;
font-weight: 500;
line-height: 42px;
text-align: center;
`

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    margin: 10px 0px 10px 0px;
    align-items: center; 
`

const UsernameContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    margin: 10px 0px 10px 0px;
`

const UsernameLabel = styled.label`
display: block;
margin-top: 30px;
font-size: 16px;
font-weight: 500;
`

const ErrorLabel = styled.label`
display: block;
margin-top: 30px;
font-size: 16px;
font-weight: 500;
color: red;
`

const UsernameInput = styled.input`

`

const PasswordContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    margin: 10px 0px 10px 0px;
`

const PasswordLabel = styled.label`
display: block;
margin-top: 30px;
font-size: 16px;
font-weight: 500;
`

const PasswordInput = styled.input`
&[type="password"]{

}
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center; 
    margin: 30px 0px 30px 0px;
    align-items: center; 
`

const LoginButton = styled.button`
width: 25%;
height: 100%;
margin: 0px 10px 0px 0px;
`

const RegisterButton = styled.button`
width: 25%;
height: 100%;
margin: 0px 0px 0px 10px;

`