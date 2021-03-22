import React from "react";
import styled from "styled-components";
import {AiOutlineShoppingCart} from 'react-icons/ai'


const Nav = styled.nav`
  width: 100vw;
  color: white;
  background: rgba(0,0,0, 0.5);
  padding: 1em 0;
`
const Basket = styled(AiOutlineShoppingCart)`
  color: white;
  font-size: 4em;
`

const NavContainer = styled.div`
  max-width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`



const Navigation = () => {
  return (
    <Nav>
      <NavContainer>

      <h2>Shoppy</h2>
      <div>
      <Basket />

      </div>
      </NavContainer>
    </Nav>
  );
};

export default Navigation;
