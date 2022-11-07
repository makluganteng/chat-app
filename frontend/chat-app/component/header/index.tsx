import { useState } from "react";
import styled from "styled-components";
import ChatSide from "../sidebar/ChatSide";
import Chat from "../chat";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
    const [open, setOpen] = useState<Boolean>(false)
    const handleSidebar = () => {
        setOpen(!open)
        console.log(open)
        return
    }

  return (
    <>
      <MainContainer>
        <HamburgerIcon onClick={()=>handleSidebar()}>
          <GiHamburgerMenu size={40} />
        </HamburgerIcon>
        <TitleContainer>
          <Titile>ChatApp</Titile>
        </TitleContainer>
      </MainContainer> 
    </>
  );
};

const MainContainer = styled.div`
  background-color: #474e68;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  padding: 20px 0px 20px 0px;
  display: flex;
  justify-center: center;
  align-items: center;
`;

const Titile = styled.h3`
  color: white;
`;

const HamburgerIcon = styled.div`
  position: absolute;
  left: 30px;
  transition: 0.3s ease-in-out;
    &:hover {
        transform: scale(1.04);
    }
`;

export default Header;
