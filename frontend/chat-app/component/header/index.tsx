import styled from "styled-components";

const Header = () => {
    return (
        <>
        <MainContainer>
            <TitleContainer>
               <Titile>ChatApp</Titile> 
            </TitleContainer>
        </MainContainer>
        </>
    )
}

const MainContainer = styled.div`
    background-color: #474E68;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TitleContainer = styled.div`
    padding: 20px 0px 20px 0px;

`

const Titile = styled.h3`
    color: white;

`

export default Header;